import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SavedLocationsRouteProp } from '../components/screens/favouriteLocations/types';

type RootStackParamList = {
  Home: undefined;
  FavoriteLocationsMap: undefined;
  SavedLocations: { route: SavedLocationsRouteProp };
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type FavoriteLocationsMapProps = NativeStackScreenProps<
  RootStackParamList,
  'FavoriteLocationsMap'
>;
type FavoriteLocationsProps = NativeStackScreenProps<
  RootStackParamList,
  'SavedLocations'
>;

export type { HomeProps, FavoriteLocationsMapProps, FavoriteLocationsProps, RootStackParamList };

