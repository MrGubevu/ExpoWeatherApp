import React from 'react';
import { MapScreen } from '../../map/index';
import { SafeAreaView } from 'react-native';
import {Props} from './types';


export const FavoriteLocationsMap = ({ navigation }: Props): JSX.Element => {
  return (
    <SafeAreaView>
      <MapScreen navigation={navigation} />
    </SafeAreaView>
  );
};