import {
  Image,
  Platform,
  StatusBar,
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
import { scale, verticalScale } from "react-native-size-matters";
import { RenderChevronNavigation } from "../../chevronPagination";

export default function FourthStationEnglish() {
  const { newFontSize } = useContext(FontSizeContext);
  
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
      marginTop:verticalScale(newFontSize)

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
      <View style={styles.container}>
        <GeneralComponentContainer />
        <View style={styles.flexContainer}>
          <Text className="text-black dark:text-white" style={styles.heading}>
            Fourth Station: Jesus meets His Mother
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            Jesus, you feel so alone with all those people yelling and screaming
            at you. You don't like the words they are saying about you, and you
            look for a friendly face in the crowd. You see your mother. She
            can't make the hurting stop, but it helps to see that she is on your
            side, that she is suffering with you. She does understand and care.
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
            Jesus, you feel so alone with all those people yelling and screaming
            at you. You don't like the words they are saying about you, and you
            look for a friendly face in the crowd. You see your mother. She
            can't make the hurting stop, but it helps to see that she is on your
            side, that she is suffering with you. She does understand and care.
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            As a child, sometimes I feel like too many things are going on.
            Sometimes other kids pick on me and call me names. I need to look
            around me for a friendly face, and for the help I need. I need to
            share my troubles with those who truly care about me.
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            As an adult I sometimes feel overwhelmed by many things. Life is so
            competitive, and I worry so much about my future and those who have
            some control over it. I need to remember that being an adult does
            not mean having to solve every problem all by myself. I need to look
            around me for a friendly face, for the help I need.
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            Jesus most suffering, Mary Mother most sorrowful, if, by my sins, I
            caused you pain and anguish in the past, by God's assisting grace it
            shall be so no more; rather be you my love henceforth till death.
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            Our Father.... Hail Mary.... Glory Be to the Father....
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>Leader: Jesus Christ Crucified.</Text>
          <Text className="text-black dark:text-white" style={styles.txt}>All: Have mercy on Us.</Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            Leader: May the souls of the faithful departed, through the mercy of
            God, Rest in peace.
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>All: Amen.</Text>
        </View>
      </View>
    </StyledStationsComponent>
    <RenderChevronNavigation to={"FifthStationEnglish"} from={"ThirdStationEnglish"}/>

    </>
  );
}
