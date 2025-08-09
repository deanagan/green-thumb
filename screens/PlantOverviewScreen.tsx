import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const PlantOverviewScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Plant Overview</Text>
      <Text style={styles.text}>This is the Plant Overview screen.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#388e3c',
  },
  text: {
    fontSize: 16,
  },
});

export default PlantOverviewScreen;
