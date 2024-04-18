import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/Accueil';

function Accueil() {
  const navigation = useNavigation();
  const image = require('../../assets/bgHome.jpg');

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.bgHome}>
        <Text style={styles.title}>Bienvenue</Text>
        <View style={styles.buttonContainer}>
          {['Gaz', 'Temperature', 'Incendie', 'Camera', 'Humidite'].map((title, index) => (
            <TouchableOpacity
              key={title}
              style={[styles.buttonWrapper, title === 'Capteur' ? styles.lastButton : null]}
              onPress={() => navigation.navigate(title)}
            >
              <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            key={'Capteur'}
            style={[styles.buttonWrapper]}
            onPress={() => navigation.navigate('Capteurs', { refresh: true })}
          >
          <Text style={styles.buttonText}>Capteur</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      
    </View>
  );
}
export default Accueil;
