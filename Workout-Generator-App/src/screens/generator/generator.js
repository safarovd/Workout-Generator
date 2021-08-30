import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class GeneratorView extends React.Component{
  static navigationOptions = {
    title: 'Generator Page',
    //Sets Header text of Status Bar
  };
    render() {
      const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
              <Text>This could be the page where we generate user custom workouts.</Text>
              <StatusBar style="auto" />
            </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});