import { StyleSheet, Text, View, Platform, ScrollView } from "react-native";
import React from "react";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";

export default function EkpereMmechi() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <IgboComponentForDisplayingAllStations />
        <Text style={styles.heading}>
          EKPERE MMECHI {"\n"} (Nke a ga-abu n’‘ihu altar)
        </Text>
        <Text style={styles.response}>
          <Text style={styles.ukwe}>Onye-ndu: </Text>
          Maka Izuzu Pope na Nzuko Nso Katolik:
        </Text>
        <Text style={styles.response}>
          <Text style={styles.ukwe}>Sekpurunu ala za: </Text>
          ONWU N’ELU OBE
        </Text>
        <Text style={styles.response}>
          GEENU nti ka m gwa unu otu ihe omimi. Anyi nile agaghi adacha mba
          n‘ura, ma anyi nile ga-agba-nwocha. N‘oge ntakiri, n‘otu ntabi anya,
          n‘uda opi-igwe. Maka na a ga-egbu opi-igwe, ndi nwuru anwu ebilite
          n’udi anwu anwu, anyi nile abia gbanwoo. Maka na ahu anyi nke a na
          emebi emebi ga-abia yiri emebighi-emebi; ahu anyi nke a na-anwu anwu
          abia buru anwu anwu. Mgbe ihe na-emebi emebi ga-abia yiri emebigh
          emebi, ihe na-anwu abia yiri anwu anwu, mgbe ahu kaa ga-emezu ihe e
          dere si: Eloole onwu na mmeri" “Onwu! olee mmeri gi? Onwul! olee ufu
          gi? {"       "} (I Ndi Korint 15:51 -52)
        </Text>
        <Text style={styles.response}>
          <Text style={styles.ukwe}>Sekpurunu ala Oha: </Text>
          Jesu m, ahuru m gi n’anya Karichaa ihe nile; Ejim obi m nile chegharia
          na mmehie m mehiere gi E kwela ka m kewapu onwe m ozo n’ebe I no; Mee
          kam hu gi n’anya mgbe o bula; Bia jim mee ihe o bula masiri gi.
        </Text>
        <Text style={styles.response}>
          Nna anyi no n’eligwe ...................... {"\n"}
          Ekele Maria....................................... {"\n"}
          Otito diri Nna.................................... {"\n"}
        </Text>
        <Text style={styles.response}>
          <Text style={styles.ukwe}>Onye-ndu: </Text>
          Jesu a kpodoro n’obe maka ihi anyi; {"\n"}
          <Text style={styles.ukwe}>Oha: </Text>
          Meere anyi ebere. {"\n"}
          <Text style={styles.ukwe}>Onye-ndu: </Text>
          Ka mkpuruobi ndi nile kwerenu gara aga; {"\n"}
          <Text style={styles.ukwe}>Oha: </Text>
          Site n’ebere nke Chukwu were Zuo ike na ndokwa. Amen. {"\n"}
          <Text style={styles.ukwe}>Ukwe: </Text>
          Otu ukwe, lent m‘obu ukwe mbilite n‘onwu. {"\n"}
        </Text>
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
  heading: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 25,
    marginTop: 12,
  },
  response: {
    fontSize: 17,
    // color: 'blue',
    marginVertical: 12,
    lineHeight: 23,
  },
  v: {
    fontWeight: "500",
  },
  prayer: {
    fontWeight: "700",
  },
  ukwe: {
    fontWeight: "600",
    fontSize: 18,
  },
  chorus: {
    fontWeight: "600",
    color: "grey",
    marginVertical: 17,
    opacity: 0.8,
  },
  mmechi: {
    lineHeight: 22,
    fontSize: 15,
  },
});
