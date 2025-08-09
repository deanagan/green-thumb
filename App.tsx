import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, SafeAreaView, Button } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView>
      <Text>Welcome to GreenThumb!</Text>
      <Button
        title="Add Plant"
        onPress={() => navigation.navigate('Add Plant')}
      />
    </SafeAreaView>
  );
}

function AddPlantScreen() {
  return (
    <SafeAreaView>
      <Text>Add your plant details here.</Text>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add Plant" component={AddPlantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
