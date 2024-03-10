import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import pic from "../images/station08.jpg";
import IgboComponentForDisplayingAllStations from "../../navigatorComponents/IgboComponentForDisplayingAllStations";
import StyledStationsComponent from "../../styledStationsComponent";
import globalStyles from "../../../styles/styles";
import FontSizeContext from "../../../lib/FontSizeContext";
import { verticalScale } from "react-native-size-matters";
import { RenderChevronNavigation } from "../../chevronPagination";

export default function EighthStationIgbo() {
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
          <View style={styles.flexContainer}>
            <Text className="text-black dark:text-white" style={styles.heading}>
              NKWUSI NKE ASATO: Jesu ezute Umunwanyi Jerusalem
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              <Text
                className="text-black dark:text-white"
                style={styles.boldTxt}
              >
                {" "}
                Onye-ndu:
              </Text>{" "}
              Anyi esekpuoro gi Jesu na-enye gi ekele
            </Text>
            <Text
              className="text-black dark:text-white"
              style={styles.boldTxt}
            >
              Gbuonu otu ikpere n’ala za:
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              <Text
                className="text-black dark:text-white"
                style={styles.boldTxt}
              >
                Oha:
              </Text>{" "}
              Maka na obe gi di aso ka I Ji we gbaputa uwa.
            </Text>
            <Image source={pic} style={globalStyles.image} />
            <Text
              className="text-black dark:text-white"
              style={styles.centerTxt}
            >
              kulitenu
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              IGWE Ndi mmadu so Jesu na-aga n’uzo, tinyekwara umunwanyi na-emere
              ya ebere na-ebere ya akwa. Ma Jesu atugharia si ha "Umuada
              Jerusalem, unu eberela m akwa; kama bewerenu onwe unu na umu unu
              akwa‘(Luk. 25:27 -28)
            </Text>
            <Text
              className="text-black dark:text-white"
              style={[styles.boldTxt, styles.txt]}
            >
              Sekpurunu Ala
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              A nuru olu na-ebe akwa ariri, na-eru nnukwu uju na Rama, Rechel
              na-ebere umu ya akwa, O jula Inara nkasi-obi maka umu ya n‘ihi na
              ha adighi kwa. Dinwenu kwuru sli ‘Ebekwala akwa ozo. Hichaa
              anya-mmiri maka na ha ga-esi n‘ala ndi iro aloghachi’ (Jeremaya 5
              1:15-16)
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Dinwenu m, a napukwala m ndi nkasi obi mgbe m no na mkpa, E kwela
              ka onwunwa merie m, ma mee ka m merie onwunwa.
            </Text>
            <Text className="text-black dark:text-white" style={[styles.txt]}>
              <Text
                className="text-black dark:text-white"
                style={styles.boldTxt}
              >
                Oha:{" "}
              </Text>
              Jesus m, ahuru m gi n’anya karichaa ihe nile; Eji m obi m nile
              chegharia na mmehie m mehiere gi E kwela ka m kewapu onwe m ozo
              n’ebe I no; Mee ka m hu gi n’anya mgbe o bula; Bia ji m mee ihe o
              bula masiri gi.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              <Text
                className="text-black dark:text-white"
                style={styles.boldTxt}
              >
                Kulitenu{" "}
              </Text>
              kwere ukwe a gaa na nkwusi nke Itolu.
            </Text>
            <View style={styles.songCont}>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                <Text style={styles.boldTxt}>Ukwe: </Text>
                Kedu ihe eji atunyere gi;
              </Text>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                ji nye gi nkasi obi
              </Text>
              <Text
                className="text-black dark:text-white"
                style={[styles.txt, styles.song]}
              >
                Ewoo! Ada zayon? (Abu akwa 2:15)
              </Text>
            </View>
          </View>
        </View>
      </StyledStationsComponent>
      <RenderChevronNavigation
        to={"NinthStationIgbo"}
        from={"SeventhStationIgbo"}
      />
    </>
  );
}
