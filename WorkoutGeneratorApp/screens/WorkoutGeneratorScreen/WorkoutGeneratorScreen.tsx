import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { Appbar } from 'react-native-paper';


function WorkoutGeneratorScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* TODO: Make sure you can see this icon */}
        <Appbar>
          <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
        </Appbar>
        <Text>Generator Screen</Text>
      </View>
    );
}

export default WorkoutGeneratorScreen;