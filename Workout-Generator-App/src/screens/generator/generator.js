import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

export default class GeneratorView extends React.Component{
    render() {
        return(
            <View style={styles.container}>
              <Text>This could be the page where we generate user custom workouts.</Text>
              <StatusBar style="auto" />
            </View>
          );
    }
}