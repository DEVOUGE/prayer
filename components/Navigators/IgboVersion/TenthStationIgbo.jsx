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
import pic from "../images/station10.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";

export default function TenthStationIgbo() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <IgboComponentForDisplayingAllStations />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            NKWUSI NKE IRI: ATONALU JESU AKWA YA
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
            Ndi agha gbara Jesu oto tupu ha akpogbuo ya n'obe. Ha yipuru ya akwa
            ya niile ka ha kesaara onwe ha. Jesu ka kwu n'ihe ihere di otu a ha
            malite ife nza onye ga-eketa uwe mwuda ya nke ha enweghi ike ikewa
            ekewa.
          </Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}>Ka anyi rio aririo</Text>- Dinwenu,
            kedu udi ihunanya di nke a; ihunanya buteere gi ahuhu, mkpari, uru
            na mkpagbu di otu a. Gbaghara anyi njo anyi niile ka anyi nwee ike
            idi ocha n’ihu Gi. Amen.
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
              Ngi Jesu bu ndu nke anyi
            </Text>
            <Text style={[styles.txt, styles.song]}>
              ngi Jesu bu ndu nke anyi burukwazi ihunanya
            </Text>
            <Text style={[styles.txt, styles.song]}>
              ihunanya, nyekwa anyi niile ike nke obi nyekwazi anyi ike nke ahu.
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
  songCont: {
    display: "flex",
    flexDirection: "column",
  },
  song: {
    color: "purple",
  },
});
