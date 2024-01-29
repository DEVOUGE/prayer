import { StyleSheet, Text, View, Pressable } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";

export default function ThirdComponent() {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.btn}
        title="gore"
        onPress={() => navigation.navigate("ThirdStation")}
      >
        <Text style={styles.txt}>3rd</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "red",
    paddingHorizontal: 80,
    marginHorizontal: 5,
  },
  txt: {
    color: "white",
  },
});