// // forecastItemRenderer.ts
// import React from "react";
// import { View, Text, Image } from "react-native";
// import { WeatherForecastData } from "../../useWeather/types";


// export const renderForecastItem = ({ item }: { item: WeatherForecastData }) => {
//   const timestamp = item.dt;
//   const date = new Date(timestamp * 1000);
//   const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
//   const kelvinTemperature = item.main.temp;
//   const celsiusTemperature = Math.round(kelvinTemperature - 273.15); // Convert Kelvin to Celsius and round it
//   // const uniqueDays: { [key: string]: boolean } = {};
 

//   return (
//     <View >
//       <View>
//         <Text></Text>
//       </View>
      
//       <View>
       
//       </View>
//     </View>
//   );
// };
