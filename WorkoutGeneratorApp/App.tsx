/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import WorkoutGeneratorScreen from './screens/WorkoutGeneratorScreen/WorkoutGeneratorScreen';
import SavedWorkoutsScreen from './screens/SaveScreens/SavedWorkoutsScreen';
import SavedFiltersScreen from './screens/SaveScreens/SavedFiltersScreen';



// const Tab = createBottomTabNavigator();

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'workoutgenerator', title: 'Workout Generator', icon: 'home' },
    { key: 'savedworkouts', title: 'Saved Workouts', icon: 'floppy' },
    { key: 'savedfilters', title: 'Saved Filters', icon: 'filter' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    workoutgenerator: WorkoutGeneratorScreen,
    savedworkouts: SavedWorkoutsScreen,
    savedfilters: SavedFiltersScreen,
  });

  return (
    <BottomNavigation
    navigationState={{ index, routes }}
    onIndexChange={setIndex}
    renderScene={renderScene}
  />
  );
}

export default App;
