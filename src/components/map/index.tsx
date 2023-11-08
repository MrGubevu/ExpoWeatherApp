
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import useLocation  from '../../useLocation/useLocation';
import { MapScreenProps } from './types';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const MapScreen: React.FC<MapScreenProps> = ({ navigation }) => {
  const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null);
  const { getCurrentLocation } = useLocation();

  useEffect(() => {
    const getLocation = async () => {
      const locationObject = await getCurrentLocation();
      if (locationObject) {
        const { latitude, longitude } = locationObject.coords;
        setLocation({ latitude, longitude });
      } else {
        setLocation(null);
      }
    };
    getLocation();
  }, []);

  const handleSaveLocation = () => {
    // Save location logic here
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
        </MapView>
      )}
      <Button title="Save Location" onPress={handleSaveLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
