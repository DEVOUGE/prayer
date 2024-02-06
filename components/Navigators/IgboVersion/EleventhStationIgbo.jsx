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
import pic from "../images/station11.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";

export default function EleventhStationIgbo() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <IgboComponentForDisplayingAllStations />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            NKWUSI NKE IRI-NA-OTU: A kpodo Jesu n’obe
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
            DIKA Mosis si welite agwo elu n’ime ozara ka aga esi ewelite Nwa nke
            Mmadu elu, ka onye o bula kwerela na ya wee nweta ndu ebigh ebi. E
            si n’ ala welite m elu, aga m adotara onwe m mmadu nile. Mgbe Jesu
            burutere obe na Golgota, ha akpogbuo ya n’etiti_ndi ohi abuo. Ndi
            mmadu guzoro na-ele ya; Ndi ji ike ochichi na-akocha ya: ndi agha ji
            ya na-akpa ochi. Ma Jesu si: "Nnaa, biko gbaghara ha maka na ha
            amagni ihe ha na eme. (Jon3: 14-15; 12:32. Luk. 23:32-59)
          </Text>
          <Text style={[styles.boldTxt, styles.txt]}>Sekpurunu Ala</Text>
          <Text style={styles.txt}>
            O mezuola ihe e dere n’akwukwo nso si; Ndi mmadu na akocha m,
            na-eleda m anya, Ha jim akpa ochi; na-emenyere m onu, na efere m
            n’isi. Ndi ajo mmadu agbaala m gburugburu. Ha dupuru aka m na ukwu
            m, Enwere m ike igu okpukpu m nile onu.
          </Text>
          <Text style={styles.txt}>
            Chineke m, e kwela ka m taa ahuhu o bula n’efu; ma were ahuhu nile
            ga-ablakwute m na ndu m sachapu njo m nile, bia kwadowe m nke oma
            maka alaeze gi nke na-abianu.
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
            kwere ukwe a gaa na nkwusi nke Iri-na-abuo.
          </Text>
          <View style={styles.songCont}>
            <Text style={[styles.txt, styles.song]}>
              <Text style={styles.boldTxt}>Ukwe: </Text>
              Nke a bu obara nke ogbugba ndu;
            </Text>
            <Text style={[styles.txt, styles.song]}>
              Obara ogbugba ndu ohuru;
            </Text>
            <Text style={[styles.txt, styles.song]}>
              Nke aga agba maka unu (Mak 22:14)
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
