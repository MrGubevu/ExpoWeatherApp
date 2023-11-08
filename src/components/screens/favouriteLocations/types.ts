import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  SavedLocations: { savedLocations: Array<{ title: string; description: string }> };
};

export type SavedLocationsRouteProp = RouteProp<RootStackParamList, 'SavedLocations'>;