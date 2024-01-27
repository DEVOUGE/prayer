import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import DropdownComponent from "./DropdownComponent";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TopBarComponent() {
  return (
    <View style={styles.topCont}>
      <Text>HomeScreen</Text>
      <DropdownComponent />
      <Ionicons size={28} name="ellipsis-vertical-outline" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 45 : 0,
  },
  topCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 6,
    backgroundColor: "red",
  },
});
