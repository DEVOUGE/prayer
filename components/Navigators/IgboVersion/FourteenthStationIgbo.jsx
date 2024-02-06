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
import pic from "../images/station14.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";

export default function FourteenthStationIgbo() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <IgboComponentForDisplayingAllStations />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            NKWUSI NKE IRI-NA-ANO: A donye Jesu n’ili
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
            Nke a abia mezuo amuma e buru si: "E mekotara ili ya na nke ndi njo;
            ya na ogalanya nokwa n’onwu ya." "Ya adonye ahu ahu n’ili o mezirila
            onwe ya." (Azaya 53:9: 1 Ndi Eze 13: 30)
          </Text>
          <Text style={[styles.boldTxt, styles.txt]}>Sekpurunu Ala</Text>
          <Text style={styles.txt}>
            Otu e si mee otutu mmadu ndi njo site n’ehuweghi isi nke otu onye ka
            e sikwa mee otutu mmadu ndi ezi-omume site n’ihuwe isi nke otu onye.
            E mere anyi mmiri-Chukwu n’onwu Kristi, ka anyi wee soro ya na-aga
            ije na ndu ohuru (Ndi Rom 5:19:6:3-4)
          </Text>
          <Text style={styles.txt}>
            Chineke m, mee ka ndi no n’ochichi nwee obi-mmadu were obi Chineke
            na-achi, Mee ka ndi ogalanya anyi were anya ana -asoro ha n’obodo
            na-aruputa oru nke nzoputa.
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
            kwere ukwe a gaa n’ iru altar
          </Text>
          <View style={styles.songCont}>
            <Text style={[styles.txt, styles.song]}>
              <Text style={styles.boldTxt}>Ukwe: </Text>
              igaghi ahapu m n’ala-mmuo;
            </Text>
            <Text style={[styles.txt, styles.song]}>
              I gaghi ekwe kam ree ure;
            </Text>
            <Text style={[styles.txt, styles.song]}>
              Anuri ejula m obi (Abu oma 16:10-11)
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
