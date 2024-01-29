import { StyleSheet, Text, View, Pressable } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";

export default function FifthComponent() {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.btn}
        title="gore"
        onPress={() => navigation.navigate("FifthStation")}
      >
        <Text style={styles.txt}>5th</Text>
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