import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import GeneralComponentContainer from "../navigatorComponents/GeneralComponentContainer";
export default function NavigationsComponent() {
  return (
    <View>
      <GeneralComponentContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrolls: {
    backgroundColor: "blue",
  },
});
