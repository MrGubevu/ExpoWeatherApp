import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, View, Text, Image, Button } from 'react-native';
import { WeatherForecastData, TodaysWeather } from '../../useWeather/types'; // Import types
import { weatherForecaststyles } from '../weatherForecastView/styles';
import { getBackgroundColor } from './backgroundColorUtils';
import { getIconSource } from "../../components/weatherForecastView/iconUtils"
import icon from '../../../assets/Icons/clear@2x.png'
import navigation from '../../navigation';
import { useNavigation } from '@react-navigation/native';

// useForecastData hook
export const useForecastData = () => {
  const [forecastData, setForecastData] = useState<WeatherForecastData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasFetchedData, setHasFetchedData] = useState(false);

  useEffect(() => {
    if (!hasFetchedData) {
      const apiKey = 'ea746b888533cc57dee30c0998719314';
      const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const url = apiUrl
            .replace('{lat}', latitude.toString())
            .replace('{lon}', longitude.toString())
            .replace('{API key}', apiKey);

          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              const uniqueDays: { [key: string]: boolean } = {};
              const filteredData = data.list.filter((item: WeatherForecastData) => {
                const date = new Date(item.dt * 1000).toLocaleDateString('en-US');
                if (!uniqueDays[date]) {
                  uniqueDays[date] = true;
                  return true;
                }
                return false;
              });

              setForecastData(filteredData);
              setIsLoading(false);
              setHasFetchedData(true); // Mark data as fetched
            })
            .catch((error) => {
              console.error('Error fetching weather data:', error);
              setIsLoading(false);
            });
        },
        (error) => {
          console.error("Error getting user's location:", error);
          setIsLoading(false);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }, [hasFetchedData]);

  return { forecastData, isLoading, hasFetchedData };
};

// WeatherForecastView component
const WeatherForecastView: React.FC<{ todaysWeather: TodaysWeather | null }> = ({ todaysWeather }) => {
  const { forecastData, isLoading } = useForecastData();
  const navigation = useNavigation();


  const renderForecastItem = ({ item }: { item: WeatherForecastData }) => {
    const timestamp = item.dt;
    const date = new Date(timestamp * 1000);
    const celciusTempreture = item.main.temp - 273.15; // Convert from Kelvin to Celsius
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const description = item.weather[0].description;
    const backgroundColor = getBackgroundColor(description);
    const weatherIcon =getIconSource(description)


    return (
      <SafeAreaView style={[weatherForecaststyles.forecastContainer, { backgroundColor }]}>
        <View style={weatherForecaststyles.forecastItem}>
       
          <Text style={weatherForecaststyles.textFont}>{dayOfWeek}</Text>
          <Image source={{ uri: weatherIcon }} style={weatherForecaststyles.weatherIcon} resizeMode="contain" />
          <Text style={weatherForecaststyles.textFont}>{celciusTempreture.toFixed(0)}</Text>

        </View>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={[weatherForecaststyles.forecastContainer,]}>
      <View>
        {isLoading ? (
          <Text style={weatherForecaststyles.textFont}> Loading forecast data...</Text>
        ) : (
          <FlatList data={forecastData} renderItem={renderForecastItem} keyExtractor={(item) => item.dt.toString()} />
        )}
      </View>
      
      
    </SafeAreaView>
  );
};



export default WeatherForecastView;
