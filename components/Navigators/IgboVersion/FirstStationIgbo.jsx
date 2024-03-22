import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import pic from "../images/station01.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import StyledStationsComponent from "../../styledStationsComponent";
import { verticalScale } from "react-native-size-matters";
import FontSizeContext from "../../../lib/FontSizeContext";
import { ChevronPagination } from "../../chevronPagination";
import globalStyles from "../../../styles/styles"
import { useFonts } from "expo-font";

export default function FirstStationIgbo() {
  const { newFontSize, fetchAddedFontSize } = useContext(FontSizeContext);
  const [fontsLoaded] = useFonts({
    "PTSans-Regular": require("../../../assets/fonts/PTSans-Regular.ttf"),
    "SourceSerif": require("../../../assets/fonts/SourceSerif4-SemiBold.ttf"),
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
  return <Text>Text Loading!</Text>
}
  return (
    <>
      <StyledStationsComponent>
        <View style={styles.container} onLayout={fetchAddedFontSize}>
          <IgboComponentForDisplayingAllStations />
          <View style={styles.flexContainer}>
            <Text className="text-black dark:text-white" style={styles.heading}>
              NKWUSI NKE MBU: A MAA JESU IKPE ONWU
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
              KAIFAS asi Jesu: "Ejim aha Chukwu di ndu asi gi nuora anyi iyi ma
              i bu Kristi, Nwa nke Chukwu. "Jesu azaa ya: "Ikwuola ya. Mana ana
              m agwa gi na e mechaa, iga-ahu Nwa nke Madu ka O no n’aka -nri nke
              Ike, si n’urukpu nke igwe na-abia, " Kaifas adowaa uwe nru-ala ya
              tie mkpu si: "OKwuola aru! Ndi mmadu ekwughachi si: "Kpogbuo ya
              Kpoghuo ya" Ha bido buwa ya asu n’‘ihu; kuwa ya ihe.
            </Text>
            <Text
              className="text-black dark:text-white"
              style={[styles.boldTxt, styles.txt]}
            >
              Sekpurunu Ala
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Ndi iro m na-emeghi ihe ojoo obula siri oke ike. Ndi Kporo m asi
              na nkiti akariala; ndi iro m ji ihe ojoo akwu m ugwo ihe oma, maka
              na ana m eso uzo ezi omume. (Abuoma 38: 19-20)
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Onyenwe m, nye m ndidi ka m ghara ikwuhie onu mqbe ihe na-esiri m
              ike. E kwela ka ikwu na ibe ko m. Nye m obi siri ike, nke m ga-eji
              emeri onwunwa nile ga-abiakwute m na ndum.
            </Text>
            <Text className="text-black dark:text-white" style={[styles.txt]}>
              <Text
                className="text-black dark:text-white"
                style={styles.boldTxt}
              >
                Oha:{" "}
              </Text>
              Jesu m, ahuru m gi n’anya Karichaa ihe nile Ejim obim nile
              chegharia na mehie m mehiere Gi E kwela ka m Kewapu onwe m ozo
              n’ebe ino Mee ka m hu gi n’anya mgbe o bula; Bia jim mee ihe o
              bula masiri gi.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              A choo na nkwusi o bula e nwere ike Ikpe: Nna anyi no
              n’ligwe........ Ekele Maria...... Otito diri Nna... Jesu a kpodoro
              n’obe maka nihi anyi Meere anyi ebere; ka mkpuru obi ndi nile
              Kwerenu gara aga....... Ma a choghi, e nwere ike ihapu ekpere
              ndia.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              <Text
                className="text-black dark:text-white"
                style={styles.boldTxt}
              >
                Kulitenu{" "}
              </Text>
              kwere ukwe a gaa na nkwusi nke abua.
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
                Nsogbu norom n’ebe nile:
              </Text>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                Anuru m ndi na-agba izu:‘
              </Text>
            </View>
          </View>
        </View>
      </StyledStationsComponent>
      <View
        className="w-full bg-light dark:bg-black absolute bottom-0 left-0 right-0 items-center justify-center py-8"
      >
        <ChevronPagination to={"SecondStationIgbo"} from={"none"} />
        </View>
    </>
  );
}
