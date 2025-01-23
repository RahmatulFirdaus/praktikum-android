import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://via.placeholder.com/100x40', 
          }}
        />
      </View>

      {/* Header */}
      <Text style={styles.header}>Profile</Text>

      {/* Profile Info */}
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://via.placeholder.com/50',
          }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Rahmatul Firdaus</Text>
          <Text style={styles.phone}>0882-4503-2018</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.editText}>Ubah</Text>
        </TouchableOpacity>
      </View>

      {/* Loyalty Code */}
      <TouchableOpacity style={styles.loyaltyContainer}>
        <Text style={styles.loyaltyText}>Loyalty Code</Text>
      </TouchableOpacity>

      {/* Account Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>OVO Premier</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>OVO Points</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>OVO Stamp</Text>
        </TouchableOpacity>
      </View>

      {/* Help Section */}
      <View style={styles.helpContainer}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Pusat Bantuan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#d9d9d9',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 14,
    color: '#666',
  },
  editText: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: 'bold',
  },
  loyaltyContainer: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loyaltyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  optionsContainer: {
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  helpContainer: {
    marginTop: 20,
  },
});

export default ProfileScreen;
