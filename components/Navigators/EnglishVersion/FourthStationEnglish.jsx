import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {useContext} from "react";
import pic from "../images/station04.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";
import StyledStationsComponent from "../../styledStationsComponent";
import globalStyles from "../../../styles/styles";
import FontSizeContext from "../../../lib/FontSizeContext";
import { verticalScale } from "react-native-size-matters";
import { RenderChevronNavigation } from "../../chevronPagination";
import { useFonts } from "expo-font";

export default function FourthStationEnglish() {
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
      fontFamily: "PTSans-Regular"
    },
    leader: {
      fontWeight: "600",
      fontSize: 17 + newFontSize,
      lineHeight: verticalScale(24 + newFontSize),
      fontFamily: "PTSans-Regular",
      color: "purple",
    },
    lastTxt: {
      marginBottom: 10,
    },
    all: {
      fontWeight: "normal",
      fontFamily: "PTSans-Regular"
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
              Fourth Station: Jesus meets His Mother
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Jesus, you feel so alone with all those people yelling and
              screaming at you. You don't like the words they are saying about
              you, and you look for a friendly face in the crowd. You see your
              mother. She can't make the hurting stop, but it helps to see that
              she is on your side, that she is suffering with you. She does
              understand and care.
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
              Jesus, you feel so alone with all those people yelling and
              screaming at you. You don't like the words they are saying about
              you, and you look for a friendly face in the crowd. You see your
              mother. She can't make the hurting stop, but it helps to see that
              she is on your side, that she is suffering with you. She does
              understand and care.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              As a child, sometimes I feel like too many things are going on.
              Sometimes other kids pick on me and call me names. I need to look
              around me for a friendly face, and for the help I need. I need to
              share my troubles with those who truly care about me.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              As an adult I sometimes feel overwhelmed by many things. Life is
              so competitive, and I worry so much about my future and those who
              have some control over it. I need to remember that being an adult
              does not mean having to solve every problem all by myself. I need
              to look around me for a friendly face, for the help I need.
            </Text>
            <Text className="text-black dark:text-white" style={styles.txt}>
              Jesus most suffering, Mary Mother most sorrowful, if, by my sins,
              I caused you pain and anguish in the past, by God's assisting
              grace it shall be so no more; rather be you my love henceforth
              till death.
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
        to={"FifthStationEnglish"}
        from={"ThirdStationEnglish"}
      />
    </>
  );
}
