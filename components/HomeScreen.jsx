import { StyleSheet, View, Platform, Button } from "react-native";
import React from "react";
import TopBarComponent from "./TopBarComponent";
import BodyComponent from "./BodyComponent";

export default function HomeScreen({navigation, route}) {
  const {lang} = route.params;
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
     {component}
      {/* <Button title='gore' onPress={()=> navigation.navigate('Deleted')} /> */}
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
