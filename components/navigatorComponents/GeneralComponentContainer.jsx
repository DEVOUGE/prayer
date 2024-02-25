import { ScrollView, View, StyleSheet } from "react-native";
import React from "react";
import HomeComponent from "./HomeComponent";
import StationsComponent from "./StationsComponent";
import stations from "../../lib/stations";
const allStations = stations.map(({ name, no }) => (
  <StationsComponent key={no} name={name} no={no} />
));
export default function GeneralComponentContainer() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.view} >
        <HomeComponent />

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
    marginBottom: 12,
  },
});
