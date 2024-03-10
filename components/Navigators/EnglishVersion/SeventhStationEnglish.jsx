import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import pic from "../images/station07.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";
import globalStyles from "../../../styles/styles";
import FontSizeContext from "../../../lib/FontSizeContext";
import { verticalScale } from "react-native-size-matters";
import { RenderChevronNavigation } from "../../chevronPagination";
import StyledStationsComponent from "../../styledStationsComponent";

export default function SeventhStationEnglish() {
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
              Seventh Station: Jesus falls the second time
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              This is the second time you have fallen on the road. As the cross
              grows heavier and heavier it becomes more difficult to get up. But
              you continue to struggle and try until you're up and walking
              again. You don't give up.
            </Text>
            <Image source={pic} style={{ ...globalStyles.image }} />
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
              This is the second time you have fallen on the road. As the cross
              grows heavier and heavier it becomes more difficult to get up. But
              you continue to struggle and try until you're up and walking
              again. You don't give up.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              As a child, sometimes things get me down. Others seem to find
              things easier to do or to learn. Each time I fail, I find it
              harder to keep trying.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              As an adult, sometimes I think I should know more than I do. I
              become impatient with myself and find it hard to believe in myself
              when I fail. It is easy to despair over small things, and
              sometimes I do.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Help me when things seem difficult for me. Even when it's hard,
              help me get up and keep trying as you did. Help me do my best
              without comparing myself with others.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              My Jesus, often have I sinned and often, by sin, beaten Thee to
              the ground beneath the cross. Help me to use the efficacious means
              of grace that I may never fall again.
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
      <RenderChevronNavigation
        to={"EighthStationEnglish"}
        from={"SixthStationEnglish"}
      />
    </>
  );
}
