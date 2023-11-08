import { StyleSheet } from 'react-native';

export const stylesCurrentDayView = StyleSheet.create({
  currentWeatherContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    marginBottom: 100,
    marginTop: 50,
    top: 0,
  },
  temperature: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  description: {
    fontSize: 28,
    color: 'white',
  },
  backgroundImage: {
    flex: 1,
    // resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
  },
});
