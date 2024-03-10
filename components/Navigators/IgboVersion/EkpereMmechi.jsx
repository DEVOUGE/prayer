import { StyleSheet, Text, View, Platform } from "react-native";
import React, { useContext } from "react";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import StyledStationsComponent from "../../styledStationsComponent";
import FontSizeContext from "../../../lib/FontSizeContext";
import { verticalScale } from "react-native-size-matters";
import { ChevronPaginationLast } from "../../chevronPagination";

export default function EkpereMmechi() {
  const { newFontSize, fetchAddedFontSize } = useContext(FontSizeContext);

  const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? 10 : 0,
      marginHorizontal: 12,
      marginBottom: 23,
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
    },
    txt: {
      fontSize: 17 + newFontSize,
      lineHeight: verticalScale(24 + newFontSize),
      marginBottom: 10,
    },
    leader: {
      fontWeight: "600",
      fontSize: 17 + newFontSize,
      lineHeight: verticalScale(24 + newFontSize),
    },
    all: {
      fontWeight: "normal",
    },
  });

  return (
    <>
      <StyledStationsComponent>
        <View style={styles.container} onLayout={fetchAddedFontSize}>
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
            Jesu m, ahuru m gi n’anya Karichaa ihe nile; Ejim obi m nile
            chegharia na mmehie m mehiere gi E kwela ka m kewapu onwe m ozo
            n’ebe I no; Mee kam hu gi n’anya mgbe o bula; Bia jim mee ihe o bula
            masiri gi.
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
      </StyledStationsComponent>
      <View
        className="w-full bg-light dark:bg-black absolute bottom-0 left-0 right-0 items-center justify-center py-8"
      >
        <ChevronPaginationLast to={"none"} from={"AririoNihuAltar"} />
      </View>
    </>
  );
}
