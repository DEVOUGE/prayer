import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import pic from "../images/station07.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import StyledStationsComponent from "../../styledStationsComponent";
import globalStyles from "../../../styles/styles";
import FontSizeContext from "../../../lib/FontSizeContext";
import { verticalScale } from "react-native-size-matters";
import { RenderChevronNavigation } from "../../chevronPagination";

export default function SeventhStationIgbo() {
  const { newFontSize, fetchAddedFontSize } = useContext(FontSizeContext);

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
    },
    txt: {
      fontSize: 17 + newFontSize,
      lineHeight: verticalScale(24 + newFontSize),
      marginBottom: 10,
    },
    leader: {
      fontWeight: "600",
      fontSize: 17 + newFontSize,
      lineHeight: verticalScale(24 + newFontSize),
    },
    all: {
      fontWeight: "normal",
    },
  });

  return (
    <>
      <StyledStationsComponent>
        <View style={styles.container} onLayout={fetchAddedFontSize}>
          <IgboComponentForDisplayingAllStations />
          <View style={styles.flexContainer}>
            <Text className="text-black dark:text-white" style={styles.heading}>
              NKWUSI NKE ASAA: Jesu adaa nke ugboro Abua
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
            <Image
              source={pic}
              className="self-center w-full bg-blend-color-burn rounded-sm"
            />
            <Text
              className="text-black dark:text-white"
              style={styles.centerTxt}
            >
              kulitenu
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              NDI nkem, kedu ihe m mere unu? Olee nnoo ihe m ji megide unu? Zanu
              m; Eji m achicha ocha zua unu n’ikpa; mana unu akudala m n’ala
              piaruchaa m ahu. (Maika 6:3. Akwa ariri ma o bu improperii)
            </Text>
            <Text
              className="text-black dark:text-white"
              style={[styles.boldTxt, styles.txt]}
            >
              Sekpurunu Ala
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              E mesiri ya ike, mewapu ya obi, mana o tupughi onu Ka nwa aturu
              edurula gawa igbu egbu. O daa ogbu ka aturu a na akpuhasi aji. Eji
              aka-ike na ikpe mmegbu duru ya puo. (Azaya ima o bu Isiah 53: 7
              -8)
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Biko Dinwenu m, e kwela Ka m buru ohu njo o bula; Mee kam nwere
              Onwe m, were ike m nile, echiche m nile, na mmuo m nile bia gbaara
              gi odibo n’uzo kwesiri ekwesi.
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
              kwere ukwe a gaa na nkwusi nke Asato.
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
                Onwere ihunanya ka nke a;
              </Text>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                Na mmadu werela ndu ya;
              </Text>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                Nye maka ndi enyi ya? (Jon 18:13)
              </Text>
            </View>
          </View>
        </View>
      </StyledStationsComponent>
      <RenderChevronNavigation
        to={"EighthStationIgbo"}
        from={"SixthStationIgbo"}
      />
    </>
  );
}
