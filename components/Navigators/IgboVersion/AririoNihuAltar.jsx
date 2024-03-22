import { StyleSheet, Text, View, Platform } from "react-native";
import React, {useContext} from "react";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import StyledStationsComponent from "../../styledStationsComponent";
import FontSizeContext from "../../../lib/FontSizeContext";
  import { verticalScale } from "react-native-size-matters";
import { RenderChevronNavigation } from "../../chevronPagination";
  import { useFonts } from "expo-font";

export default function AririoNihuAltar() {
const { newFontSize, fetchAddedFontSize } = useContext(FontSizeContext);
const [fontsLoaded] = useFonts({
  "PTSans-Regular": require("../../../assets/fonts/PTSans-Regular.ttf"),
  "SourceSerif": require("../../../assets/fonts/SourceSerif4-SemiBold.ttf"),
});

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 10 : 0,
    marginHorizontal: 12,
    marginBottom: 230,
  },
  flexContainer: {
    display: "flex",
    rowGap: 15,
  },
  heading: {
    fontSize: 25 + newFontSize,
    lineHeight: verticalScale(25 + newFontSize),
    fontWeight: "500",
    textAlign: "center",
    color: "red",
    marginTop: verticalScale(newFontSize),
    fontFamily: "SourceSerif"
  },
  txt: {
    fontSize: 17 + newFontSize,
    lineHeight: verticalScale(24 + newFontSize),
    marginBottom: 10,
    fontFamily: "SourceSerif"
  },
  vr: {
    fontWeight: "600",
    fontSize: 17 + newFontSize,
    lineHeight: verticalScale(24 + newFontSize),
    fontFamily: "PTSans-Regular"
  },
});

  if (!fontsLoaded) {
  return <Text>Font Loading!</Text>
}

  return (
    <>
      <StyledStationsComponent>
        <View style={styles.container} onLayout={fetchAddedFontSize}>
          <IgboComponentForDisplayingAllStations />
          <Text className="text-black dark:text-white" style={styles.heading}>
            AririoNihuAltar
          </Text>
          <Text className="text-black dark:text-white" style={styles.vr}>
            <Text className="text-black dark:text-white" style={styles.boldTxt}>
              V.{" "}
            </Text>
            Dinwewnu anyi rubere is garuo n'onwu
          </Text>
          <Text className="text-black dark:text-white" style={styles.vr}>
            <Text className="text-black dark:text-white" style={styles.boldTxt}>
              R.{" "}
            </Text>
            Onwu n'elu Obe
          </Text>
          <Text className="text-black dark:text-white" style={styles.heading}>
            Ka Anyi Rio Aririo
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            Dinwenu na onye nzoputa anyi; Eze nke udo na nke mba niile; Ekele
            diri gi n'ihi na I kweghi ka onwu merie gi maobu merie anyi. Ekele
            diri gi n'ihi na imeghi ka anyi na-ahu gi ka ajo mmadu a kpogburu
            n'obe, onye ndi mmadu gburu n'ihi akpomasi maobu aru o mere. Ekele
            diri gi na I gosiri anyi onwe gi dika Chukwu di ndu. Amen.
          </Text>
        </View>
      </StyledStationsComponent>
      <RenderChevronNavigation to={"Ekperemmechi"} from={"FourteenthStationIgbo"} />
    </>
  );
}

