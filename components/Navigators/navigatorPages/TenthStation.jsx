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
import pic from "../images/station10.jpg";
import GeneralComponentContainer from "../navigatorComponents/GeneralComponentContainer";

export default function TenthStation() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <GeneralComponentContainer />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            Tenth Station: Jesus clothes are taken away
          </Text>
          <Text style={styles.txt}>
            The soldiers notice you have something of value. They remove your
            cloak and throw dice for it. Your wounds are torn open once again.
            Some of the people in the crowd make fun of you. They tease you and
            challenge you to perform a miracle for them to see. They're not
            aware that you'll perform the greatest miracle of all!
          </Text>
          <Image source={pic} />
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
            The soldiers notice you have something of value. They remove your
            cloak and throw dice for it. Your wounds are torn open once again.
            Some of the people in the crowd make fun of you. They tease you and
            challenge you to perform a miracle for them to see. They're not
            aware that you'll perform the greatest miracle of all!
          </Text>
          <Text style={styles.txt}>
            As a child, sometimes I'm tempted to repeat stories I know are
            unclean and disrespectful. I sometimes try to act grown up by using
            crude and bad words.
          </Text>
          <Text style={styles.txt}>
            As an adult, sometimes I repeat stories that are disrespectful of
            others. I can entertain thoughts that are not clean. Sometimes I
            give the young people around me a bad example to follow.
          </Text>
          <Text style={styles.txt}>
            Help me to keep myself pure and clean. Help me say things that build
            up the people around me. Help me overcome worldly desires that I may
            become more like Jesus. Help me set a good example for others to
            follow.
          </Text>
          <Text style={styles.txt}>
            My Jesus, stripped of Thy garments and drenched with gall, strip me
            of love for things of earth, and make me loathe all that savors of
            the world and sin.
          </Text>
          <Text style={styles.txt}>
            Our Father.... Hail Mary.... Glory Be to the Father....
          </Text>
          <Text style={styles.txt}>Leader: Jesus Christ Crucified.</Text>
          <Text style={styles.txt}>All: Have mercy on Us.</Text>
          <Text style={styles.txt}>
            Leader: May the souls of the faithful departed, through the mercy of
            God, Rest in peace.
          </Text>
          <Text style={styles.txt}>All: Amen.</Text>
        </View>
        <StatusBar translucent={true} />
        <GeneralComponentContainer />
      </View>
    </ScrollView>
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
    color: "red",
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
