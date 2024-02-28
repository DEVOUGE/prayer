import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import pic from "../images/station04.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import StyledStationsComponent from "../../styledStationsComponent";

export default function FourthStationIgbo() {
  return (
    <StyledStationsComponent>
      <View style={styles.container}>
        <IgboComponentForDisplayingAllStations />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            NKWUSI NKE ANO: Jesu Ezute Nne Ya N’ Uzo
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
            className="self-center w-full bg-blend-color-burn rounded-sm "
          />
          <Text style={styles.centerTxt}>kulitenu</Text>
          <Text style={styles.txt}>
            MGBE Jesu huru ebe nne ya kwuru n’ukwu obe, biakwa hu nwa-azu nke o
            huru n’anya n’akuku ya, O si; “nne, lee nwa gi" Ya agwa nwa azu ahu
            "Lee Nne gi.” Nwaazu ahu akporo ya mgbe ahu lawa n‘ulo ya. (Jon
            19:25-27)
          </Text>
          <Text style={[styles.boldTxt, styles.txt]}>Sekpurunu Ala</Text>
          <Text style={styles.txt}>
            "Lee, e debere nwata a maka odida na mbilite otutu mmadu n’‘Izrel; o
            bu ihe amuma-atu a ga ekwuto ekwuto kae were kpughee echiche no
            otutu mmadu n’ obi.‘Ma mma agha ga amawa gi obi.
          </Text>
          <Text style={styles.txt}>
            Onyenweanyi, mee ka m were nne gi di aso bu Maria ka ezigbo nne m,
            hu ya n’anya ka i si hu ya n’anya, na-asopuru ya maka ihi gi. (Luke
            2:34)
          </Text>
          <Text style={[styles.txt]}>
            <Text style={styles.boldTxt}>Oha: </Text>
            Jesum, ahuru m gi n’anya karichaa ihe nile; Ejim Obi m nile
            chegharia na mmehie m mehiere gi, E kwela ka m kewapu onwe m ozo
            n’ebe ino; Mee kam hu gi n’anya mgbe o bula; Bia jim mee ihe o bula
            masiri gi.
          </Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}>Kulitenu </Text>
            kwere ukwe a gaa na nkwusi nke isii.
          </Text>
          <View style={styles.songCont}>
            <Text style={[styles.txt, styles.song]}>
              <Text style={styles.boldTxt}>Ukwe: </Text>
              Maria di aso yobara anyi;
            </Text>
            <Text style={[styles.txt, styles.song]}>
              ka anyi wee hu Jesu n’anya
            </Text>
            <Text style={[styles.txt, styles.song]}>
              N’ ebe o koro n’ obe (Stabat Mater)
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
