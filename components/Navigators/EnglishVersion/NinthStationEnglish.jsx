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
import pic from "../images/station09.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";

export default function NinthStationEnglish() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <GeneralComponentContainer />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            Ninth Station: Jesus falls a third time
          </Text>
          <Text style={styles.txt}>
            Jesus, your journey has been long. You fall again, beneath your
            cross. You know your journey is coming to an end. You struggle and
            struggle. You get up and keep going.
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
            Jesus, your journey has been long. You fall again, beneath your
            cross. You know your journey is coming to an end. You struggle and
            struggle. You get up and keep going.
          </Text>
          <Text style={styles.txt}>
            As a child, sometimes I fail time and time again. I find it hard to
            get along with my sisters and brothers, sometimes I'm not honest,
            sometimes I'm lazy. I'm tempted to stop trying. It's just too hard
            sometimes.
          </Text>
          <Text style={styles.txt}>
            As an adult, I often feel I should have conquered my weaknesses by
            now. I become discouraged when I'm confronted by the same problems
            over and over again. Sometimes I get weary. When I have health
            problems, I can become discouraged and depressed.
          </Text>
          <Text style={styles.txt}>
            Help me think of the cross you carried. Help me continue to hope
            that I can make the changes in my life I need to. You didn't give
            up. I can have the strength to get up again as well.
          </Text>
          <Text style={styles.txt}>
            My Jesus, by all the bitter woes Thou didst endure when for the
            third time the heavy cross bowed Thee to the earth, never, I beseech
            Thee, let me fall again into sin. Ah, my Jesus, rather let me die
            than ever offend Thee again.
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

NinthStationEnglish;
