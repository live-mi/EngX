import React, {FC, useEffect, useRef, useState} from 'react'
import {Dimensions, View, Animated, Easing} from 'react-native'
import {getRandomNumber} from './utils'

import styles from './styles'

type FireworkProps = {
  density?: number
  iterations?: number
  duration?: number
}
type CoordsType = {
  x: number[]
  y: number[]
}

export const Firework: FC<FireworkProps> = ({
  density = 5,
  iterations = 30,
  duration = 700,
}) => {
  const [coords, setCoords] = useState<CoordsType>({
    x: [],
    y: [],
  })
  const opacityAnim = useRef(new Animated.Value(1)).current
  const moveAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    setExplosionSpots()
  }, [])

  const animateOpacity = () => {
    opacityAnim.setValue(1)
    Animated.timing(opacityAnim, {
      toValue: 0,
      duration,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => setExplosionSpots())
  }

  const animateMoving = () => {
    moveAnim.setValue(0)
    Animated.timing(moveAnim, {
      toValue: 1,
      duration,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start()
  }

  const setExplosionSpots = () => {
    const x: number[] = Array.from({length: density}, () =>
      getRandomNumber(Dimensions.get('window').width),
    )
    const y: number[] = Array.from({length: density}, () =>
      getRandomNumber(Dimensions.get('window').width),
    )

    setCoords({x, y})

    setTimeout(() => {
      animateOpacity()
      animateMoving()
    })
  }

  const explosionBox = () => {
    const balls = Array.from({length: iterations}, (_, index) => index + 1)
    let step = 0
    let randomTops: any = []
    let randomLefts: any = []
    let randomColors: any = []

    while (step <= iterations) {
      randomTops[step] = moveAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [100, getRandomNumber(200)],
      })
      randomLefts[step] = moveAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [100, getRandomNumber(200)],
      })
      randomColors[step] =
        'rgb(' +
        getRandomNumber(255) +
        ',' +
        getRandomNumber(255) +
        ',' +
        getRandomNumber(255) +
        ')'
      step += 1
    }

    let ballOpacity = opacityAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    })

    return (
      <View style={styles.root}>
        {balls.map((ball, index) => {
          return (
            <Animated.View
              style={[
                styles.ball,
                {
                  top: randomTops[index],
                  left: randomLefts[index],
                  opacity: ballOpacity,
                  backgroundColor: randomColors[index],
                },
              ]}
            />
          )
        })}
      </View>
    )
  }

  const {x, y} = coords

  return (
    <View>
      {x.map((item, index) => {
        return (
          <View
            style={{
              top: y[index],
              left: x[index],
            }}>
            {explosionBox()}
          </View>
        )
      })}
    </View>
  )
}
