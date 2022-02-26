import {useEffect, useState} from 'react'
import {Platform} from 'react-native'
import Geolocation, {GeoPosition} from 'react-native-geolocation-service'

type LocationType = {
  latitude: number
  longitude: number
}

export const useCurrentLocation = () => {
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
    Geolocation.getCurrentPosition(
      (position: GeoPosition) => {
        const {latitude, longitude} = position.coords
        setLocation({
          latitude,
          longitude,
        })
      },
      error => {
        console.log(error.code, error.message)
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    )
  }, [])

  return location
}
