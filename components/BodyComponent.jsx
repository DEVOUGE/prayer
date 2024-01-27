import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import NavigationsConmponent from "./Navigators/NavigationsComponent";
import { useNavigation } from "@react-navigation/native";

export default function BodyComponent() {
  const navigation = useNavigation();
  return (
    <View>
      {/* <Text>BodyComponent</Text> */}
      <NavigationsConmponent />
      {/* <Button title="Sea" onPress={() => navigation.navigate("Deleted")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
