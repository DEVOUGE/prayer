import { StyleSheet, View, Platform, Button } from "react-native";
import React from "react";
import TopBarComponent from "./TopBarComponent";
import BodyComponent from "./BodyComponent";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TopBarComponent />
      <BodyComponent />
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
