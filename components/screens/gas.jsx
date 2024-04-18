import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/capteurs';

function Gaz() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
          <Text>Go to home</Text>
        </TouchableOpacity>
      <Text style={styles.text}>Données detaillés CO2 </Text>
    </View>
  );
}

export default Gaz;
