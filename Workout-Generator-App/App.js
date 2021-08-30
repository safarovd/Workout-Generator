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

// A new components that allows to create blinking text
class BlinkingText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};
 
    // Change the state every second 
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 
    // Define any blinking time.
    300);
  }
 
  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style = {{ color: '#9C27B0', fontWeight: 'bold', fontSize : 20 , marginTop : 10 }}>{display}</Text>
    );
  }
}

export default class App extends Component {
  render(){

    const AppNavigator = createStackNavigator(
      {
        LoginView: {screen: LoginView},
        GeneratorView: {screen: GeneratorView},
        DataInterpreterView: {screen: DataInterpreterView},
        SettingsView: {screen: SettingsView}
      },
      {
        defaltNavigationOptions: ({navigation}) => {
          return{
            title: 'Workout Generator',
            headerRight: () => (
              <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <Icon iconStyle={{fontSize: 25, margin: 10}} type='AntDesign' name='settings' onPress={() => navigation.navigate('Settings')}></Icon>
              </View>
            )
          }; 
        },
        initialRouteName: 'Login',
      }
    );
    const Navigation = createAppContainer(AppNavigator);
    return (
    <View style={styles.container}>
      <BlinkingText text = 'If Minh actually quit wasting time,'/>
      <BlinkingText text = ' maybe we would be done by now...🥴'/>
      <StatusBar style="auto" />
    </View>
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
