import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
    View
} from "react-native";
import React from "react";
import pic from "../images/station01.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";

export default function FirstStationEnglish() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <GeneralComponentContainer />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            First Station: Jesus is condemned to death
          </Text>
          <Text style={styles.txt}>
            Jesus, you stand all alone before Pilate. Nobody speaks up for you.
            Nobody helps defend you. You devoted your entire life to helping
            others, listening to the smallest ones, caring for those who were
            ignored by others. They don't seem to remember that as they prepare
            to put you to death.
          </Text>
          <Image source={pic} />
          <Text style={styles.leader}>
            Leader:
            <Text style={styles.all}>
              We adore Thee, O Christ, and bless Thee.
            </Text>
          </Text>
          <Text style={styles.leader}>
            All:
            <Text style={styles.all}>
              Because by Thy holy cross Thou hast redeemed the world.
            </Text>
          </Text>
          <Text style={styles.txt}>
            Jesus, you stand all alone before Pilate. Nobody speaks up for you.
            Nobody helps defend you. You devoted your entire life to helping
            others, listening to the smallest ones, caring for those who were
            ignored by others. They don't seem to remember that as they prepare
            to put you to death.
          </Text>
          <Text style={styles.txt}>
            As a child, sometimes I feel alone. Sometimes I feel that others
            don't stand up for me and defend me when I am afraid. Sometimes I
            don't feel like I am treated fairly, especially if I am scolded or
            corrected.
          </Text>
          <Text style={styles.txt}>
            As an adult, sometimes I feel abandoned and afraid as well.
            Sometimes I too, feel like I am treated unfairly or blamed for
            things unfairly. I have a hard time when people criticize me at home
            or at work.
          </Text>
          <Text style={styles.txt}>
            Help me be grateful for what you did for me. Help me to accept
            criticism and unfairness as you did, and not complain. Help me pray
            for those who have hurt me.
          </Text>
          <Text style={styles.txt}>
            My Jesus, often have I signed the death warrant by my sins; save me
            by Thy death from that eternal death which I have so often deserved.
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
    marginBottom: 4,
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
