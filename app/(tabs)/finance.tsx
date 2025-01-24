import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FinanceScreen() {
  return (
    <LinearGradient
      colors={['#1A2980', '#26D0CE']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Finance</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.illustrationContainer}>
          <MaterialCommunityIcons 
            name="finance" 
            size={100} 
            color="rgba(255,255,255,0.3)" 
          />
        </View>
        <Text style={styles.title}>We're Preparing Something Special</Text>
        <Text style={styles.subtitle}>
          Stay tuned. We're working hard to bring you the best financial services.
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 16,
    paddingTop: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.2)',
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  illustrationContainer: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 100,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  notifyButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  notifyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});