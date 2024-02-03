import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";

export default function AririoNihuAltar() {
  return (
      <View style={styles.container}>
        <IgboComponentForDisplayingAllStations />
        <Text style={styles.heading}>AririoNihuAltar</Text>
        <Text style={styles.vr}>
          <Text style={styles.boldTxt}>V. </Text>
          Dinwewnu anyi rubere is garuo n'onwu
        </Text>
        <Text style={styles.vr}>
          <Text style={styles.boldTxt}>R. </Text>
          Onwu n'elu Obe
        </Text>
        <Text style={styles.heading}>Ka Anyi Rio Aririo</Text>
        <Text style={styles.txt}>
          Dinwenu na onye nzoputa anyi; Eze nke udo na nke mba niile; Ekele diri
          gi n'ihi na I kweghi ka onwu merie gi maobu merie anyi. Ekele diri gi
          n'ihi na imeghi ka anyi na-ahu gi ka ajo mmadu a kpogburu n'obe, onye
          ndi mmadu gburu n'ihi akpomasi maobu aru o mere. Ekele diri gi na I
          gosiri anyi onwe gi dika Chukwu di ndu. Amen.
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
    textAlign: 'center',
    fontSize: 27,
    marginTop: 12,
    fontWeight: '600'
  },
  vr: {
    fontSize: 17
  },
  boldTxt: {
    fontWeight: '500'
  },
  txt: {
    fontSize: 16,
    lineHeight: 25
  }
});
