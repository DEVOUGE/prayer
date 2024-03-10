import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import pic from "../images/station13.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import StyledStationsComponent from "../../styledStationsComponent";
import globalStyles from "../../../styles/styles";
import FontSizeContext from "../../../lib/FontSizeContext";
import { verticalScale } from "react-native-size-matters";
import { RenderChevronNavigation } from "../../chevronPagination";

export default function ThirteenthStationIgbo() {
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
              NKWUSI NKE IRI-NA-ATO: Ebutuo Ahu Jesu n’obe
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
              NDI agha biara gbajie ukwu onye nke mbu na onye nke abuoa
              kpogbukotara ha na Jesu. Ma mabe ha biarutere ebe Jesu no, ha ahu
              na o nwuolarii; ha agbajighi ya ukwu, Ma otu n’ime ndi agha ewere
              ube mapuo akuku ya; obara na mmiri agbaputa otu ihu ahu. Nke a bu
              iji mezuo ihe akwukwo nso kwuru si: "O nweghi otu okpukpu ya a ga
              agbaji." "Ha ga-elekwasi ya anya, bu onye nke ha jiri ube mapuo.
              (Jon 19:352-34; 356-37)
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
              Chineke m, nye m onyinye nke ibi ndu di mma, nwuo Onwu di mma, wee
              soro keta anuri ebighi ebi n’eligwe.
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
              kwere ukwe a gaa na nkwusi nke Iri-na-ano.
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
                Esom Kristi koro n’obe;
              </Text>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                Adi m ndu, o bu nke Kristi;
              </Text>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                O bu Kristi bi n’Ime m (Galecla 2:20)
              </Text>
            </View>
          </View>
        </View>
      </StyledStationsComponent>
      <RenderChevronNavigation
        to={"FourteenthStationIgbo"}
        from={"TwelfthStationIgbo"}
      />
    </>
  );
}
