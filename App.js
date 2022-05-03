import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/Mask.png')} style={styles.headerImage} />
      <Text style={styles.text}>Adherence</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
    top: -80,
  }
});

export default App;
