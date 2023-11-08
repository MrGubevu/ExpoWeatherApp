import React from 'react';
import { TodaysWeather } from '../../useWeather/types';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { stylesCurrentDayView } from './styles';
import { getImageSource } from './imageUtils'; // Import the getImageSource function



const CurrentDayWeatherView: React.FC<{ todaysWeather: TodaysWeather | null }> = ({
  todaysWeather, 
}) => {
  if (!todaysWeather) {
    return null; // or return a loading indicator, or some default content
  }

  const { currentTemperature, description } = todaysWeather;
  // Use the getImageSource function to get the image source
  const imageSource = getImageSource(description);
  
  return (
    <SafeAreaView>
      <Image source={imageSource} style={stylesCurrentDayView.backgroundImage}  resizeMode="cover" />
        <View style={stylesCurrentDayView.currentWeatherContainer}>
          <Text style={stylesCurrentDayView.temperature}>{currentTemperature}°C</Text>
          <Text style={stylesCurrentDayView.description}>{description}</Text>
        </View>
    </SafeAreaView>
  );
};

export default CurrentDayWeatherView;
