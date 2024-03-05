import { StyleSheet, View } from "react-native";
import React from "react";
import TopBarComponent from "./Navigators/header/TopBarComponent";
import Home from "./Navigators/EnglishVersion/Home";
import HomePageForIgboStation from "./Navigators/IgboVersion/HomePageForIgboStation";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen({ route }) {
  const { lang } = route.params;
  let component = null;
  switch (lang) {
    case "english":
      component = <Home />;
      break;
    case "igbo":
      component = <HomePageForIgboStation />;
      break;
  }
  return (
    <View>
      <StatusBar backgroundColor="white" />
      <SafeAreaView>
        <TopBarComponent shouldDisplayDropdownComponent={"yes"} />
        {component}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  topCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 6,
    backgroundColor: "red",
  },
});
