import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

export default class SettingsView extends React.Component{
    render() {
        return(
            <View style={styles.container}>
              <Text>This could be the settings page.</Text>
              <StatusBar style="auto" />
            </View>
          );
    }
}