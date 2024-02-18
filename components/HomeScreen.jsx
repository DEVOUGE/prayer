import { StyleSheet, View, Platform, Text, Pressable } from "react-native";
import React from "react";
import TopBarComponent from "./Navigators/header/TopBarComponent";
import Home from "./Navigators/EnglishVersion/Home";
import HomePageForIgboStation from "./Navigators/IgboVersion/HomePageForIgboStation";
import ConditionalRenderingComponent from "./Navigators/header/ConditionalRenderingComponent";
import { removeData } from "../lib/Storage";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen({ navigation, route }) {
  const { lang, setLang } = route.params;
  let   component = null;
  switch (lang) {
    case "english":
      component = <Home />;
      break;
    case "igbo":
      component = <HomePageForIgboStation  />;
      break;
    default:
      // component = <HomePageForIgboStation />;
      component = <ConditionalRenderingComponent />;
      break;
  }
  return (
    <View>
      <StatusBar backgroundColor="white" />
      <SafeAreaView>
        <TopBarComponent />
        <Pressable
          onPress={() => {
            removeData("lang");
            setLang("none");
          }}
        >
          <Text>reset</Text>
        </Pressable>
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
