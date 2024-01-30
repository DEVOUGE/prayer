import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import pic from "../images/act_of_contrition.gif";
import GeneralComponentContainer from "../navigatorComponents/GeneralComponentContainer";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <GeneralComponentContainer />
      <View style={styles.flexCont}>
        <Text style={styles.title}>Opening Prayer</Text>
        <Image style={styles.imgs} source={pic} />
        <Text style={styles.subTxt}>ACT OF CONTRITION:</Text>
        <Text style={styles.txt}>
          O my God, my Redeemer, behold me here at Thy feet. From the bottom of
          my heart I am sorry for all my sins, because by them I have offended
          Thee, Who art infinitely good. I will die rather than offend thee
          again.
        </Text>
        <GeneralComponentContainer />
      </View>
      <StatusBar translucent={true} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 45 : 0,
    marginHorizontal: 7,
    paddingHorizontal: 8,
  },
  flexCont: {
    //   display: "flex",
    //   flexDirection: "row",
    //   columnGap: 12,
    marginBottom: 60,
  },
  txt: {
    // width: 200,
    fontSize: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 7,
    // fontFamily: 'Arial'
  },
  imgs: {
    justifyContent: "center",
    // alignSelf: 'center'
  },
  subTxt: {
    fontSize: 22,
    // textAlign: 'left'
  },
});
