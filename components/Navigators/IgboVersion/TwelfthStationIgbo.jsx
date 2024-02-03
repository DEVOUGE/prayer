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
import pic from "../images/station12.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";

export default function TwelfthStationIgbo() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <IgboComponentForDisplayingAllStations />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            NKWUSI NKE IRI NA ABUO: JESU ANWUO N’ELU OBE
          </Text>
          <Text style={[styles.boldTxt, styles.txt]}>
            V. Anyi esekpuoro gi Jesu na-enye gi ekele
          </Text>
          <Text style={[styles.boldTxt, styles.txt]}>
            R. Makana Obe Gi di aso ka iji wee gbaputa uwa
          </Text>
          <Image source={pic} />
          <Text style={[styles.txt]}>
            <Text style={styles.boldTxt}>V. </Text>
            Jesu tara ahuhu di egwu bido n'ihe dika elekere iri na abuo nke
            ehihie e ji kpodo ya n'obe ruo n'ihe dika elekere ato nke ehihie
            mgbe onwuru. O gbaghalu ndi niile gburu ya kpodo ya n’obe. O
            runatala isi ya, KUBEE{" "}
            <Text style={styles.minuteSilence}>(Chetu obere oge-Ukwe)</Text>
          </Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}>Ka anyi rio aririo</Text>- O Chukwu,
            oburu na inyochaba ajo omume anyi, onweghi onye ga-adi mma n’ihu gi.
            Nye anyi ike iji na agbaghalu ndi niile megidere anyi. Biko, site
            n’ebere na obioma gi, mee ka onwu gi wetara anyi nzoputa ebebe.
            Amen.
          </Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}>R. </Text>
            Jesu m; Ahuru m gi n'anya karichaa ihe niile. Eji m obi m niile
            chegharia na mmehie m mehiere gi. Ekwela ka m kewapu onwe m ozo
            n'ebe ino. Mee ka m hu gi na anya mbge obula. Bia were m mee ihe
            masiri gi.
          </Text>
          <Text style={[styles.boldTxt, styles.txt]}>
            Nna anyi no n'elugwe... Ekene Maria... Otito diri Nna...
          </Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}>V. </Text>O Jesu a kpogburu n'obe maka
            ihi anyi... R. Meere anyi ebeere
          </Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}>V.</Text> Ka mkpuruobi ndi niile
            kwerenu gara aga...
          </Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}>R.</Text> Site n’ebere nke Chukwu ka ha
            zuru ike na ndokwa
          </Text>
          <View style={styles.songCont}>
            <Text style={[styles.txt, styles.song]}>
              <Text style={styles.boldTxt}>Ukwe: </Text>
              Onwu ya n’obe x3
            </Text>
            <Text style={[styles.txt, styles.song]}>
              Obu ya wetara anyi olile anya
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
  txt: {
    fontSize: 17,
    lineHeight: 24,
  },
  minuteSilence: {
    color: 'red'
  },
  songCont: {
    display: "flex",
    flexDirection: "column",
  },
  song: {
    color: "purple",
  },
});
