import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={[styles.tabText, styles.activeTab]}>Notifikasi</Text>
        <Text style={styles.tabText}>Pesan</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <MaterialCommunityIcons name="bell-outline" size={64} color="#E0E0E0" />
        <Text style={styles.noNotificationsText}>
          Tidak ada notifikasi untuk Anda saat ini
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  tabText: {
    fontSize: 16,
    color: "#888",
    paddingBottom: 5,
  },
  activeTab: {
    color: "#6A1B9A",
    borderBottomWidth: 2,
    borderBottomColor: "#6A1B9A",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noNotificationsText: {
    fontSize: 14,
    color: "#888",
    marginTop: 10,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#888",
    marginTop: 5,
  },
  payButton: {
    backgroundColor: "#6A1B9A",
    borderRadius: 35,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -40,
  },
  payText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
