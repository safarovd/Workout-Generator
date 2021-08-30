import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';

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

export default class LoginView extends React.Component{
  static navigationOptions = {
    title: 'Login Page',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#f4511e',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };
    render() {
      const { navigate } = this.props.navigation;
      return(
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => navigate('GeneratorView')}>
            <Text> Navigate To Generator Screen </Text>
          </TouchableOpacity>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: '#F08080',
    alignItems: 'center',
    justifyContent: 'center',
  }
});