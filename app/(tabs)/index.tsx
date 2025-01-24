import React, { ReactElement } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const ModernOVOAppUI = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1A2980', '#26D0CE']}
        style={styles.gradientBackground}
      />

      <BlurView intensity={90} style={styles.glassHeader}>
        <View>
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={styles.headerBalance}>Rp 0</Text>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerIconButton}>
            <Feather name="bell" size={24} color="white" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconButton}>
            <Feather name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </BlurView>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.quickActionsContainer}
      >
        <QuickActionButton 
          icon={<Feather name="plus" size={24} color="white" />} 
          label="Top Up" 
          gradientColors={['#8E2DE2', '#4A00E0']}
        />
        <QuickActionButton 
          icon={<Feather name="arrow-up" size={24} color="white" />} 
          label="Transfer" 
          gradientColors={['#FF6B6B', '#FF4E4E']}
        />
        <QuickActionButton 
          icon={<MaterialIcons name="payment" size={24} color="white" />} 
          label="Pay" 
          gradientColors={['#11998E', '#38EF7D']}
        />
        <QuickActionButton 
          icon={<FontAwesome5 name="history" size={24} color="white" />} 
          label="History" 
          gradientColors={['#FF8008', '#FFC837']}
        />
      </ScrollView>

      <BlurView intensity={70} style={styles.servicesContainer}>
        <Text style={styles.sectionTitle}>Services</Text>
        <View style={styles.serviceGrid}>
          {[
            { icon: <FontAwesome5 name="heart" size={24} color="white" />, label: "Favorites" },
            { icon: <MaterialIcons name="savings" size={24} color="white" />, label: "Loans" },
            { icon: <FontAwesome5 name="money-bill-wave" size={24} color="white" />, label: "E-Money" },
            { icon: <MaterialIcons name="credit-card" size={24} color="white" />, label: "Credit" },
            { icon: <Feather name="phone" size={24} color="white" />, label: "Pulsa" },
            { icon: <MaterialIcons name="power" size={24} color="white" />, label: "Electricity" },
            { icon: <Feather name="droplet" size={24} color="white" />, label: "Water" },
            { icon: <Feather name="wifi" size={24} color="white" />, label: "Internet" },
            { icon: <MaterialIcons name="health-and-safety" size={24} color="white" />, label: "Health" }
          ].map(({ icon, label }) => (
            <ServiceItem 
              key={label}
              icon={icon} 
              label={label} 
            />
          ))}
        </View>
      </BlurView>

      <View style={styles.promoContainer}>
        <Text style={styles.sectionTitle}>Promotions</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
        >
          {[1, 2].map((_, index) => (
            <BlurView 
              key={index} 
              intensity={60} 
              style={styles.promoImageContainer}
            >
              <Image 
                source={require('../../assets/images/promo.jpg')} 
                style={styles.promoImage} 
              />
            </BlurView>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const QuickActionButton = ({ 
  icon, 
  label, 
  gradientColors 
}: { 
  icon: ReactElement; 
  label: string; 
  gradientColors: [string, string, ...string[]] 
}) => (
  <TouchableOpacity style={styles.quickActionButton}>
    <LinearGradient
      colors={gradientColors}
      style={styles.quickActionGradient}
    >
      {icon}
    </LinearGradient>
    <Text style={styles.quickActionLabel}>{label}</Text>
  </TouchableOpacity>
);

const ServiceItem = ({ icon, label }: { icon: ReactElement; label: string }) => (
  <TouchableOpacity style={styles.serviceItem}>
    <LinearGradient
      colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)']}
      style={styles.serviceIconContainer}
    >
      {icon}
    </LinearGradient>
    <Text style={styles.serviceLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1F40',
  },
  gradientBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  glassHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  greeting: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
  },
  headerBalance: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  headerActions: {
    flexDirection: 'row',
  },
  headerIconButton: {
    marginLeft: 12,
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 12,
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF4E4E',
  },
  quickActionsContainer: {
    paddingHorizontal: 8,
    marginVertical: 16,
  },
  quickActionButton: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  quickActionGradient: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  quickActionLabel: {
    fontSize: 12,
    color: 'white',
  },
  servicesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginHorizontal: 16,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceItem: {
    width: '33.33%',
    alignItems: 'center',
    marginBottom: 16,
  },
  serviceIconContainer: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 8,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  serviceLabel: {
    fontSize: 12,
    color: 'white',
  },
  promoContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  promoImageContainer: {
    borderRadius: 16,
    marginRight: 12,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  promoImage: {
    width: 280,
    height: 160,
    borderRadius: 16,
    resizeMode: 'cover',
  },
});

export default ModernOVOAppUI;