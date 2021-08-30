// Basic library Imports
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { Icon } from 'react-native-elements';

// Navigation Imports 
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Screen Imports
import LoginView from './src/screens/login/login.js';
import GeneratorView from './src/screens/generator/generator.js';
import DataInterpreterView from './src/screens/data-interpreter/data-interpreter.js';
import SettingsView from './src/screens/settings/settings.js';
import { Button } from 'react-native-elements/dist/buttons/Button';


const AppNavigation = createStackNavigator({
  // Cool feature is the initial page is the first screen on this list
  Login: {screen: LoginView},
  GeneratorView: {screen: GeneratorView}
});

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;

class App extends React.Component {
  render() {
    return (
      <Text>this is the App class</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
