import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import pic from "../images/station03.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";
import StyledStationsComponent from "../../styledStationsComponent";
import globalStyles from "../../../styles/styles";

export default function ThirdStationEnglish() {
  return (
    <StyledStationsComponent>
        <View style={styles.container}>
          <GeneralComponentContainer />
          <View style={styles.flexContainer}>
            <Text style={styles.heading}>
              Third Station: Jesus falls the first time
            </Text>
            <Text style={styles.txt}>
              Jesus, the cross you have been carrying is very heavy. You are
              becoming weak and almost ready to faint, and you fall down. Nobody
              seems to want to help you. The soldiers are interested in getting
              home, so they yell at you and try to get you up and moving again.
            </Text>
            <Image source={pic} style={globalStyles.image} />
            <Text style={styles.leader}>
              Leader:
              <Text style={styles.all}>
                We adore you, O Christ, and we praise you.
              </Text>
            </Text>
            <Text style={styles.leader}>
              All:
              <Text style={styles.all}>
                Because by your holy cross You have redeemed the world.
              </Text>
            </Text>
            <Text style={styles.txt}>
              Jesus, the cross you have been carrying is very heavy. You are
              becoming weak and almost ready to faint, and you fall down. Nobody
              seems to want to help you. The soldiers are interested in getting
              home, so they yell at you and try to get you up and moving again.
            </Text>
            <Text style={styles.txt}>
              As a child, sometimes I start to do something, but then get tired
              of it. I hurry to get finished and sometimes don't do my work
              well. Sometimes I don't pay attention to what I should be doing.
              When things get hard for me, sometimes I give up.
            </Text>
            <Text style={styles.txt}>
              As an adult, I sometimes put things off. I give up too easily, and
              sometimes don't do my work as well as I know I can.
            </Text>
            <Text style={styles.txt}>
              My Jesus, the heavy burden of my sins is on Thee, and bears Thee
              down beneath the cross. I loathe them, I detest them; I call on
              Thee to pardon them; may Thy grace aid me never more to commit
              them.
            </Text>
            <Text style={styles.txt}>
              Our Father.... Hail Mary.... Glory Be to the Father....
            </Text>
            <Text style={styles.txt}>Leader: Jesus Christ Crucified.</Text>
            <Text style={styles.txt}>All: Have mercy on Us.</Text>
            <Text style={styles.txt}>
              Leader: May the souls of the faithful departed, through the mercy
              of God, Rest in peace.
            </Text>
            <Text style={styles.txt}>All: Amen.</Text>
          </View>
          <StatusBar translucent={true} />
          <GeneralComponentContainer />
        </View>
    </StyledStationsComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 45 : 0,
    marginHorizontal: 12,
    marginBottom: 15,
  },
  flexContainer: {
    display: "flex",
    rowGap: 15,
  },
  heading: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    color: "indigo",
  },
  txt: {
    fontSize: 17,
    lineHeight: 24,
  },
  leader: {
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 24,
  },
  all: {
    fontWeight: "normal",
    // paddingLeft: 10,
  },
});
