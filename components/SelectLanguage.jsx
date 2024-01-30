import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { storeData, getData } from "../lib/Storage";

export default function SelectLanguage() {
  const lang = getData("lang") || "none";
  const [language, setLanguage] = useState(lang);
  return (
    <View>
      <Text>SelectLanguage</Text>
      <Pressable
        onPress={() => {
          setLanguage("english");
          storeData("lang", "english");
        }}
      >
        <Text>English</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          setLanguage("igbo");
          storeData("lang", "igbo");
        }}
      >
        <Text>Igbo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
