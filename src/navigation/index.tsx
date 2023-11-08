
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';
import SavedLocations from '../components/screens/favouriteLocations';
import {FavoriteLocationsMap} from '../components/screens/favouriteLocationsMap/index';
import {Home} from '../components/screens/home/index';


function Navigation (): JSX.Element {
    const Stack = createStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="FavoriteLocationsMap" component={FavoriteLocationsMap} />
                <Stack.Screen name="SavedLocations" component={SavedLocations} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Navigation;
