import { StyleSheet, Text, View } from 'react-native';

import Greeter from './components/Greeter';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeter greeting='Hello World!' buttonTitle='Click me!'/>
      <Greeter greeting='Hello Universe!' buttonTitle='Tap me!'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
