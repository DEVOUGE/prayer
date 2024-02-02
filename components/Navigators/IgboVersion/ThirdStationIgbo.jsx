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
import pic from "../images/station03.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";

export default function ThirdStationIgbo() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <IgboComponentForDisplayingAllStations />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            NKWUSI NKE ATO: ADA IZIZI JESU JESU DARA N’OKPURU OBE
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
            Udi ike gwuru Jesu mere na O burughi obe ya ebe a ga-ano kpogbu ya.
            O daa n'ala, obe dakwasi ya. Onye leruru anya ga-ahu na o bughi
            naani aro obe ka ike ji gwu Jesu. Tupu ndi agha ebo ya obe, ha
            etirichaala ya ahu, osisoo na obara na-ehu ka mmiri n'ahu ya. Ihe
            ndi a nyechaara odida ya aka.
          </Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}>Ka anyi rio aririo</Text>
            -Dinwenu; si na ndidi I nwere n'oge ahuhu gi a na ihunanya gi di
            agwuagwu nyere anyi aka icheghari na mmehie anyi niile. Mee ka anyi
            si na mwute na ahuhu gi nwee aguu ina eme uche gi mgbe niile. Amen
          </Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}>R. </Text>
            Jesu m; Ahuru m gi n'anya karichaa ihe niile. Eji m obi m niile
            chegharia na mmehie m mehiere gi. Ekwela ka m kewapu onwe m ozo
            n'ebe ino. Mee ka m hu gi na anya mbge obula. Bia were m mee ihe
            masiri gi
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
            <Text style={[styles.txt, styles.song]}>
              <Text style={styles.boldTxt}>Ukwe: </Text>M ga ebili laakwuru Nna
              (ugboro ato) M ga asi ya emehiego m.
            </Text>
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
  song: {
    color: "purple",
  },
});