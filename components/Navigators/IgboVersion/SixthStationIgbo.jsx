import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import pic from "../images/station06.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import StyledStationsComponent from "../../styledStationsComponent";
import globalStyles from "../../../styles/styles";
import FontSizeContext from "../../../lib/FontSizeContext";
import { verticalScale } from "react-native-size-matters";
import { RenderChevronNavigation } from "../../chevronPagination";

export default function SixthStationIgbo() {
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
              NKWUSI NKE ISII: Veronika Ehichaa Jesu Ihu
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
              MGBE Nwa nke Mmadu ga-abia n’ebube ya n’ogbara ndi muo-oma nile, o
              ga-agwa ndi ezi-omume;“Mgbe aguu na-agu m, unu nyere m nri rie;
              Mmiri na-agu m, unu nyere m mmiri nuo, mgbe m bu onye obia, unu
              nabatara m, Agba m oto, unu eyiwe m akwa; mgbe m na -aria oria na
              mgbe m no na mkporo, unu biara leta m. (Matiu 25:31.35-38)
            </Text>
            <Text
              className="text-black dark:text-white"
              style={[styles.boldTxt, styles.txt]}
            >
              Sekpurunu Ala
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Onye Kwuputara m n’ihu ndi mmadu aga m ekwuputa ya n’ihu Nna no
              n’eligwe; ma onye o bula gola-hara m n’ihu ndi mmadu aga m agolaha
              ya n’ihu Nna m no n’eligwe.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Chineke m nyenu m ndi ezigbo ikwu na ibe na ndi enyi ga-anonyere m
              mana nsogbu ma n’ anuri. Mee ka m weputa obi m gbaara gi akaebe
              n’uwa a, ka i wee kwuputa aha m n’ihu Nna gi.
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
              kwere ukwe a gaa na nkwusi nke Asaa.
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
                Iwu kacha iwu m nile;
              </Text>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                Iwu ohuru ka m na-enye unu;
              </Text>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                Hunu ibe unu n’anya.
              </Text>
            </View>
          </View>
        </View>
      </StyledStationsComponent>
      <RenderChevronNavigation
        to={"SeventhStationIgbo"}
        from={"FifthStationIgbo"}
      />
    </>
  );
}
