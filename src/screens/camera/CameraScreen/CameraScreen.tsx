import React, {useRef, useState} from 'react'
import {View, Alert} from 'react-native'
import {RNCamera} from 'react-native-camera'
import styles from './styles'

export const CameraScreen = () => {
  const cameraRef = useRef(null)
  const [barcodes, setBarcodes] = useState([])

  const barcodeRecognized = ({barcodes}: any) => {
    barcodes.forEach((barcode: any) => console.log(barcode.data))
    setBarcodes(barcodes)
  }

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.scanner}
        ref={cameraRef}
        onGoogleVisionBarcodesDetected={barcodeRecognized}>
        <View>
          {barcodes.map(({data}) =>
            Alert.alert(
              'Scanned Data',
              data,
              [
                {
                  text: 'Okay',
                  onPress: () => console.log('Okay Pressed'),
                  style: 'cancel',
                },
              ],
              {cancelable: false},
            ),
          )}
        </View>
      </RNCamera>
    </View>
  )
}
