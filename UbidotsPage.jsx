import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

const UbidotsPage = () => {
  const route = useRoute();
  const defaultToken = 'BBUS-2oSuiE5GRqZM1JKPjOxBpZZFYShRyB';
  const [apiKey, setApiKey] = useState(defaultToken);
  const [deviceData, setDeviceData] = useState(null);
  const [variablesData, setVariablesData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  useEffect(() => {
    const intervalId = setInterval(fetchDeviceData, 180000); // Rafraîchir toutes les 3 minutes
    return () => clearInterval(intervalId); 
  }, []);

  useEffect(() => {
    if (route.params?.refresh) {
      fetchDeviceData();
    }
  }, [route.params?.refresh]);

  const fetchDeviceData = async () => {
    if (!apiKey) {
      setError('Entrez le token de connexion.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const deviceResponse = await axios.get('https://industrial.api.ubidots.com/api/v2.0/devices/661f8ac47ea13d2d1578cb3f', {
        headers: { 'X-Auth-Token': apiKey }
      });
      setDeviceData(deviceResponse.data);
      fetchVariablesData(deviceResponse.data.variables);
      showUpdateMessage();
    } catch (err) {
      console.log(err.response || err);
      setError('Failed to fetch device data: ' + (err.response ? err.response.data : err.message));
    } finally {
      setLoading(false);
    }
  };

  const fetchVariablesData = async (variablesUrl) => {
    try {
      const variablesResponse = await axios.get(variablesUrl, {
        headers: { 'X-Auth-Token': apiKey }
      });
      setVariablesData(variablesResponse.data.results);
    } catch (err) {
      console.log(err.response || err);
      setError('Failed to fetch variables data: ' + (err.response ? err.response.data : err.message));
    }
  };

  const showUpdateMessage = () => {
    setUpdateMessage('Mise à jour des données');
    setTimeout(() => {
      setUpdateMessage('');
    }, 3000); // Le message disparaît après 3 secondes
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Connexion à Ubidots</Text>
    {  /*<Button
        title={loading ? 'En cours de chargement...' : 'Récupérer les données'}
        onPress={fetchDeviceData}
        disabled={loading}
      />*/}
      {updateMessage ? <Text style={styles.updateMessage}>{updateMessage}</Text> : null}
      <Text style={styles.information}>Attention: les données des capteurs sont mises à jour tous les 3 minutes.</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {deviceData && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataTitle}>Informations du device:</Text>
          <Text>Nom: {deviceData.name}</Text>
         <Text>Active: {deviceData.isActive ? 'Oui' : 'Non'}</Text>
          <Text>Dernier mis à jour: {new Date(deviceData.lastActivity).toLocaleString()}</Text>
        </View>
      )}
      {variablesData && variablesData.map(variable => (
        <View style={styles.variableContainer} key={variable.id}>
          <Text>Capteur: {variable.name}</Text>
          <Text>Valeur(mesure): {variable.lastValue.value}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  information:{
    marginTop: 20,
    color: 'red',
    fontSize: 12,
    width:'90%'
  },
  error: {
    color: 'red',
    marginTop: 10
  },
  updateMessage: {
    color: 'green',
    marginTop: 5
  },
  dataContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: 'lightgrey',
    width: '100%'
  },
  variableContainer: {
    padding: 10,
    marginTop: 5,
    backgroundColor: 'lightblue',
    width: '100%'
  },
});

export default UbidotsPage;
