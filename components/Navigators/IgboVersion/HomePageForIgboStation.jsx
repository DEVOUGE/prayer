import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Dimensions,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import pic from "../images/act_of_contrition.gif";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import FontSizeContext from "../../../lib/FontSizeContext";
import { ChevronPagination } from "../../chevronPagination";
import { verticalScale } from "react-native-size-matters";
import { useFonts } from "expo-font";

import { useColorScheme } from "nativewind";
import { getData } from "../../../lib/Storage";

export default function HomePageForIgboStation({ lang }) {
  const { newFontSize, fetchAddedFontSize } = useContext(FontSizeContext);
  const { colorScheme, setColorScheme } = useColorScheme();
  const statusBarStyle =
    colorScheme === "dark" ? "light-content" : "dark-content";
  const statusBarBackgroundColor = colorScheme === "dark" ? "black" : "white";
  const [fontsLoaded] = useFonts({
    "PTSans-Regular": require("../../../assets/fonts/PTSans-Regular.ttf"),
    "SourceSerif": require("../../../assets/fonts/SourceSerif4-SemiBold.ttf"),
  });

  useEffect(() => {
    fetchTheme();
  }, [lang]);

  async function fetchTheme() {
    await getData("theme").then((theme) => setColorScheme(theme));
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? 45 : 0,
      paddingHorizontal: 8,
      zIndex: -100,
      marginBottom: 52,
    },
    flexCont: {
      paddingBottom: 130,
    },
    txt: {
      fontSize: 18 + newFontSize,
      lineHeight: 25,
      lineHeight: verticalScale(newFontSize + 18),
      color: colorScheme === "dark" ? "#fff" : "#000",
      fontFamily: "PTSans-Regular",
    },
    all: {
      fontSize: 20,
      fontWeight: "500",
    },
    title: {
      fontSize: 28 + newFontSize,
      textAlign: "center",
      fontWeight: "600",
      marginBottom: 7,
      color: "indigo",
      fontFamily: "SourceSerif"
    },
    imgs: {
      justifyContent: "center",
      alignSelf: "center",
    },
    subTxt: {
      fontSize: 22 + newFontSize,
      lineHeight: verticalScale(newFontSize * 22),
    },
    bottomTxt: {
      lineHeight: verticalScale(18 + newFontSize),
      color: "#696969",
      fontSize: 15 + newFontSize,
      color: colorScheme === "dark" ? "silver" : "#000",
      marginTop: 5,
    },
    lastTxt: {
      marginBottom: 10,
      color: colorScheme === "dark" ? "silver" : "#000",
    },
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      className="bg-light dark:bg-black"
      contentContainerStyle={{ paddingBottom: verticalScale(15) }}
    >
      <IgboComponentForDisplayingAllStations />
      <View style={styles.flexCont} onLayout={fetchAddedFontSize}>
        <Text className="text-black dark:text-white" style={styles.title}>
          EKPERE MBIDO
        </Text>
        <Image style={styles.imgs} source={pic} />
        <Text className="text-black dark:text-white mt-3" style={styles.subTxt}>
          ACT OF CONTRITION:
        </Text>
        <Text className="text-black dark:text-white" style={styles.txt}>
          O Jesu, Onye-mgbaputa anyi kwesili ihunanya, lee anyi anya ndi ji
          ume-ala da n;ukwu Gi na-ario Gi, bu Chukwu, ebere maka onwe anyi, ya
          na maka ndi niile kwelenu gal’aga. Wedata onwe Gi ka I welu uru
          ezi-omume niile nke ahuhu Gi, nye anyi. Ka anyi ga eji chigharia uche
          anyi na ha. Maria di aso, ebe I bulu Nne anyi n’ukwu obe, onye bulu
          uzo kuzili anyi iso uzo Kalvari, duru anyi n’uzo ahuhu ahu. Welu
          echiche anyi na aririo anyi nye Ato n’ime otu di Ngozi. Amen.
        </Text>
        <View style={styles.flxTxt}>
          <View
            className="w-full bg-light dark:bg-black absolute bottom-0 left-0 right-0 items-center justify-center"
          >
            <ChevronPagination to={"FirstStationIgbo"} from={"none"} />
          </View>
        </View>
      </View>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={statusBarBackgroundColor}
      />
    </ScrollView>
  );
}
