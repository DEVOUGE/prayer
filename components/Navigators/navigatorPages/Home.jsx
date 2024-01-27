import { Image, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import pic from "../images/act_of_contrition.gif";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.flexCont}>
        <Image source={pic} />
        <View style={styles.txt}>
          <Text style={styles.title}>Opening Prayer</Text>
          <Text style={styles.subTxt}>ACT OF CONTRITION</Text>
          <Text>
            O my God, my Redeemer, behold me here at Thy feet. From the bottom
            of my heart I am sorry for all my sins, because by them I have
            offended Thee, Who art infinitely good. I will die rather than
            offend thee again.
          </Text>
        </View>
      </View>
      {/* <Text>Home</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 45 : 0,
    paddingHorizontal: 6,
    paddingEnd: 5,
  },
  flexCont: {
    display: "flex",
    flexDirection: "row",
    columnGap: 12,
  },
  txt: {
    width: 200,
    },
    title: {
      fontSize: 28
    },
    subTxt: {
        fontSize:
    }
});
