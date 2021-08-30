import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

export default class DataInterpreterView extends React.Component{
    render() {
        return(
            <View style={styles.container}>
              <Text>This could be the page where we collect the data the user inputs to use for custom generations.</Text>
              <StatusBar style="auto" />
            </View>
          );
    }
}