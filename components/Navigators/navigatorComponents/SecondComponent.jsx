import { StyleSheet, Text, View, Pressable } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";

export default function SecondComponent() {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.btn}
        title="gore"
        onPress={() => navigation.navigate("SecondStation")}
      >
        <Text style={styles.txt}>2nd</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "black",
    paddingHorizontal: 89,
    marginHorizontal: 5,
  },
  txt: {
    color: "white",
  },
});