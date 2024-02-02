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
import pic from "../images/station01.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";

export default function FirstStationIgbo() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <IgboComponentForDisplayingAllStations />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            NKWUSI NKE MBU: A MAA JESU IKPE ONWU
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
            Ndi agha kpuoro Jesu gaa n'ihu Pilate si ya na Jesu kwuru aru. O si
            na ya bu nwa nke Chukwu. Ha gwara ya na iwu obodo kwuru ka e gbuo
            onye obula nyara udi isi a. Ha mere ka a ga-asi na ha na-
            ekwuchitere oha obodo onu ha; wee gwa Pilate na Caiaphas na oha
            obodo na ario ka ha nye ikike ka a kpogbuo Jesu n'obe.
          </Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}>Ka anyi rio aririo</Text>
            -Dinwenu Jesu, anyi bu ihere njo anyi niile wee nodu n'ihu gi. O bu
            njo anyi buteere gi udi nhujuanya a. Ekwela ka anyi kewapu onwe anyi
            n'ebe I no ozo. Nyere anyi aka n'adighi ike anyi. Gbaghara anyi.
            Amen
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
              Ka pailate juru, I bu onye Eze
            </Text>
            <Text style={[styles.txt, styles.song]}>
              Jesu zara ee, a bu m Onye Eze
            </Text>
            <Text style={[styles.txt, styles.song]}>
              Dinwenu anyi Jesu, na-achi eze n’enigwe, Eze nke ora nile Eze nke
              Eze
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
    display: 'flex',
    flexDirection: 'column',
  },
  song: {
    color: "purple",
  },
});
