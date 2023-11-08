import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a90e2',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 5,  
    paddingTop: 5, 
  },
  text: {
    marginHorizontal: 20,
    color: 'white',
  },
  tempText: {
    color: 'white',
    fontSize: 25,
    marginHorizontal: 20,
  },
  tempBlock: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
});
