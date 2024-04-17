import React from 'react';
import { ImageBackground, View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Accueil() {
  const navigation = useNavigation();
  const image = require('./assets/bgHome.jpg');

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.bgHome}>
        <Text style={styles.title}>Bienvenue</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button
              title="Gaz"
              onPress={() => navigation.navigate('Gas')}
              color="#ffffff"
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title="Température"
              onPress={() => navigation.navigate('Temperature')}
              color="#ffffff"
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title="Incendie"
              onPress={() => navigation.navigate('Incendie')}
              color="#ffffff"
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title="Caméra"
              onPress={() => navigation.navigate('Camera')}
              color="#ffffff"
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title="Humidité"
              onPress={() => navigation.navigate('Humidite')}
              color="#ffffff"
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title="Capteur"
              onPress={() => navigation.navigate('Capteurs', { refresh: true })}
              color="black"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgHome: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    //backgroundColor: 'green',
    //padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    padding: 10,
    marginTop: 5,
    backgroundColor: 'lightblue',
    width: '100%'
  },
});

export default Accueil;
