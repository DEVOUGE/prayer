import { StyleSheet, View } from "react-native";
import React,{useState} from "react";
import TopBarComponent from "./Navigators/header/TopBarComponent";
import Home from "./Navigators/EnglishVersion/Home";
import HomePageForIgboStation from "./Navigators/IgboVersion/HomePageForIgboStation";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { getData } from "../lib/Storage";

export default function HomeScreen({ route }) {
  const { lang, colorScheme } = route.params;
  // const [lang, setLang] = useState("none");

  // getData("lang").then((language) => setLang(language));
  
  let component = null;
  switch (lang) {
    case "english":
      component = <Home lang={lang} colorScheme={colorScheme}/>;
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
