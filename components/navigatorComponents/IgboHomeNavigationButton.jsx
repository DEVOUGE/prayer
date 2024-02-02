import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function IgboHomeNavigationButton() {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("HomePageForIgboStation")}
      >
        <Text style={styles.txt}>mbido</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "black",
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    color: "white",
  },
});
