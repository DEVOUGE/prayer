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
import pic from "../images/station04.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";

export default function FourthStationIgbo() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <IgboComponentForDisplayingAllStations />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            NKWUSI NKE ANO: JESU EZUTE NNE YA N’UZO
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
            Ka ahu niile na-egbuchazi Jesu mgbu, obara na-eruda n'ala; mgbe ndi
            agha nokwa na-ata ya ahuhu di icheiche, ka O zutere nne ya. Site na
            mwute na iru uju ka ihu nne ya jiri dizie ka nke nwanyi isimkpe. Nke
            kasi mwute bu na ndi agha na-adokpu Jesu, ekweghi nne ya rute nso.
          </Text>
          <Text style={styles.txt}>
            <Text style={styles.boldTxt}>Ka anyi rio aririo</Text>
            -Ezigbo nne Jesu na nne anyi; mwute wutere gi gosiri anyi ka njo
            anyi ha. Riotara anyi aririo kitaa na oge onwu anyi. Mgbe anyi
            ga-anwu, duru anyi ka nne dugara nwa gi Jesu, ka O dugara anyi
            Chukwu Nna. Amen.
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
            <Text style={styles.boldTxt}>Ukwe: </Text>Maria di aso yobala Anyi,
            K’anyi we fu Jesu n’anya n’ebe okolu na enu obe.
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
