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
import pic from "../images/station04.jpg";
import GeneralComponentContainer from "../navigatorComponents/GeneralComponentContainer";

export default function FourthStation() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <GeneralComponentContainer />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            Fourth Station: Jesus meets His Mother
          </Text>
          <Text style={styles.txt}>
            Jesus, you feel so alone with all those people yelling and screaming
            at you. You don't like the words they are saying about you, and you
            look for a friendly face in the crowd. You see your mother. She
            can't make the hurting stop, but it helps to see that she is on your
            side, that she is suffering with you. She does understand and care.
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
            Jesus, you feel so alone with all those people yelling and screaming
            at you. You don't like the words they are saying about you, and you
            look for a friendly face in the crowd. You see your mother. She
            can't make the hurting stop, but it helps to see that she is on your
            side, that she is suffering with you. She does understand and care.
          </Text>
          <Text style={styles.txt}>
            As a child, sometimes I feel like too many things are going on.
            Sometimes other kids pick on me and call me names. I need to look
            around me for a friendly face, and for the help I need. I need to
            share my troubles with those who truly care about me.
          </Text>
          <Text style={styles.txt}>
            As an adult I sometimes feel overwhelmed by many things. Life is so
            competitive, and I worry so much about my future and those who have
            some control over it. I need to remember that being an adult does
            not mean having to solve every problem all by myself. I need to look
            around me for a friendly face, for the help I need.
          </Text>
          <Text style={styles.txt}>
            Jesus most suffering, Mary Mother most sorrowful, if, by my sins, I
            caused you pain and anguish in the past, by God's assisting grace it
            shall be so no more; rather be you my love henceforth till death.
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
