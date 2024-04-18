import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, Card } from 'react-native-paper';

import { styles } from '../styles/capteurs';

function Gaz() {
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
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
