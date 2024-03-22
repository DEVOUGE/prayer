import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import pic from "../images/station14.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";
import globalStyles from "../../../styles/styles";
import FontSizeContext from "../../../lib/FontSizeContext";
import { verticalScale } from "react-native-size-matters";
import { ChevronPaginationLast } from "../../chevronPagination";
import StyledStationsComponent from "../../styledStationsComponent";
import { useFonts } from "expo-font";

export default function FourteenthStationEnglish() {
  const { newFontSize, fetchAddedFontSize } = useContext(FontSizeContext);
  const [fontLoaded] = useFonts({
    "PTSans-Regular": require("../../../assets/fonts/PTSans-Regular.ttf"),
    "Sourceserif": require("../../../assets/fonts/SourceSerif4-SemiBold.ttf")
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
      fontFamily: "PTSans-Regular",
    },
    txt: {
      fontSize: 17 + newFontSize,
      lineHeight: verticalScale(24 + newFontSize),
      marginBottom: 10,
      fontFamily: "PTSans-Regular"
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
      fontFamily: "PTSans-Regular"
    },
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <>
      <StyledStationsComponent>
        <View style={styles.container} onLayout={fetchAddedFontSize}>
          <GeneralComponentContainer />
          <View style={styles.flexContainer}>
            <Text className="text-black dark:text-white" style={styles.heading}>
              Fourteenth Station: Jesus is laid in the tomb
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Jesus, your body is prepared for burial. Joseph gave you his own
              tomb. He laid your body there and rolled a large stone in front of
              it, then went home. What a sad day it has been for so many people.
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
              Jesus, your body is prepared for burial. Joseph gave you his own
              tomb. He laid your body there and rolled a large stone in front of
              it, then went home. What a sad day it has been for so many people.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              As a child, sometimes I try to keep everything for myself. I find
              it hard to share my things with my brothers or sisters and with my
              friends.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              As an adult, I can be selfish too. I can accumulate things and
              keep them for myself. I try to make sure I have what I want before
              I share what I have with anybody else.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Help me think of Joseph of Arimathea, who risked his own life as
              he accepted Jesus' body for burial. Help me think of how Joseph
              loved Jesus so much that he gave him his own tomb.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              My Jesus, beside Thy body in the tomb I, too, would lie dead; but
              if I live, let it be for Thee, so as one day to enjoy with Thee in
              heaven the fruits of Thy passion and Thy bitter death.
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
              Leader: <Text style={styles.all} className="text-black dark:text-white">May the souls of the faithful departed, through the mercy
              of God, Rest in peace.</Text>
            </Text>
            <Text className="text-black dark:text-white" style={[styles.leader, styles.lastTxt]}>
              All: <Text style={styles.all} className="text-black dark:text-white">Amen.</Text>
            </Text>
          </View>
        </View>
      </StyledStationsComponent>
      <View
        className="w-full bg-light dark:bg-black absolute bottom-0 left-0 right-0 items-center justify-center py-8"
      >
        <ChevronPaginationLast  to={"none"} from={"ThirteenthStationEnglish"}/>
      </View>
    </>
  );
}
