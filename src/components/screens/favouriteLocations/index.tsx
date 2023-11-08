import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { SavedLocationsRouteProp } from './types';
import { RootStackParamList } from '../../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

function SavedLocations({ route }: { route: SavedLocationsRouteProp }) {
  const { savedLocations } = route.params;
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <FlatList
        data={savedLocations}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Text>{item.title}: {item.description}</Text>
        )}
      />
      <Button
        title="View on map"
        onPress={() => navigate('FavoriteLocationsMap')}
      />
       <Button
        title="Home Page"
        onPress={() => navigate('Home')}
      />
    </View>
  );
}

export default SavedLocations;