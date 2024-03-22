import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import pic from "../images/station05.jpg";
import StyledStationsComponent from "../../styledStationsComponent";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import globalStyles from "../../../styles/styles";
import FontSizeContext from "../../../lib/FontSizeContext";
import { verticalScale } from "react-native-size-matters";
import { RenderChevronNavigation } from "../../chevronPagination";
import { useFonts } from "expo-font";

export default function FifthStationIgbo() {
  const { newFontSize, fetchAddedFontSize } = useContext(FontSizeContext);
  const [fontsLoaded] = useFonts({
    "PTSans-Regular": require("../../../assets/fonts/PTSans-Regular.ttf"),
    SourceSerif: require("../../../assets/fonts/SourceSerif4-SemiBold.ttf"),
  });

  const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? 10 : 0,
      marginHorizontal: 12,
      marginBottom: 23,
    },
    flexContainer: {
      display: "flex",
      rowGap: 15,
    },
    heading: {
      fontSize: 25 + newFontSize,
      lineHeight: verticalScale(25 + newFontSize),
      fontWeight: "500",
      textAlign: "center",
      color: "red",
      marginTop: verticalScale(newFontSize),
      fontFamily: "SourceSerif",
    },
    txt: {
      fontSize: 17 + newFontSize,
      lineHeight: verticalScale(24 + newFontSize),
      marginBottom: 10,
      fontFamily: "PTSans-Regular",
    },
    leader: {
      fontWeight: "600",
      fontSize: 17 + newFontSize,
      lineHeight: verticalScale(24 + newFontSize),
      fontFamily: "PTSans-Regular",
    },
    all: {
      fontWeight: "normal",
      fontFamily: "PTSans-Regular",
    },
  });

  if (!fontsLoaded) {
    return <Text>Font Loading!</Text>;
  }
  

  return (
    <>
      <StyledStationsComponent>
        <View style={styles.container} onLayout={fetchAddedFontSize}>
          <IgboComponentForDisplayingAllStations />
          <View style={styles.flexContainer}>
            <Text className="text-black dark:text-white" style={styles.heading}>
              NKWUSI NKE ISE: Simion Enyere Jesu Aka Ibu Obe
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              <Text
                className="text-black dark:text-white"
                style={styles.boldTxt}
              >
                {" "}
                Onye-ndu:
              </Text>{" "}
              Anyi esekpuoro gi Jesu na-enye gi ekele
            </Text>
            <Text className="text-black dark:text-white" style={styles.boldTxt}>
              Gbuonu otu ikpere n’ala za:
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              <Text
                className="text-black dark:text-white"
                style={styles.boldTxt}
              >
                Oha:
              </Text>{" "}
              Maka na obe gi di aso ka I Ji we gbaputa uwa.
            </Text>
            <Image
              source={pic}
              style={globalStyles.image}
            />
            <Text
              className="text-black dark:text-white"
              style={styles.centerTxt}
            >
              kulitenu
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              MGBE ha nyerechara Jesu mkpari, bia yipu ya uwe-nru-ala ahu, yiwe
              ya uwe nke ya, duru ya puo gaa ikpogbu ya. Ma mgbe ha na-aga, ha
              huru Simion onye Sirin, manye ya ka o buru obe Jesu. (Matiu 27:3
              1-32)
            </Text>
            <Text
              className="text-black dark:text-white"
              style={[styles.boldTxt, styles.txt]}
            >
              Sekpurunu Ala
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Ana m agwa unu, otutu ga-esi n’owuwa-anyawu na odida - anyanwu bia
              nonyere Ebreham, Azik, na Jecop na alaeze, eligwe. Ma a ga-achupu
              umu alaeze na mbara -ezi kwuru itiri, ebe so ibe akwa na ita
              ikikere eze ga-adi" (Matiu 8:11 -12)
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Chineke m, mee ka m were obi anuri nara obe nile i ga ezitere m na
              ndu m. E kwela ka achupu m n’ala-eze gi.
            </Text>
            <Text className="text-black dark:text-white" style={[styles.txt]}>
              <Text
                className="text-black dark:text-white"
                style={styles.boldTxt}
              >
                Oha:{" "}
              </Text>
              Jesu m, ahuru m gi n’anya karichaa ihe nile; Ejim obi m nile
              chegharia na mmehie m mehiere E kwela ka m kewapu onwe m ozo n’ebe
              I no; Bia Jim mee ihe o bula m gi.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              <Text
                className="text-black dark:text-white"
                style={styles.boldTxt}
              >
                Kulitenu{" "}
              </Text>
              kwere ukwe a gaa na nkwusi nke isii.
            </Text>
            <View style={styles.songCont}>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                <Text
                  className="text-black dark:text-white"
                  style={styles.boldTxt}
                >
                  Ukwe:{" "}
                </Text>
                Ya buru na iga-abu nwa-azu m;
              </Text>
            </View>
          </View>
        </View>
      </StyledStationsComponent>
      <RenderChevronNavigation
        to={"SixthStationIgbo"}
        from={"FourthStationIgbo"}
      />
    </>
  );
}
