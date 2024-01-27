import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";


export default function FirstComponent() {
    const navigation = useNavigation();
  return (
    <View>
      <Pressable style={styles.btn} title="gore" onPress={() => navigation.navigate("First")} >
        <Text style={styles.txt}>Click</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'blue',
    paddingHorizontal: 80,
    paddingVertical: 30
  },
  txt: {
    color: 'white',
  }
})