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


const AppNav = createStackNavigator({
  Login: {screen: LoginView},
  // GeneratorView: {screen: GeneratorView}
});

const App = createAppContainer(AppNav);

export default App;

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Click To Login',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Home Screen"
        onPress={() => navigate('GeneratorView')}
      />
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
