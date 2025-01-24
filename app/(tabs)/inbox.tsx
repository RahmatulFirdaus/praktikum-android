import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function NotificationsScreen() {
  const [activeTab, setActiveTab] = useState("Notifications");

  const notifications = [
    { id: 1, title: "Transaksi Berhasil", message: "Pembayaran OVO Anda telah diproses", time: "5 menit yang lalu" },
    { id: 2, title: "Promo Spesial", message: "Dapatkan diskon 50% minggu ini!", time: "2 jam yang lalu" },
  ];

  const messages = [
    { id: 1, sender: "OVO Support", message: "Ada yang bisa kami bantu?", time: "1 jam yang lalu" },
  ];

  return (
    <LinearGradient
      colors={['#1A2980', '#26D0CE']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[
            styles.tabButton, 
            activeTab === "Notifications" && styles.activeTabButton
          ]}
          onPress={() => setActiveTab("Notifications")}
        >
          <Text style={[
            styles.tabText, 
            activeTab === "Notifications" && styles.activeTabText
          ]}>
            Notifikasi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.tabButton, 
            activeTab === "Messages" && styles.activeTabButton
          ]}
          onPress={() => setActiveTab("Messages")}
        >
          <Text style={[
            styles.tabText, 
            activeTab === "Messages" && styles.activeTabText
          ]}>
            Pesan
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.contentContainer}
        contentContainerStyle={styles.content}
      >
        {activeTab === "Notifications" && (
          notifications.length === 0 ? (
            <View style={styles.emptyState}>
              <MaterialCommunityIcons 
                name="bell-outline" 
                size={64} 
                color="rgba(255,255,255,0.3)" 
              />
              <Text style={styles.noContentText}>
                Tidak ada notifikasi untuk Anda saat ini
              </Text>
            </View>
          ) : (
            notifications.map((notification) => (
              <TouchableOpacity 
                key={notification.id} 
                style={styles.notificationCard}
              >
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationTitle}>
                    {notification.title}
                  </Text>
                  <Text style={styles.notificationMessage}>
                    {notification.message}
                  </Text>
                  <Text style={styles.notificationTime}>
                    {notification.time}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          )
        )}

        {activeTab === "Messages" && (
          messages.length === 0 ? (
            <View style={styles.emptyState}>
              <MaterialCommunityIcons 
                name="message-outline" 
                size={64} 
                color="rgba(255,255,255,0.3)" 
              />
              <Text style={styles.noContentText}>
                Tidak ada pesan untuk Anda saat ini
              </Text>
            </View>
          ) : (
            messages.map((message) => (
              <TouchableOpacity 
                key={message.id} 
                style={styles.messageCard}
              >
                <View style={styles.messageContent}>
                  <Text style={styles.messageSender}>
                    {message.sender}
                  </Text>
                  <Text style={styles.messageText}>
                    {message.message}
                  </Text>
                  <Text style={styles.messageTime}>
                    {message.time}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          )
        )}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 5,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 8,
  },
  activeTabButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  tabText: {
    fontSize: 16,
    color: "rgba(255,255,255,0.6)",
  },
  activeTabText: {
    color: "white",
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    marginTop: 10,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  noContentText: {
    color: "rgba(255,255,255,0.6)",
    marginTop: 15,
    fontSize: 16,
    textAlign: "center",
  },
  notificationCard: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 15,
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  notificationMessage: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 14,
    marginBottom: 5,
  },
  notificationTime: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 12,
    alignSelf: "flex-end",
  },
  messageCard: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 15,
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  messageContent: {
    flex: 1,
  },
  messageSender: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  messageText: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 14,
    marginBottom: 5,
  },
  messageTime: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 12,
    alignSelf: "flex-end",
  },
});