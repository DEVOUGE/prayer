import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import pic from "../images/station09.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";

export default function NinthStationIgbo() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <IgboComponentForDisplayingAllStations />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            NKWUSI NKE Itolu: Jesu adaa nke ugboro Ato
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
          <Image source={pic} />
          <Text style={styles.centerTxt}>kulitenu</Text>
          <Text style={styles.txt}>
            AWUFUOLA m ka mmiri, njiko okpukpu m nile agbakwarachaala. Obi m
            edeela ka mkpuru-mmiri wuba m n’afo. Ike (Strength) m akpoola nku ka
            mpekele ite. Ire m ataparala m n’agba m. I tuoala m n’uru nke onwu.
          </Text>
          <Text style={[styles.boldTxt, styles.txt]}>Sekpurunu Ala</Text>
          <Text style={styles.txt}>
            ‘Dinwenu, lee, I hula na aburula m onye a juru aju."O bu na ihe a
            agbasaghi unu nile na-agafe nu?" Letanu ma o nwere ahuhu ka nke a e
            bunyere m. Ihe ndi a ka m na-ebere akwa; anya-mmiri na-ehusi m
            n’anya. Maka na enweghi m onye nkasi obi; nke m na-enwe onye na-asi
            m jisie ike." (Abuakwa 1:11-12, 16)
          </Text>
          <Text style={styles.txt}>
            Chineke ji ike nile, nye m amara gi n’uju ka m were Kwudosie ike ruo
            na ngwucha. Ekwela ka obi daa m mba mgbe ihe na-esiri m ike.
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
            kwere ukwe a gaa na nkwusi nke Iri.
          </Text>
          <View style={styles.songCont}>
            <Text style={[styles.txt, styles.song]}>
              <Text style={styles.boldTxt}>Ukwe: </Text>
              Buo amuma Nwanke Mmadu;
            </Text>
            <Text style={[styles.txt, styles.song]}>
              Ka okpukpu kporo nku nwee ndu;
            </Text>
            <Text style={[styles.txt, styles.song]}>
              Ka ha nu okwu Chukwu (Ezikiel 57:4-5)
            </Text>
          </View>
        </View>
        <StatusBar translucent={true} />
        <IgboComponentForDisplayingAllStations />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 45 : 0,
    marginHorizontal: 12,
    marginBottom: 4,
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
    // fontSize: 20,
    fontWeight: "700",
    fontStyle: "italic",
  },
  txt: {
    fontSize: 17,
    lineHeight: 24,
  },
  songCont: {
    display: "flex",
    flexDirection: "column",
  },
  song: {
    color: "purple",
  },
});


