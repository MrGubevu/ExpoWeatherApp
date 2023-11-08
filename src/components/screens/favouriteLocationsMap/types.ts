import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  App: undefined;
  SavedLocations: { savedLocations: Array<{ title: string; description: string }> };
};


export type Props = {
    navigation: AppScreenNavigationProp;
  };
  

export type AppScreenNavigationProp = StackNavigationProp<RootStackParamList, 'App'>;