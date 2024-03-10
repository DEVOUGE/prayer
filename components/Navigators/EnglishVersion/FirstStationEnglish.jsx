import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import pic from "../images/station01.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";
import globalStyles from "../../../styles/styles";
import StyledStationsComponent from "../../styledStationsComponent";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { getData } from "../../../lib/Storage";
import { scale } from "react-native-size-matters";
import FontSizeContext from "../../../lib/FontSizeContext";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { ChevronPagination } from "../../chevronPagination";

export default function FirstStationEnglish({ route }) {
  const { colorScheme } = route.params;
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
          <GeneralComponentContainer />
          <View style={styles.flexContainer}>
            <Text style={styles.heading}>
              First Station: Jesus is condemned to death
            </Text>
            <Text style={styles.txt} className="text-black dark:text-white">
              Jesus, you stand all alone before Pilate. Nobody speaks up for
              you. Nobody helps defend you. You devoted your entire life to
              helping others, listening to the smallest ones, caring for those
              who were ignored by others. They don't seem to remember that as
              they prepare to put you to death.
            </Text>
            <Image source={pic} style={{ ...globalStyles.image }} />
            <Text style={styles.leader} className="text-black dark:text-white">
              Leader:
              <Text style={styles.all} className="text-black dark:text-white">
                We adore Thee, O Christ, and bless Thee.
              </Text>
            </Text>
            <Text style={styles.leader} className="text-black dark:text-white">
              All:
              <Text style={styles.all} className="text-black dark:text-white">
                Because by Thy holy cross Thou hast redeemed the world.
              </Text>
            </Text>
            <Text style={styles.txt} className="text-black dark:text-white">
              Jesus, you stand all alone before Pilate. Nobody speaks up for
              you. Nobody helps defend you. You devoted your entire life to
              helping others, listening to the smallest ones, caring for those
              who were ignored by others. They don't seem to remember that as
              they prepare to put you to death.
            </Text>
            <Text style={styles.txt} className="text-black dark:text-white">
              As a child, sometimes I feel alone. Sometimes I feel that others
              don't stand up for me and defend me when I am afraid. Sometimes I
              don't feel like I am treated fairly, especially if I am scolded or
              corrected.
            </Text>
            <Text style={styles.txt} className="text-black dark:text-white">
              As an adult, sometimes I feel abandoned and afraid as well.
              Sometimes I too, feel like I am treated unfairly or blamed for
              things unfairly. I have a hard time when people criticize me at
              home or at work.
            </Text>
            <Text style={styles.txt} className="text-black dark:text-white">
              Help me be grateful for what you did for me. Help me to accept
              criticism and unfairness as you did, and not complain. Help me
              pray for those who have hurt me.
            </Text>
            <Text style={styles.txt} className="text-black dark:text-white">
              My Jesus, often have I signed the death warrant by my sins; save
              me by Thy death from that eternal death which I have so often
              deserved.
            </Text>
            <Text style={styles.txt} className="text-black dark:text-white">
              Our Father.... Hail Mary.... Glory Be to the Father....
            </Text>
            <Text style={styles.txt} className="text-black dark:text-white">
              Leader: Jesus Christ Crucified.
            </Text>
            <Text style={styles.txt} className="text-black dark:text-white">
              All: Have mercy on Us.
            </Text>
            <Text style={styles.txt} className="text-black dark:text-white">
              Leader: May the souls of the faithful departed, through the mercy
              of God, Rest in peace.
            </Text>
            <Text style={styles.txt} className="text-black dark:text-white">
              All: Amen.
            </Text>
          </View>
        </View>
      </StyledStationsComponent>
      <View
        className="w-full bg-light dark:bg-black absolute bottom-0 left-0 right-0 items-center justify-center py-8"
        style={{
          // height: verticalScale(80), // Set the height of the fixed view
        }}
      >
        <ChevronPagination to={"SecondStationEnglish"} from={"none"} />
      </View>
    </>
  );
}
