import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const PlantFactScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Random Plant Fact</Text>
      <Text style={styles.text}>This is the Plant Fact screen.</Text>
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
    color: '#7b1fa2',
  },
  text: {
    fontSize: 16,
  },
});

export default PlantFactScreen;
