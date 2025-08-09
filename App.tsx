import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddPlantScreen from './screens/AddPlantScreen';

// Screens for navigation
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Welcome to GreenThumb!</Text>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Add Plant') {
              iconName = 'add-circle';
            }
            return <Ionicons name={iconName!} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add Plant" component={AddPlantScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
