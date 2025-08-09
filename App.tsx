import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddPlantScreen from './screens/AddPlantScreen';
import HomeScreen from './screens/HomeScreen';
import PlantOverviewScreen from './screens/PlantOverviewScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import PlantFactScreen from './screens/PlantFactScreen';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PlantOverview" component={PlantOverviewScreen} options={{ title: 'Plant Overview' }} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'Upcoming Notifications' }} />
      <Stack.Screen name="PlantFact" component={PlantFactScreen} options={{ title: 'Random Plant Fact' }} />
    </Stack.Navigator>
  );
}

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
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Add Plant" component={AddPlantScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
