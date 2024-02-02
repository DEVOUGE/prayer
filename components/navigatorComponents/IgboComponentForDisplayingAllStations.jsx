import { ScrollView, View, StyleSheet } from "react-native";
import React from "react";
import StationsComponent from "./StationsComponent";
const allStations = igbo.map(({ name, no }) => (
  <StationsComponent key={no} name={name} no={no} />
));
import IgboHomeNavigationButton from "./IgboHomeNavigationButton";
import igbo from "../../lib/igbo";
export default function IgboComponentForDisplayingAllStations() {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.view}>
        <IgboHomeNavigationButton />

        {allStations}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    columnGap: 12,
  },
});
