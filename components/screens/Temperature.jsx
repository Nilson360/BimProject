import React from 'react';
import { View, Text,Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/capteurs';

function Temperature() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
        <Text>Go to home</Text>
      </TouchableOpacity>
        <Text style={styles.text}>Données detaillés sur l'incendie </Text>
  </View>
  );
}

export default Temperature;
