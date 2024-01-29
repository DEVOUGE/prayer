import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

export default function FirstStationsComponent() {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("FirstStation")}
      >
        <Text style={styles.txt}>1st </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "orange",
    paddingHorizontal: 89,
    marginHorizontal: 5,
    marginHorizontal: 5,
  },
  txt: {
    color: "white",
  },
});