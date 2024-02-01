import { StyleSheet, View, Platform, Text, Pressable } from "react-native";
import React from "react";
import TopBarComponent from "./TopBarComponent";
import BodyComponent from "./BodyComponent";
import { removeData } from "../lib/Storage";
export default function HomeScreen({navigation, route}) {
  const {lang, setLang} = route.params;
  let component = null;
  switch (lang) {
    case 'english':
      component = <BodyComponent />;
      break;
  case 'igbo':
    // component = <Igbo />
    break;
    default:
      component = <EnglishComponent />;
      break;
  }
  return (
    <View style={styles.container}>
      <TopBarComponent />
      <Pressable onPress={()=>{removeData('lang'); setLang('none')}}>
        <Text>reset</Text>
      </Pressable>
     {component}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 45 : 0,
    paddingHorizontal: 12,
    },
    topCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 6,
        backgroundColor: 'red'
  }
});
