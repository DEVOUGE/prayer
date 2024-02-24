import { StyleSheet, Text, View, Platform, Image } from "react-native";
import React from "react";
import DropdownComponent from "./DropdownComponent";
import Ellipsis from "./Ellipsis";

export default function TopBarComponent() {
  const setting = ["Settings"];
  return (
    <View style={styles.topCont}>
      <View style={{ width: 62, height: 35 }}>
        {/* <Image source={require("../assets/pray.png")} height={15} /> */}
      </View>
      <DropdownComponent />
      <Ellipsis setting={setting} />
    </View>
  );
}

const styles = StyleSheet.create({
  topCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    alignItems: "center",
    zIndex: 1000,
  },
  txt: {
    color: "white",
    alignSelf: "center",
  },
  top: {},
});
