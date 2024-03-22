import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import pic from "../images/station08.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";
import globalStyles from "../../../styles/styles";
import FontSizeContext from "../../../lib/FontSizeContext";
import { verticalScale } from "react-native-size-matters";
import { RenderChevronNavigation } from "../../chevronPagination";
import StyledStationsComponent from "../../styledStationsComponent";
import { useFonts } from "expo-font";

export default function EighthStationEnglish() {
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
      fontFamily: "SourceSerif",
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
      marginBottom: 10
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
              Eighth Station: Jesus meets the women of Jerusalem
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Jesus, as you carry your cross you see a group of women along the
              road. As you pass by you see they are sad. You stop to spend a
              moment with them, to offer them some encouragement. Although you
              have been abandoned by your friends and are in pain, you stop and
              try to help them.
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
              Jesus, as you carry your cross you see a group of women along the
              road. As you pass by you see they are sad. You stop to spend a
              moment with them, to offer them some encouragement. Although you
              have been abandoned by your friends and are in pain, you stop and
              try to help them.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              As a child, sometimes I think a lot about myself. I think about
              what I want and would like people to spend their lives pleasing
              me.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              As an adult, sometimes I act like a child. I become so absorbed in
              myself and what I'd like that I forget about the needs of others.
              I take them for granted, and often ignore their needs.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Help me think more about others. Help me remember that others have
              problems, too. Help me respond to them even when I'm busy or
              preoccupied with my own problems.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              My Jesus, Who didst comfort the pious women of Jerusalem who wept
              to see Thee bruised and torn, comfort my soul with Thy tender
              pity, for in Thy pity lies my trust. May my heart ever answer
              Thine.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Our Father.... Hail Mary.... Glory Be to the Father....
            </Text>
            <Text className="text-black dark:text-white" style={styles.leader}>
              Leader:{" "}
              <Text style={styles.all} className="text-black dark: text-white">
                Jesus Christ Crucified.
              </Text>
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
            <Text
              className="text-black dark:text-white"
              style={[styles.leader, styles.lastTxt]}
            >
              All: <Text style={styles.all} className="text-black dark:text-white">Amen.</Text>
            </Text>
          </View>
        </View>
      </StyledStationsComponent>
      <RenderChevronNavigation
        to={"NinthStationEnglish"}
        from={"SeventhStationEnglish"}
      />
    </>
  );
}
