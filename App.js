import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Accueil from './Accueil';
import Gas from './gas';
import Temperature from './Temperature';
import Incendie from './Incendie';
import Camera from './Camera';
import Humidite from './Humidite';
import UbidotsPage from './UbidotsPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="Gas" component={Gas} />
        <Stack.Screen name="Temperature" component={Temperature} />
        <Stack.Screen name="Incendie" component={Incendie} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Humidite" component={Humidite} />
        <Stack.Screen name="Capteurs" component={UbidotsPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
