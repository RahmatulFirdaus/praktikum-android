import React, { ReactElement } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const OVOAppUI = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>Cash</Text>
          <Text style={styles.headerBalance}>Rp 0</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerButton}>
            <Feather name="plus" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Feather name="arrow-up" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Feather name="calendar" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Feather name="menu" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.serviceContainer}>
          <ServiceItem icon={<FontAwesome name="heart" size={24} color="#6C63FF" />} label="Favorit" />
          <ServiceItem icon={<MaterialIcons name="savings" size={24} color="#6C63FF" />} label="Pinjaman" />
          <ServiceItem icon={<FontAwesome name="money" size={24} color="#6C63FF" />} label="Uang Elektronik" />
          <ServiceItem icon={<MaterialIcons name="credit-card" size={24} color="#6C63FF" />} label="Angsuran Kredit" />
          <ServiceItem icon={<MaterialIcons name="data-usage" size={24} color="#6C63FF" />} label="Pulsa/Paket Data" />
          <ServiceItem icon={<MaterialIcons name="power" size={24} color="#6C63FF" />} label="PLN" />
          <ServiceItem icon={<Feather name="droplet" size={24} color="#6C63FF" />} label="Air PDAM" />
          <ServiceItem icon={<Feather name="tv" size={24} color="#6C63FF" />} label="Internet & TV Kabel" />
          <ServiceItem icon={<MaterialIcons name="health-and-safety" size={24} color="#6C63FF" />} label="BPJS Kesehatan" />
        </View>
        <View style={styles.promoContainer}>
          <Image source={require('../../assets/images/promo.jpg')} style={styles.promoImage} />

        </View>
      </View>
    </View>
  );
};

const ServiceItem = ({ icon, label }: { icon: ReactElement; label: string }) => (
  <View style={styles.serviceItem}>
    <View style={styles.serviceIcon}>{icon}</View>
    <Text style={styles.serviceLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6C63FF',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerLeft: {
    flex: 1,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerBalance: {
    color: '#fff',
    fontSize: 14,
  },
  headerRight: {
    flexDirection: 'row',
  },
  headerButton: {
    marginLeft: 8,
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  serviceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceItem: {
    width: '33.33%',
    alignItems: 'center',
    marginVertical: 12,
  },
  serviceIcon: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 12,
  },
  serviceLabel: {
    marginTop: 8,
    fontSize: 12,
    color: '#333',
  },
  promoContainer: {
    marginTop: 16,
  },
  promoImage: {
    width: '100%',
    height: 160,
    resizeMode: 'contain',
  },
});

export default OVOAppUI;