/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WorkoutGeneratorScreen from './screens/WorkoutGeneratorScreen/WorkoutGeneratorScreen';
import SavedWorkoutsScreen from './screens/SaveScreens/SavedWorkoutsScreen';
import SavedFiltersScreen from './screens/SaveScreens/SavedFiltersScreen';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = "Workout Generator" component = {WorkoutGeneratorScreen} />
        <Tab.Screen name = "Saved Workouts" component = {SavedWorkoutsScreen} />
        <Tab.Screen name = "Quick Filters" component = {SavedFiltersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
