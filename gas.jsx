import React from 'react';
import { View, Text,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Gas() {
    const navigation = useNavigation();

  return (
    <View>
      {/*<Text>Gaz</Text>*/}
      <Button
        title="Retour à l'accueil"
        onPress={() => navigation.navigate('Accueil')}
      />
    </View>
  );
}

export default Gas;
