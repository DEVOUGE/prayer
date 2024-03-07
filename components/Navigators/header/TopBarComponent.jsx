import { StyleSheet, Text, View, Platform, Image } from "react-native";
import React, { useEffect, useState } from "react";
import DropdownComponent from "./DropdownComponent";
import Ellipsis from "./Ellipsis";
import { getData } from "../../../lib/Storage";

export default function TopBarComponent({ shouldDisplayDropdownComponent }) {
  const setting = ["Settings"];
  const [fetchedLang, setFetchedLang] = useState(null);

  async function fetchLang() {
    await getData("lang").then((language) => setFetchedLang(language));
  }
  useEffect(() => {
    fetchLang();
  }, []);

  function languageTransform(
    normalTranslation,
    igboTranslation
    // englishTranslation,
  ) {
    if (fetchedLang == "igbo") {
      normalTranslation = igboTranslation;
    }

    return <Text>{normalTranslation}</Text>;
  }

  return (
    <View style={styles.topCont} className={`${shouldDisplayDropdownComponent=="no"?"mb-6":"mb-0"}`}>
      <View style={{ width: 62, height: 35 }}/>
      {shouldDisplayDropdownComponent == "yes" ? (
        <DropdownComponent />
      ) : (
        <Text className="text-white">
          {languageTransform("Stations of the Cross", "Nkwusi nke Obe")}
        </Text>
      )}
        <Ellipsis setting={setting} />
    </View>
  );
}

const styles = StyleSheet.create({
  topCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    alignItems: "center",
    zIndex: 1000,
  },
  txt: {
    color: "white",
    alignSelf: "center",
  },
});
