import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1A2980', '#26D0CE']}
        style={styles.gradientBackground}
      >
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image
              style={styles.profileImage}
              source={require('../../assets/images/profile.png')} 
            />
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>Rahmatul Firdaus</Text>
          <Text style={styles.phone}>0882-4503-2018</Text>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.futuristicCard}>
            <Text style={styles.cardTitle}>Loyalty Code</Text>
            <View style={styles.cardBadge}>
              <Text style={styles.badgeText}>ACTIVE</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.serviceGrid}>
            {[
              { title: 'OVO Premier', icon: '💎' },
              { title: 'OVO Points', icon: '🏆' },
              { title: 'OVO Stamp', icon: '🌟' }
            ].map((service, index) => (
              <TouchableOpacity key={index} style={styles.serviceCard}>
                <Text style={styles.serviceIcon}>{service.icon}</Text>
                <Text style={styles.serviceTitle}>{service.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.helpCard}>
            <Text style={styles.helpText}>Help Center</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 30,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  editButton: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  editButtonText: {
    color: 'white',
    fontSize: 12,
  },
  name: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 5,
  },
  cardContainer: {
    marginTop: 30,
  },
  futuristicCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardBadge: {
    backgroundColor: '#26D0CE',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  serviceGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  serviceCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    width: '30%',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  serviceIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  serviceTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  helpCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  helpText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;