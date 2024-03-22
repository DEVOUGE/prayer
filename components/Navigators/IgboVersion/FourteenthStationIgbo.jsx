import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, {useContext} from "react";
import pic from "../images/station14.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import StyledStationsComponent from "../../styledStationsComponent";
import globalStyles from "../../../styles/styles";
import FontSizeContext from "../../../lib/FontSizeContext";
import { verticalScale } from "react-native-size-matters";
import { RenderChevronNavigation } from "../../chevronPagination";
import { useFonts } from "expo-font";

export default function FourteenthStationIgbo() {
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
              NKWUSI NKE IRI-NA-ANO: A donye Jesu n’ili
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
            <Text style={styles.txt}>
              Nke a abia mezuo amuma e buru si: "E mekotara ili ya na nke ndi
              njo; ya na ogalanya nokwa n’onwu ya." "Ya adonye ahu ahu n’ili o
              mezirila onwe ya." (Azaya 53:9: 1 Ndi Eze 13: 30)
            </Text>
            <Text
              className="text-black dark:text-white"
              style={[styles.boldTxt, styles.txt]}
            >
              Sekpurunu Ala
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Otu e si mee otutu mmadu ndi njo site n’ehuweghi isi nke otu onye
              ka e sikwa mee otutu mmadu ndi ezi-omume site n’ihuwe isi nke otu
              onye. E mere anyi mmiri-Chukwu n’onwu Kristi, ka anyi wee soro ya
              na-aga ije na ndu ohuru (Ndi Rom 5:19:6:3-4)
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Chineke m, mee ka ndi no n’ochichi nwee obi-mmadu were obi Chineke
              na-achi, Mee ka ndi ogalanya anyi were anya ana -asoro ha n’obodo
              na-aruputa oru nke nzoputa.
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
              <Text
                className="text-black dark:text-white"
                style={styles.boldTxt}
              >
                Kulitenu{" "}
              </Text>
              kwere ukwe a gaa n’ iru altar
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
                igaghi ahapu m n’ala-mmuo;
              </Text>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                I gaghi ekwe kam ree ure;
              </Text>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                Anuri ejula m obi (Abu oma 16:10-11)
              </Text>
            </View>
          </View>
        </View>
      </StyledStationsComponent>
      <RenderChevronNavigation
        to={"AririoNihuAltar"}
        from={"ThirteenthStationIgbo"}
      />
    </>
  );
}
