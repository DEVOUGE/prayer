import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, {useContext} from "react";
import pic from "../images/station10.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import StyledStationsComponent from "../../styledStationsComponent";
import globalStyles from "../../../styles/styles";
import FontSizeContext from "../../../lib/FontSizeContext";
import { verticalScale } from "react-native-size-matters";
import { RenderChevronNavigation } from "../../chevronPagination";
import { useFonts } from "expo-font";

export default function TenthStationIgbo() {
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
              NKWUSI NKE IRI: A gbawa Jesu Oto
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
            <Image source={pic} style={globalStyles.image} />
            <Text
              className="text-black dark:text-white"
              style={styles.centerTxt}
            >
              kulitenu
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              NDI agha kpogburu ya biara kee uwe ya uzo ano, nke o bula Eburu
              otu uzo. Ma ha lechara uwe-nru-ala ya na-enweghi njiko o bula si:
              onye adowakwala nke a, kama ka anyi feere ya nza, onye o
              manyerela, ya werechaa". O mezuoala ihe e dere n’akwukwo nso si:
              "Ha ekeriela onwe ha uwe m, bia fee nza maka uwe-nru-ala m.”
            </Text>
            <Text
              className="text-black dark:text-white"
              style={[styles.boldTxt, styles.txt]}
            >
              Sekpurunu Ala
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Agbara m oto puta n’ afo nne m. Aga m agba oto ala mmuo. Chineke
              wetara, Chineke ewerekwala. Ngozli diri aha Chineke. (Job 1:21)
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Chineke ji ike nile, nye m amara gi n’uju ka m were Kwudosie ike
              ruo na ngwucha. Ekwela ka obi daa m mba mgbe ihe na-esiri m ike.
            </Text>
            <Text className="text-black dark:text-white" style={[styles.txt]}>
              <Text
                className="text-black dark:text-white"
                style={styles.boldTxt}
              >
                Oha:{" "}
              </Text>
              Jesus m, ahuru m gi n’anya karichaa ihe nile; Eji m obi m nile
              chegharia na mmehie m mehiere gi E kwela ka m kewapu onwe m ozo
              n’ebe I no; Mee ka m hu gi n’anya mgbe o bula; Bia ji m mee ihe o
              bula masiri gi.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              <Text style={styles.boldTxt}>Kulitenu </Text>
              kwere ukwe a gaa na nkwusi nke Iri-na-otu.
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
                Enweghi m onye ntasi obi:
              </Text>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                Mmanya gbara uka ha nyere m;
              </Text>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                Mabe ihe-onunu na-agu m. (Abu oma 68:20-21)
              </Text>
            </View>
          </View>
        </View>
      </StyledStationsComponent>
      <RenderChevronNavigation
        to={"EleventhStationIgbo"}
        from={"NinthStationIgbo"}
      />
    </>
  );
}
