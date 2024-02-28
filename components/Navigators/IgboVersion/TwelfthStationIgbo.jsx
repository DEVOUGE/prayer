import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import pic from "../images/station12.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import StyledStationsComponent from "../../styledStationsComponent";

export default function TwelfthStationIgbo() {
  return (
    <StyledStationsComponent>
      <View style={styles.container}>
        <IgboComponentForDisplayingAllStations />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            NKWUSI NKE IRI-NA-ABUO: Jesu anwuo n’elu obe
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
            JESU no n’udi Chukwu. Mana o jighi aka abuo ghado udi Chukwu ya;
            kama o biara huchaa onwe ya were udi nwadibo, a muo ya ka mmadu.
            Mgbe a huru ya n’ udi mmadu. O budara onwe ya ala huwe Isi ruo
            n’onwu, burugodu onwu n’elu obe. Ya mere Chukwu bulie ya elu, nye ya
            aha ka aha nile; nke na akpo aha Jesu, onye a bula no n’eligwe, mao
            bu n’uwa, ma o bu n’ okpuru uwa ga-egbu ikpere n’ala kwuputa na Jesu
            bu Dinwenu. (Filipai 2:6-11)
          </Text>
          <Text style={[styles.boldTxt, styles.txt]}>Sekpurunu Ala</Text>
          <Text style={styles.txt}>
            Onye ga ekewapu anyi n’ ihunanya Kristi? O bu mkpagbu ka o bu ahuhu,
            kao bu mmegbu, ka o bu oke aguu; o bu igba oto, ka o bu ize-ndu, ka
            o bu mmagha? oolo N’ihe nile ndi a, anyi kariri dikeogu n‘ime onye
            ahu huru anyi n’anya.
          </Text>
          <Text style={styles.txt}>
            Onyenwe m, nyenu m amara gi ka m were ike m nile na-aru oru oma gi
            mgbe nile n’atughi egwu o bula.
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
            kwere ukwe a gaa na nkwusi nke Iri-na-ato.
          </Text>
          <View style={styles.songCont}>
            <Text style={[styles.txt, styles.song]}>
              <Text style={styles.boldTxt}>Ukwe: </Text>
              O’gini gbaputara unu?
            </Text>
            <Text style={[styles.txt, styles.song]}>
              O bughi ola-ocha na ola edo
            </Text>
            <Text style={[styles.txt, styles.song]}>
              Ma o bu obara Kristi. (1.Pita 1:17-19)
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
