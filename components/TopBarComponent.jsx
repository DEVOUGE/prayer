import { StyleSheet, Text, View, Platform, Image } from "react-native";
import React from "react";
import DropdownComponent from "./DropdownComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import Ellipsis from "./Navigators/header/Ellipsis";

export default function TopBarComponent({top}) {
  const fruitItem = ["Settings", "TextSize",];
  return (
    <View style={styles.topCont}>
      <View style={{ width: 62, height: 35, }}>
      {/* <Image source={require("../assets/logo.jpeg")} height={35} /> */}
      </View>
      <DropdownComponent />
      <Ellipsis fruitItem={fruitItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  topCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // marginHorizontal: 6,
    backgroundColor: "black",
    zIndex: 1000
  },
  txt: {
    color: "white",
    alignSelf: 'center'
  },
  top:{}
});
