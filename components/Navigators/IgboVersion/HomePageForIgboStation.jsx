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
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";

export default function HomePageForIgboStation() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container} className="bg-light dark:bg-black">
      <IgboComponentForDisplayingAllStations />
      <View style={styles.flexCont}>
        <Text className="text-black dark:text-white" style={styles.title}>EKPERE MBIDO</Text>
        <Image style={styles.imgs} source={pic} />
        <Text className="text-black dark:text-white mt-3" style={styles.subTxt}>ACT OF CONTRITION:</Text>
        <Text className="text-black dark:text-white" style={styles.txt}>
          O Jesu, Onye-mgbaputa anyi kwesili ihunanya, lee anyi anya ndi ji
          ume-ala da n;ukwu Gi na-ario Gi, bu Chukwu, ebere maka onwe anyi, ya
          na maka ndi niile kwelenu gal’aga. Wedata onwe Gi ka I welu uru
          ezi-omume niile nke ahuhu Gi, nye anyi. Ka anyi ga eji chigharia uche
          anyi na ha. Maria di aso, ebe I bulu Nne anyi n’ukwu obe, onye bulu
          uzo kuzili anyi iso uzo Kalvari, duru anyi n’uzo ahuhu ahu. Welu
          echiche anyi na aririo anyi nye Ato n’ime otu di Ngozi. Amen.
        </Text>
        <IgboComponentForDisplayingAllStations />
      </View>
      <StatusBar translucent={true} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 10 : 0,
    // marginHorizontal: 7,
    paddingHorizontal: 8,
    zIndex: -100,
    marginBottom: 10,
  },
  flexCont: {
    marginBottom: 115,
  },
  txt: {
    fontSize: 18,
    lineHeight: 25,
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "600",
    marginTop: 23,
    marginBottom: 7,
    color: "red",
  },
  imgs: {
    justifyContent: "center",
    alignSelf: "center",
  },
  subTxt: {
    fontSize: 22,
  },
});
