import React, { useEffect, useState } from 'react';
import { useWeather } from '../../../useWeather/useWeather';
import { TodaysWeather } from '../../../useWeather/types';
import WeatherForecastView from '../../weatherForecastView';
import CurrentDayWeatherView from '../../currentDayWeatherView';
import {CurrentDayWeatherSummary} from '../../currentDayWeatherSummary';
import { SafeAreaView, Text, View } from 'react-native'; // Import View from 'react-native'
import { styles } from './styles';

export const Home: React.FC = () => {
  const { getCurrentWeather } = useWeather();
  const [weatherData, setWeatherData] = useState<TodaysWeather | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weather = await getCurrentWeather();
        setWeatherData(weather);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchData();
  }, [getCurrentWeather]);

  return (
    <View>
      {weatherData ? (
        <SafeAreaView style={styles.safeArea}>
          <CurrentDayWeatherView todaysWeather={weatherData} />
          <CurrentDayWeatherSummary todaysWeather={weatherData} />
          <WeatherForecastView todaysWeather={weatherData} />
        </SafeAreaView>
      ) : (
        <View>
        <Text>Loading weather data...</Text>
        </View>
      )}
    </View> 
  );
};