import React from 'react';
// import MapView from 'react-native-maps';
import { View } from 'react-native';
import Navigation from './src/navigation';
import { appstyles } from './src/appStyles';


export default function App() {
  return (
    <View style={appstyles.container}>
      <Navigation/>
    </View>
  );
}

