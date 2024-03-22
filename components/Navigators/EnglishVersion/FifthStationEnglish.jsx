import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import pic from "../images/station01.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";
import globalStyles from "../../../styles/styles";
import StyledStationsComponent from "../../styledStationsComponent";
import { verticalScale } from "react-native-size-matters";
import FontSizeContext from "../../../lib/FontSizeContext";
import { RenderChevronNavigation } from "../../chevronPagination";
import { useContext } from "react";
import { useFonts } from "expo-font";

export default function FifthStationEnglish() {
  const { newFontSize, fetchAddedFontSize } = useContext(FontSizeContext);
  const [fontsLoaded] = useFonts({
    "PTSans-Regular": require("../../../assets/fonts/PTSans-Regular.ttf"),
    "SourceSerif": require("../../../assets/fonts/SourceSerif4-SemiBold.ttf")
  })

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
      fontFamily: "SourceSerif"
    },
    txt: {
      fontSize: 17 + newFontSize,
      lineHeight: verticalScale(24 + newFontSize),
      marginBottom: 10,
      fontFamily: "PTSans-Regular",
    },
    leader: {
      fontWeight: "600",
      fontSize: 17 + newFontSize,
      lineHeight: verticalScale(24 + newFontSize),
      fontFamily: "PTSans-Regular",
      color: "purple"
    },
    lastTxt: {
      marginBottom: 10,
    },
    all: {
      fontWeight: "normal",
      fontFamily: "PTSans-Regular",
    },
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StyledStationsComponent>
        <View style={styles.container} onLayout={fetchAddedFontSize}>
          <GeneralComponentContainer />
          <View style={styles.flexContainer}>
            <Text className="text-black dark:text-white" style={styles.heading}>
              Fifth Station: Simon of Cyrene helps Jesus to carry his cross
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Jesus, the soldiers are becoming impatient. This is taking longer
              than they wanted it to. They are afraid you won't make it to the
              hill where you will be crucified. As you grow weaker, they grab a
              man out of the crowd and make him help carry your cross. He was
              just watching what was happening, but all of a sudden he is
              helping you carry your cross.
            </Text>
            <Image source={pic} style={globalStyles.image} />
            <Text className="text-black dark:text-white" style={styles.leader}>
              Leader:
              <Text className="text-black dark:text-white" style={styles.all}>
                We adore you, O Christ, and we praise you.
              </Text>
            </Text>
            <Text className="text-black dark:text-white" style={styles.leader}>
              All:
              <Text className="text-black dark:text-white" style={styles.all}>
                Because by your holy cross You have redeemed the world.
              </Text>
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Jesus, the soldiers are becoming impatient. This is taking longer
              than they wanted it to. They are afraid you won't make it to the
              hill where you will be crucified. As you grow weaker, they grab a
              man out of the crowd and make him help carry your cross. He was
              just watching what was happening, but all of a sudden he is
              helping you carry your cross.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              As a child, sometimes I see people who need my help. Sometimes I
              pretend not to hear when my parents call me. I disappear when I
              know others could use my help.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              As an adult, sometimes I try to do as little as I can and still
              get by. Others might need my help, but I ignore their needs. Even
              when I'm asked to help, I sometimes claim to be too busy.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              My Jesus, blest, thrice blest was he who aided Thee to bear the
              cross. Blest too shall I be if I aid Thee to bear the cross, by
              patiently bowing my neck to the crosses Thou shalt send me during
              life. My Jesus, give me grace to do so.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Our Father.... Hail Mary.... Glory Be to the Father....
            </Text>
            <Text className="text-black dark:text-white" style={styles.leader}>
              Leader: <Text style={styles.all} className="text-black dark:text-white">Jesus Christ Crucified.</Text>
            </Text>
            <Text className="text-black dark:text-white" style={styles.leader}>
              All: <Text style={styles.all} className="text-black dark:text-white">Have mercy on Us.</Text>
            </Text>
            <Text className="text-black dark:text-white" style={styles.leader}>
              Leader:{" "}
              <Text style={styles.all} className="text-black dark:text-white">
                May the souls of the faithful departed, through the mercy of
                God, Rest in peace.
              </Text>
            </Text>
            <Text className="text-black dark:text-white" style={[styles.leader, styles.lastTxt]}>
              All: <Text style={styles.all} className="text-black dark:text-white">Amen.</Text>
            </Text>
          </View>
        </View>
      </StyledStationsComponent>
      <RenderChevronNavigation
        to={"SixthStationEnglish"}
        from={"FourthStationEnglish"}
      />
    </>
  );
}

