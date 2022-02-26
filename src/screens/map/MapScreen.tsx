import React, {FC} from 'react'
import {Dimensions, View} from 'react-native'
import MapView, {LatLng, Marker} from 'react-native-maps'
import {NavigationInterface} from '../../shared'
import {useWatchLocation} from '../../shared/hooks'
import styles from './styles'

interface MyOrdersProps extends NavigationInterface {}

const screen = Dimensions.get('window')

const ASPECT_RATIO = screen.width / screen.height
const LATITUDE = 37.78825
const LONGITUDE = -122.4324
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export const MapScreen: FC<MyOrdersProps> = () => {
  const location = useWatchLocation()
  const hasLocation = Boolean(location?.latitude && location?.longitude)

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        {hasLocation && (
          <Marker
            coordinate={location as LatLng}
            title="Home"
            description={`Lat: ${location?.latitude} Lng: ${location?.longitude}`}
          />
        )}
      </MapView>
    </View>
  )
}
