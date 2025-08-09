import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, StyleSheet } from 'react-native';

function AddPlantScreen() {
  const [plantName, setPlantName] = useState('');

  const handleAddPlant = () => {
    console.log('Plant Added:', plantName);
    // You can add logic to save this data to state or a database
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Plant Name"
        value={plantName}
        onChangeText={setPlantName}
      />
      <Button title="Add Plant" onPress={handleAddPlant} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
  },
});

export default AddPlantScreen;
