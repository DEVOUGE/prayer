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
// import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
// import { NavigationContainer } from "@react-navigation/native";

export default function HomePageForIgboStation() {
  return (
    <ScrollView style={styles.container}>
      <IgboComponentForDisplayingAllStations />
      <View style={styles.flexCont}>
        <Text style={styles.title}>EKPERE MBIDO</Text>
        <Image style={styles.imgs} source={pic} />
        <Text style={styles.subTxt}>ACT OF CONTRITION:</Text>
        <Text style={styles.txt}>
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
    paddingTop: Platform.OS === "android" ? 45 : 0,
    marginHorizontal: 7,
    paddingHorizontal: 8,
    zIndex: -100,
  },
  flexCont: {
    marginBottom: 60,
  },
  txt: {
    fontSize: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 7,
  },
  imgs: {
    justifyContent: "center",
    alignSelf: "center",
  },
  subTxt: {
    fontSize: 22,
  },
});
