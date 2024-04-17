import React from 'react';
import { View, Text,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Humidite() {
    const navigation = useNavigation();

  return (
    <View>
      <Text>Humidité</Text>
      <Button
        title="Retour à l'accueil"
        onPress={() => navigation.navigate('Accueil')}
      />
    </View>
  );
}

export default Humidite;
