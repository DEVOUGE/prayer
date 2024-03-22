import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import pic from "../images/station03.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import StyledStationsComponent from "../../styledStationsComponent";
import FontSizeContext from "../../../lib/FontSizeContext";
import { verticalScale } from "react-native-size-matters";
import { RenderChevronNavigation } from "../../chevronPagination";
import globalStyles from "../../../styles/styles";
import { useFonts } from "expo-font";

export default function ThirdStationIgbo() {
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
              NKWUSI NKE ATO: Jesu Adaa nke Mbu
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              <Text style={styles.boldTxt}> Onye-ndu:</Text> Anyi esekpuoro gi
              Jesu na-enye gi ekele
            </Text>
            <Text className="text-black dark:text-white" style={styles.boldTxt}>
              Gbuonu otu ikpere n’ala za:
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              <Text style={styles.boldTxt}>Oha:</Text> Maka na obe gi di aso ka
              I Ji we gbaputa uwa.
            </Text>
            <Image source={pic} style={globalStyles.image} />
            <Text
              className="text-black dark:text-white"
              style={styles.centerTxt}
            >
              kulitenu
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              NDI nkem, kedu ihe m mere unu? Kedu kwanu ihe mji megide unu? Zanu
              m! Eduru m unu ogu afo abuo dufee n’ ozara. Eji m achicha nke
              eligwe zuo unu; dubata unu n’‘ala’ nke juputara na mmiri ara na
              mmanu-anu. Ma unu ejila obe kwuo Onyenzoputa unu ugwo. (Maika 6:5,
              Akwa ariri)
            </Text>
            <Text
              className="text-black dark:text-white"
              style={[styles.boldTxt, styles.txt]}
            >
              Sekpurunu Ala
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Mao bu oru anyi ka o bu; burukwa ahuhu anyi kao na-edi. Ma anyi
              chere na o bu nwa-onye uwa ojoo, nwa-onye Chukwu megburu emegbu.
              (Azaya m obu Isaiah 535)
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Chineke m, nye m amara gi n’uju ka m were obi ocha na obi anuri
              buru obe m ubochl nile wee na-eso gi.
            </Text>
            <Text className="text-black dark:text-white" style={[styles.txt]}>
              <Text style={styles.boldTxt}>Oha: </Text>
              Jesu m, ahuru m gi n’anya karichaa ihe nile; Ejim obi m nile
              chegharia na mmehie m mehiere gi. Ekwela kam kewapu onwe m ozo
              n’ebe ino Mee ka m hu gi n’anya mgbe o bula; Bia jim mee ihe o
              bula masiri gi.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              <Text
                className="text-black dark:text-white"
                style={styles.boldTxt}
              >
                Kulitenu{" "}
              </Text>
              kwere ukwe a gaa na nkwusi nke Ano.
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
                Unu ndi nke no n’ahuhu;
              </Text>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                Unu nile nke ibu na-anyi;
              </Text>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                Bia ka unu nwetaike (Matiu 11:28)
              </Text>
            </View>
          </View>
          <StatusBar translucent={true} />
          <IgboComponentForDisplayingAllStations />
        </View>
      </StyledStationsComponent>
      <RenderChevronNavigation
        to={"FourthStationIgbo"}
        from={"SecondStationIgbo"}
      />
    </>
  );
}
