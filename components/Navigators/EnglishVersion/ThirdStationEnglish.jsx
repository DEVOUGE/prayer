import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React,{useContext} from "react";
import pic from "../images/station03.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";
import StyledStationsComponent from "../../styledStationsComponent";
import globalStyles from "../../../styles/styles";
import FontSizeContext from "../../../lib/FontSizeContext";
import { scale, verticalScale } from "react-native-size-matters";
import { RenderChevronNavigation } from "../../chevronPagination";



export default function ThirdStationEnglish() {
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
            Third Station: Jesus falls the first time
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            Jesus, the cross you have been carrying is very heavy. You are
            becoming weak and almost ready to faint, and you fall down. Nobody
            seems to want to help you. The soldiers are interested in getting
            home, so they yell at you and try to get you up and moving again.
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
            Jesus, the cross you have been carrying is very heavy. You are
            becoming weak and almost ready to faint, and you fall down. Nobody
            seems to want to help you. The soldiers are interested in getting
            home, so they yell at you and try to get you up and moving again.
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            As a child, sometimes I start to do something, but then get tired of
            it. I hurry to get finished and sometimes don't do my work well.
            Sometimes I don't pay attention to what I should be doing. When
            things get hard for me, sometimes I give up.
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            As an adult, I sometimes put things off. I give up too easily, and
            sometimes don't do my work as well as I know I can.
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            My Jesus, the heavy burden of my sins is on Thee, and bears Thee
            down beneath the cross. I loathe them, I detest them; I call on Thee
            to pardon them; may Thy grace aid me never more to commit them.
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
    <RenderChevronNavigation to={"FourthStationEnglish"} from={"SecondStationEnglish"}/>

    </>
  );
}

