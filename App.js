import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Accueil from './components/screens/Accueil';
import Gas from './components/screens/gas';
import Temperature from './components/screens/Temperature';
import Incendie from './components/screens/Incendie';
import Camera from './components/screens/Camera';
import Humidite from './components/screens/Humidite';
import UbidotsPage from './components/screens/UbidotsPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={Accueil} options={{headerShown: false}}/>
        <Stack.Screen name="Gas" component={Gas} options={{headerShown: false}}/>
        <Stack.Screen name="Temperature" component={Temperature} options={{headerShown: false}}/>
        <Stack.Screen name="Incendie" component={Incendie} options={{headerShown: false}}/>
        <Stack.Screen name="Camera" component={Camera} options={{headerShown: false}}/>
        <Stack.Screen name="Humidite" component={Humidite} options={{headerShown: false}}/>
        <Stack.Screen name="Capteurs" component={UbidotsPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
