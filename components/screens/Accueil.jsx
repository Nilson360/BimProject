import React from 'react';
import { ImageBackground, View, Text, Button} from 'react-native';
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

export default Accueil;
