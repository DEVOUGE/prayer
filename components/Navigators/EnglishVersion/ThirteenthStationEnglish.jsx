import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, {useContext} from "react";
import pic from "../images/station13.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";
import globalStyles from "../../../styles/styles";
import FontSizeContext from "../../../lib/FontSizeContext";
import { verticalScale } from "react-native-size-matters";
import { RenderChevronNavigation } from "../../chevronPagination";
import StyledStationsComponent from "../../styledStationsComponent";

export default function ThirteenthStationEnglish() {
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
              Thirteenth Station: The body of Jesus is taken down from the cross
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Jesus, how brutally you were put to death. How gently your are
              taken from the cross. Your suffering and pain are ended, and you
              are put in the lap of your mother. The dirt and blood are wiped
              away. You are treated with love.
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
              Jesus, how brutally you were put to death. How gently your are
              taken from the cross. Your suffering and pain are ended, and you
              are put in the lap of your mother. The dirt and blood are wiped
              away. You are treated with love.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              As a child, sometimes I treat others better when they're sad or in
              pain. When somebody dies, I become very gentle and kind. I notice
              the good and kind things people say about those who have died.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              As an adult, I seem to be kinder when someone dies. If only I
              could learn to see the good things about them while they were
              alive. If only I would tell those around me how much I love them,
              while I still have the opportunity to do so.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Help me look for the good in those around me, especially those I
              love the most. Help me live this day as if it were the last. Help
              me become a more gentle and loving person through my greater
              appreciation for those around me.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              O Mary, Mother most sorrowful, the sword of grief pierced thy soul
              when thou didst see Jesus lying lifeless on thy bosom; obtain for
              me hatred of sin because sin slew thy Son and wounded thine own
              heart, and grace to live a Christian life and save my soul.
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
      <RenderChevronNavigation to={"FourteenthStationEnglish"} from={"TwelfthStationEnglish"} />
    </>
  );
}
