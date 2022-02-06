import {useEffect, useState} from 'react'
import {Platform} from 'react-native'
import Geolocation from 'react-native-geolocation-service'

type LocationType = {
  latitude: number
  longitude: number
}

export const useWatchLocation = () => {
  const [location, setLocation] = useState<LocationType>()

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always')
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }, [])

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        const {latitude, longitude} = position.coords
        setLocation({latitude, longitude})
      },
      error => {
        console.log(error)
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
        interval: 5000,
        fastestInterval: 2000,
      },
    )

    return () => {
      Geolocation.clearWatch(watchId)
    }
  })

  return location
}
