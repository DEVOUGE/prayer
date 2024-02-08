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
import pic from "../images/station14.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";

export default function FourteenthStationEnglish() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <GeneralComponentContainer />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            Fourteenth Station: Jesus is laid in the tomb
          </Text>
          <Text style={styles.txt}>
            Jesus, your body is prepared for burial. Joseph gave you his own
            tomb. He laid your body there and rolled a large stone in front of
            it, then went home. What a sad day it has been for so many people.
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
            Jesus, your body is prepared for burial. Joseph gave you his own
            tomb. He laid your body there and rolled a large stone in front of
            it, then went home. What a sad day it has been for so many people.
          </Text>
          <Text style={styles.txt}>
            As a child, sometimes I try to keep everything for myself. I find it
            hard to share my things with my brothers or sisters and with my
            friends.
          </Text>
          <Text style={styles.txt}>
            As an adult, I can be selfish too. I can accumulate things and keep
            them for myself. I try to make sure I have what I want before I
            share what I have with anybody else.
          </Text>
          <Text style={styles.txt}>
            Help me think of Joseph of Arimathea, who risked his own life as he
            accepted Jesus' body for burial. Help me think of how Joseph loved
            Jesus so much that he gave him his own tomb.
          </Text>
          <Text style={styles.txt}>
            My Jesus, beside Thy body in the tomb I, too, would lie dead; but if
            I live, let it be for Thee, so as one day to enjoy with Thee in
            heaven the fruits of Thy passion and Thy bitter death.
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
