import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Animated,
  Dimensions,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import pic from "../images/act_of_contrition.gif";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";

import { colorScheme, useColorScheme, styled } from "nativewind";
import { getData, removeData, storeData } from "../../../lib/Storage";

import BottomNavigation from "../../navigatorComponents/BottomNavigation.jsx";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import FontSizeContext from "../../../lib/FontSizeContext.js";
import { ChevronPagination } from "../../chevronPagination.js";

export default function Home({ lang }) {
  const [activeTheme, setActiveTheme] = useState("none");
  const { newFontSize, fetchAddedFontSize } = useContext(FontSizeContext);
  const screenHeight = Dimensions.get("window").height;
  const { colorScheme, setColorScheme } = useColorScheme();
  const statusBarStyle =
    colorScheme === "dark" ? "light-content" : "dark-content";
  const statusBarBackgroundColor = colorScheme === "dark" ? "black" : "white";

  useEffect(() => {
    fetchTheme();
  }, [lang]);

  async function fetchTheme() {
    await getData("theme").then((theme) => setColorScheme(theme));
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? 45 : 0,
      // marginHorizontal: 7,
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
      // fontStyle: "italic",
      lineHeight: verticalScale(newFontSize + 18),
      color: colorScheme === "dark" ? "#fff" : "#000",
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

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      className="bg-light dark:bg-black"
      contentContainerStyle={{ paddingBottom: verticalScale(15) }}
    >
      <GeneralComponentContainer />
      <View style={styles.flexCont}>
        <Text style={styles.title}>Opening Prayer</Text>
        <Image style={styles.imgs} source={pic} />
        <Text style={styles.all}>ALL:</Text>
        <Text style={styles.txt}>My Lord, Jesus Christ, </Text>
        <Text style={styles.txt}>
          You have made this journey to die for me with unspeakable love;{" "}
        </Text>
        <Text style={styles.txt}>
          and I have so many times ungratefully abandoned You. | But now I love
          You with all my heart;
        </Text>
        <Text style={styles.txt}>
          and, because I love You, I am sincerely sorry for ever having offended
          You.
        </Text>
        <Text style={styles.txt}>
          Pardon me, my God, and permit me to accompany You on this journey.
        </Text>
        <Text style={styles.txt}>You go to die for love of me; </Text>
        <Text style={styles.txt}>
          I want, my beloved Redeemer, to die for love of You.{" "}
        </Text>
        <Text style={styles.txt}>
          My Jesus, I will live and die always united to You.
        </Text>
        <View style={styles.flexTxt}>
          <Text style={styles.bottomTxt}>
            At the cross her station keeping{" "}
          </Text>
          <Text style={styles.bottomTxt}>
            Stood the mournful Mother weeping{" "}
          </Text>
          <Text style={[styles.bottomTxt, styles.lastTxt]}>
            Close to Jesus to the last
          </Text>
          <View
            className="w-full bg-light dark:bg-black absolute bottom-0 left-0 right-0 items-center justify-center"
            style={{
              // height: 80, // Set the height of the fixed view
            }}
          >
            <ChevronPagination to={"FirstStationEnglish"} from={"none"} />
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
