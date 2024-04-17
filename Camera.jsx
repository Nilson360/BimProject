// Camera.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Camera = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vue de la caméra</Text>
      <Camera3D />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 18,
    marginBottom: 20
  }
});

export default Camera;
