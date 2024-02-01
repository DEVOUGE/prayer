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
import pic from "../images/station08.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";

export default function EighthStationEnglish() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <GeneralComponentContainer />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            Eighth Station: Jesus meets the women of Jerusalem
          </Text>
          <Text style={styles.txt}>
            Jesus, as you carry your cross you see a group of women along the
            road. As you pass by you see they are sad. You stop to spend a
            moment with them, to offer them some encouragement. Although you
            have been abandoned by your friends and are in pain, you stop and
            try to help them.
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
            Jesus, as you carry your cross you see a group of women along the
            road. As you pass by you see they are sad. You stop to spend a
            moment with them, to offer them some encouragement. Although you
            have been abandoned by your friends and are in pain, you stop and
            try to help them.
          </Text>
          <Text style={styles.txt}>
            As a child, sometimes I think a lot about myself. I think about what
            I want and would like people to spend their lives pleasing me.
          </Text>
          <Text style={styles.txt}>
            As an adult, sometimes I act like a child. I become so absorbed in
            myself and what I'd like that I forget about the needs of others. I
            take them for granted, and often ignore their needs.
          </Text>
          <Text style={styles.txt}>
            Help me think more about others. Help me remember that others have
            problems, too. Help me respond to them even when I'm busy or
            preoccupied with my own problems.
          </Text>
          <Text style={styles.txt}>
            My Jesus, Who didst comfort the pious women of Jerusalem who wept to
            see Thee bruised and torn, comfort my soul with Thy tender pity, for
            in Thy pity lies my trust. May my heart ever answer Thine.
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
