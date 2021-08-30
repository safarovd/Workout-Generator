import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
    render() {
        return(
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