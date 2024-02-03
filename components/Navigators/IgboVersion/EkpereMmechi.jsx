import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";

export default function EkpereMmechi() {
  return (
    <View style={styles.container}>
      <IgboComponentForDisplayingAllStations />
      <Text style={styles.heading}>EKPERE MMECHI</Text>
      <Text style={styles.response}>Maka Izuzu Pope na Nzuko Nso Katolik:</Text>
      <Text style={styles.prayer}>
        Nna anyi no n'eluigwe ... Ekene Maria … Otito diri Nna...
      </Text>
      <Text style={styles.response}>
        <Text style={styles.v}>V. </Text>O Jesu a kpogburu n'obe maka ihi
        anyi... Meere anyi ebeere.
      </Text>
      <Text style={styles.response}>
        <Text style={styles.v}>V. </Text>
        Ka mkpuruobi ndi niile kwerenu gara aga... Site n’ebere nke Chukwu ka ha
        zuru ike na ndokwa. {"\n"}
        <Text style={styles.ukwe}>Ngozi:</Text>
      </Text>
      <Text style={styles.ukwe}>Ukwe Mmechi:</Text>
      <Text style={styles.mmechi}>
        {"      "}
        <Text>1. {"   "} </Text>
        Obi nso Maria, kasi ihunanya {"\n"} {"             "}
        Anyi na ndi muo-oma kene I nekwe
      </Text>
      <Text style={styles.chorus}>
        {"             "} Chorus: Ave Ave Ave Maria
      </Text>
      <Text style={styles.mmechi}>
        {"      "}
        <Text>2. {"   "} </Text>
        Were Obi ebere O nne nke gratia {"\n"} {"              "}
        Na-enekwasi anya na nkpa nk’umu I.
      </Text>
    </View>
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
