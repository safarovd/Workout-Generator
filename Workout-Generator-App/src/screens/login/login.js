import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

export default class LoginView extends React.Component{
    render() {
        return(
            <View style={styles.container}>
              <Text>This could be the page where we login.</Text>
              <StatusBar style="auto" />
            </View>
          );
    }
}