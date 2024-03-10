import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import pic from "../images/station10.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";
import globalStyles from "../../../styles/styles";
import FontSizeContext from "../../../lib/FontSizeContext";
import { verticalScale } from "react-native-size-matters";
import { RenderChevronNavigation } from "../../chevronPagination";
import StyledStationsComponent from "../../styledStationsComponent";

export default function TenthStationEnglish() {
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
            <Text className="text-black dark:text-white" style={styles.heading}>
              Tenth Station: Jesus clothes are taken away
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              The soldiers notice you have something of value. They remove your
              cloak and throw dice for it. Your wounds are torn open once again.
              Some of the people in the crowd make fun of you. They tease you
              and challenge you to perform a miracle for them to see. They're
              not aware that you'll perform the greatest miracle of all!
            </Text>
            <Image source={pic} style={globalStyles.image } />
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
              The soldiers notice you have something of value. They remove your
              cloak and throw dice for it. Your wounds are torn open once again.
              Some of the people in the crowd make fun of you. They tease you
              and challenge you to perform a miracle for them to see. They're
              not aware that you'll perform the greatest miracle of all!
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              As a child, sometimes I'm tempted to repeat stories I know are
              unclean and disrespectful. I sometimes try to act grown up by
              using crude and bad words.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              As an adult, sometimes I repeat stories that are disrespectful of
              others. I can entertain thoughts that are not clean. Sometimes I
              give the young people around me a bad example to follow.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Help me to keep myself pure and clean. Help me say things that
              build up the people around me. Help me overcome worldly desires
              that I may become more like Jesus. Help me set a good example for
              others to follow.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              My Jesus, stripped of Thy garments and drenched with gall, strip
              me of love for things of earth, and make me loathe all that savors
              of the world and sin.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Our Father.... Hail Mary.... Glory Be to the Father....
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Leader: Jesus Christ Crucified.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              All: Have mercy on Us.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Leader: May the souls of the faithful departed, through the mercy
              of God, Rest in peace.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              All: Amen.
            </Text>
          </View>
        </View>
      </StyledStationsComponent>
      <RenderChevronNavigation to={"EleventhStationEnglish"} from={"NinthStationEnglish"} />
    </>
  );
}
