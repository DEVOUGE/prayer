import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import pic from "../images/station02.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import StyledStationsComponent from "../../styledStationsComponent";
import FontSizeContext from "../../../lib/FontSizeContext";
import { verticalScale } from "react-native-size-matters";
import { RenderChevronNavigation } from "../../chevronPagination";
import globalStyles from "../../../styles/styles"
import { useFonts } from "expo-font";

export default function SecondStationIgbo() {
  const { newFontSize, fetchAddedFontSize } = useContext(FontSizeContext);
  const [fontsLoaded] = useFonts({
    "PTSans-Regular" : require("../../../assets/fonts/PTSans-Regular.ttf"),
    "SourceSerif": require("../../../assets/fonts/SourceSerif4-SemiBold.ttf")
  })

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
      fontWeight: "600",
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
    tt: {
      color: 'purple'
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
    return <Text>Text Loading!</Text>
  }

  return (
    <>
      <StyledStationsComponent>
        <View style={styles.container} onLayout={fetchAddedFontSize}>
          <IgboComponentForDisplayingAllStations />
          <View style={styles.flexContainer}>
            <Text className="text-black dark:text-white" style={styles.heading}>
              NKWUSI NKE ABUO: Jesu Eburu Obe Ya
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
            <Text className="text-black dark:text-white" style={styles.tt}>
              Gbuonu otu ikpere n’ala za:
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              <Text style={styles.boldTxt}>Oha:</Text> Maka na obe gi di aso ka
              I Ji we gbaputa uwa.
            </Text>
            <Image source={pic} style={globalStyles.image} />
            <Text
              className="text-black dark:text-white"
              style={styles.tt}
            >
              kulitenu
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              KAIFAS eziga Jesu na nke Pailet, onye lechara ya Kwuputa si: “O
              nweghi ihe ojoo o bula m huru nwoke a mere" Pailet ezigara ya
              Herod. Herod ajuchaa ya ajuju zighachiere ya Pailet. Pailet na
              Herod eji ya meziri esemokwu di n’ agbata ha abuo. Pailet abia ma
              Jesu ikpe onwu. (Luk 23:1.4.1-12)
            </Text>
            <Text
              className="text-black dark:text-white"
              style={[styles.tt, styles.txt]}
            >
              Sekpurunu Ala
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Gini kpatara umu-mba ji aro iro? Kedu ihe ha ji aro iro na-enweghi
              isi? Ndi eze uwa adukotala ukwu gbaa izu ha ji emegide Dinwenu
              Onye-O-Tere Ude. Obinigwe no na-achi ha ochi. Oseburuwa achi
              gbuola ha n’ochi.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Onye nweanyi, mee Ka anyi Kwuru n’uzo ezi okwu gi mgbe nile, ghara
              iji egwu ndi mmadu emehie gi. Mee ka ndi na-achi obodo tinyere
              Nzuko gi aka n’oru igbasa ikpe nkwumoto gi.
            </Text>
            <Text className="text-black dark:text-white" style={[styles.txt]}>
              <Text style={styles.boldTxt}>Oha: </Text>
              Jesu m, ahuru m gi n’anya karichaa ihe-nile; Ejim obi m nile
              chegharia na mmehie m mehiere gi. E kwela ka m Kewapu onwe m ozo
              n’ ebe ino Mee kam hu gi n’anya mgbe o bula; Bia jim mee ihe o
              bula masiri gi.
            </Text>
            <Text className="text-black dark:text-white" style={[styles.txt, styles.tt]}>
              <Text style={styles.boldTxt}>Kulitenu </Text>
              kwere ukwe a gaa na nkwusi nke ato.
            </Text>
            <View style={styles.songCont}>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                <Text style={styles.boldTxt}>Ukwe: </Text>
                Anya-mmiri aburula nrim
              </Text>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                Ma n’ehihie ma n‘abali;
              </Text>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                Mmadu si; "Olee Chukwu gi (Abuoma2:3)
              </Text>
            </View>
          </View>
        </View>
      </StyledStationsComponent>
      <RenderChevronNavigation
        to={"ThirdStationIgbo"}
        from={"FirstStationIgbo"}
      />
    </>
  );
}