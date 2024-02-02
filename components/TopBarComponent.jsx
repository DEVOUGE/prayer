import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import DropdownComponent from "./DropdownComponent";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TopBarComponent() {
  return (
    <View style={styles.topCont}>
      <Text style={styles.txt}>HomeScreen</Text>
      <DropdownComponent />
      <Ionicons size={28} name="ellipsis-vertical-outline" color={"white"} />
    </View>
  );
}

const styles = StyleSheet.create({
  topCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 6,
    backgroundColor: "black",
  },
  txt: {
    color: "white",
    alignSelf: 'center'
  }
});
