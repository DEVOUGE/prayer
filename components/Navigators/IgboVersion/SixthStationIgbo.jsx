import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import pic from "../images/station06.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import StyledStationsComponent from "../../styledStationsComponent";

export default function SixthStationIgbo() {
  return (
    <StyledStationsComponent>
      <View style={styles.container}>
        <IgboComponentForDisplayingAllStations />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            NKWUSI NKE ISII: Veronika Ehichaa Jesu Ihu
          </Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}> Onye-ndu:</Text> Anyi esekpuoro gi
            Jesu na-enye gi ekele
          </Text>
          <Text style={styles.boldTxt}>Gbuonu otu ikpere n’ala za:</Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}>Oha:</Text> Maka na obe gi di aso ka I
            Ji we gbaputa uwa.
          </Text>
          <Image
            source={pic}
            className="self-center w-full bg-blend-color-burn rounded-sm"
          />
          <Text style={styles.centerTxt}>kulitenu</Text>
          <Text style={styles.txt}>
            MGBE Nwa nke Mmadu ga-abia n’ebube ya n’ogbara ndi muo-oma nile, o
            ga-agwa ndi ezi-omume;“Mgbe aguu na-agu m, unu nyere m nri rie;
            Mmiri na-agu m, unu nyere m mmiri nuo, mgbe m bu onye obia, unu
            nabatara m, Agba m oto, unu eyiwe m akwa; mgbe m na -aria oria na
            mgbe m no na mkporo, unu biara leta m. (Matiu 25:31.35-38)
          </Text>
          <Text style={[styles.boldTxt, styles.txt]}>Sekpurunu Ala</Text>
          <Text style={styles.txt}>
            Onye Kwuputara m n’ihu ndi mmadu aga m ekwuputa ya n’ihu Nna no
            n’eligwe; ma onye o bula gola-hara m n’ihu ndi mmadu aga m agolaha
            ya n’ihu Nna m no n’eligwe.
          </Text>
          <Text style={styles.txt}>
            Chineke m nyenu m ndi ezigbo ikwu na ibe na ndi enyi ga-anonyere m
            mana nsogbu ma n’ anuri. Mee ka m weputa obi m gbaara gi akaebe
            n’uwa a, ka i wee kwuputa aha m n’ihu Nna gi.
          </Text>
          <Text style={[styles.txt]}>
            <Text style={styles.boldTxt}>Oha: </Text>
            Jesus m, ahuru m gi n’anya karichaa ihe nile; Eji m obi m nile
            chegharia na mmehie m mehiere gi E kwela ka m kewapu onwe m ozo
            n’ebe I no; Mee ka m hu gi n’anya mgbe o bula; Bia ji m mee ihe o
            bula masiri gi.
          </Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}>Kulitenu </Text>
            kwere ukwe a gaa na nkwusi nke Asaa.
          </Text>
          <View style={styles.songCont}>
            <Text style={[styles.txt, styles.song]}>
              <Text style={styles.boldTxt}>Ukwe: </Text>
              Iwu kacha iwu m nile;
            </Text>
            <Text style={[styles.txt, styles.song]}>
              Iwu ohuru ka m na-enye unu;
            </Text>
            <Text style={[styles.txt, styles.song]}>Hunu ibe unu n’anya.</Text>
          </View>
        </View>
        <StatusBar translucent={true} />
        <IgboComponentForDisplayingAllStations />
      </View>
    </StyledStationsComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 10 : 0,
    marginHorizontal: 12,
    marginBottom: 33,
  },
  flexContainer: {
    display: "flex",
    rowGap: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    color: "red",
  },
  boldTxt: {
    fontWeight: "900",
  },
  centerTxt: {
    textAlign: "center",
    fontWeight: "700",
    fontStyle: "italic",
  },
  txt: {
    fontSize: 17,
    lineHeight: 25,
  },
  songCont: {
    display: "flex",
    flexDirection: "column",
  },
  song: {
    color: "purple",
  },
});
