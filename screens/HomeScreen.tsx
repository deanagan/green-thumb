import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

type HomeStackParamList = {
  HomeMain: undefined;
  PlantOverview: undefined;
  Notifications: undefined;
  PlantFact: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      {/* Welcome Title */}
      <Text style={styles.welcomeTitle}>Welcome to Green Thumb!</Text>
      {/* Top Card: Total Plants and Seeds */}
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('PlantOverview')}>
        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="leaf" size={24} color="green" />
            <Text style={styles.cardTitle}>Plant Overview</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Total Plants: 25</Text>
            <Text style={styles.cardText}>Total Seeds: 10</Text>
          </View>
        </Card>
      </TouchableOpacity>

      {/* Second Card: Upcoming Notifications */}
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Notifications')}>
        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="notifications" size={24} color="blue" />
            <Text style={styles.cardTitle}>Upcoming Notifications</Text>
          </View>
          <View style={styles.cardContent}>
            <Paragraph style={styles.notification}>
              <Ionicons name="time" size={16} color="orange" /> Add Fertilizer
            </Paragraph>
            <Paragraph style={styles.notification}>
              <Ionicons name="time" size={16} color="orange" /> Repot Peace Lillies
            </Paragraph>
          </View>
        </Card>
      </TouchableOpacity>

      {/* Third Card: Random Plant Facts */}
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('PlantFact')}>
        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="planet" size={24} color="purple" />
            <Text style={styles.cardTitle}>Random Plant Fact</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>
              Viola Hederacea is a native Australian ground cover that can thrive in part shade.
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
    color: '#388e3c',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  card: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // Adds shadow to the card
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cardContent: {
    paddingLeft: 5,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  notification: {
    fontSize: 16,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HomeScreen;
