import React from 'react';
import { View, Text,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Temperature() {
    const navigation = useNavigation();

  return (
    <View>
      <Text>Température</Text>
      <Button
        title="Retour à l'accueil"
        onPress={() => navigation.navigate('Accueil')}
      />
    </View>
  );
}

export default Temperature;
