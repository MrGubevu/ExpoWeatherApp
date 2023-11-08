import { NavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// types.ts
export type RootStackParamList = {
    App: undefined;
    SavedLocations: { savedLocations: Array<{ title: string; description: string }> };
  };
 export  type AppScreenProps = {
    navigation: AppScreenNavigationProp;
  };
  
  export interface MapScreenProps {
    navigation: NavigationProp<any>;
  }
  
  export type AppScreenNavigationProp = StackNavigationProp<RootStackParamList, 'App'>;
  