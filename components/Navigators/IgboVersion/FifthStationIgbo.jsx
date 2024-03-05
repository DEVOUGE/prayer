import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import pic from "../images/station05.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";

export default function FifthStationIgbo() {
  return (
    <StyledStationsComponent>
      <View style={styles.container}>
        <IgboComponentForDisplayingAllStations />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            NKWUSI NKE Ise: Simion Enyere Jesu Aka Ibu Obe
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
            MGBE ha nyerechara Jesu mkpari, bia yipu ya uwe-nru-ala ahu, yiwe ya
            uwe nke ya, duru ya puo gaa ikpogbu ya. Ma mgbe ha na-aga, ha huru
            Simion onye Sirin, manye ya ka o buru obe Jesu. (Matiu 27:3 1-32)
          </Text>
          <Text style={[styles.boldTxt, styles.txt]}>Sekpurunu Ala</Text>
          <Text style={styles.txt}>
            Ana m agwa unu, otutu ga-esi n’owuwa-anyawu na odida - anyanwu bia
            nonyere Ebreham, Azik, na Jecop na alaeze, eligwe. Ma a ga-achupu
            umu alaeze na mbara -ezi kwuru itiri, ebe so ibe akwa na ita ikikere
            eze ga-adi" (Matiu 8:11 -12)
          </Text>
          <Text style={styles.txt}>
            Chineke m, mee ka m were obi anuri nara obe nile i ga ezitere m na
            ndu m. E kwela ka achupu m n’ala-eze gi.
          </Text>
          <Text style={[styles.txt]}>
            <Text style={styles.boldTxt}>Oha: </Text>
            Jesu m, ahuru m gi n’anya karichaa ihe nile; Ejim obi m nile
            chegharia na mmehie m mehiere E kwela ka m kewapu onwe m ozo n’ebe I
            no; Bia Jim mee ihe o bula m gi.
          </Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}>Kulitenu </Text>
            kwere ukwe a gaa na nkwusi nke isii.
          </Text>
          <View style={styles.songCont}>
            <Text style={[styles.txt, styles.song]}>
              <Text style={styles.boldTxt}>Ukwe: </Text>
              Ya buru na iga-abu nwa-azu m;
            </Text>
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
