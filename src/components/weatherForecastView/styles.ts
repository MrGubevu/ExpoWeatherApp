// WeatherComponent/styles.ts
import { StyleSheet } from "react-native";

export const weatherForecaststyles = StyleSheet.create({
  forecastContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 10,

  },
  forecastItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between", // Use justifyContent instead of alignItems
    width: 340,
    marginTop: 1,
    marginBottom: 1,  
    paddingLeft: 25,
    paddingRight: 25,
  },
  weatherIcon: {
    marginTop: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
  },
  textFont: {
    fontSize: 20,
    color: 'white',
  },


});


