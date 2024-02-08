import { Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Settings({}) {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar />
      <View>
        <Ionicons
          name="arrow-back-outline"
          size={50}
          style={styles.iconBack}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.cardCont}>
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate("SelectLanguage")}
          >
            <Text>Language</Text>
            <Ionicons name="arrow-forward-outline" size={30} />
          </Pressable>
          <View style={styles.card}>
            <Text>Language</Text>
            <Ionicons name="arrow-forward-outline" size={30} />
          </View>
          <View style={styles.card}>
            <Text>Language</Text>
            <Ionicons name="arrow-forward-outline" size={30} />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 45 : 0,
  },
  iconBack: {
    marginBottom: 30,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 13,
  },
});
