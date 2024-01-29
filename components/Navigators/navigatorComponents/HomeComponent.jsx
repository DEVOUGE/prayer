import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";


export default function FirstComponent() {
    const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Homes")}
      >
        <Text style={styles.txt}>Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'blue',
    paddingHorizontal: 80,
  },
  txt: {
    color: 'white',
  }
})