import React from 'react';
import { TodaysWeather } from '../../useWeather/types';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const CurrentDayWeatherSummary: React.FC<{ todaysWeather: TodaysWeather | null }> = ({
  todaysWeather,
}) => {
  if (!todaysWeather) {
    return null; // or return a loading indicator, or some default content
  }

  const { minimumTemperature, currentTemperature, maximumTemperature } = todaysWeather;

  return (
    <View style={styles.container}>

    <View>
    <Text style={styles.tempText}>{minimumTemperature}°C</Text>
    <Text style={styles.text}>Min</Text>
    </View>

    <View>
      <Text style={styles.tempText}>{currentTemperature}°C</Text>
    <Text style={styles.text}>Current:</Text>
    </View>

    <View>
      <Text style={styles.tempText}>{maximumTemperature}°C</Text>
    <Text style={styles.text}>Max:</Text>
    </View>

    </View>
  );
};

