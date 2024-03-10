import {
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import pic from "../images/station02.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";
import globalStyles from "../../../styles/styles";
import StyledStationsComponent from "../../styledStationsComponent";
import FontSizeContext from "../../../lib/FontSizeContext.js";
import { scale, verticalScale } from "react-native-size-matters";
import { ChevronPagination, RenderChevronNavigation } from "../../chevronPagination.js";

export default function SecondStationEnglish() {
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
              Second Station: Jesus carries His cross
            </Text>
            <Text style={styles.txt} className="text-black dark:text-white">
              Jesus, as you accepted your cross, you knew you would carry it to
              your death on Calvary. You knew it wouldn't be easy, but you
              accepted it and carried it just the same.
            </Text>
            <Image source={pic} style={globalStyles.image } />
            <Text style={styles.leader} className="text-black dark:text-white">
              Leader:
              <Text style={styles.all} className="text-black dark:text-white">
                We adore you, O Christ, and we praise you.
              </Text>
            </Text>
            <Text style={styles.leader} className="text-black dark:text-white">
              All:
              <Text style={styles.all} className="text-black dark:text-white">
                Because by your holy cross You have redeemed the world.
              </Text>
            </Text>
            <Text style={styles.txt} className="text-black dark:text-white">
              Jesus, as you accepted your cross, you knew you would carry it to
              your death on Calvary. You knew it wouldn't be easy, but you
              accepted it and carried it just the same.
            </Text>
            <Text style={styles.txt} className="text-black dark:text-white">
              As a child, sometimes I don't like the problems that come my way.
              Sometimes I try to get others to take care of them or solve them
              for me. Sometimes I become upset and crabby when I'm asked to do
              even the smallest thing to help others.
            </Text>
            <Text style={styles.txt} className="text-black dark:text-white">
              As an adult I sometimes feel like I'm not appreciated. Sometimes I
              feel as if I accept more responsibility that I need to. I can feel
              sorry for myself, even though the crosses others carry are much
              larger than my own. In my self-pity, I don't reach out to help.
            </Text>
            <Text style={styles.txt} className="text-black dark:text-white">
              My Jesus, Who by Thine own will didst take on Thee the most heavy
              cross I made for Thee by my sins, oh, make me feel their heavy
              weight, and weep for them ever while I live.
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
      <RenderChevronNavigation
        to={"ThirdStationEnglish"}
        from={"FirstStationEnglish"}
      />
    </>
  );

  
}
