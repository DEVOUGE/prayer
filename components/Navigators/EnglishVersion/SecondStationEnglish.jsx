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
import pic from "../images/station02.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";

export default function SecondStation() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <GeneralComponentContainer />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            Second Station: Jesus carries His cross
          </Text>
          <Text style={styles.txt}>
            Jesus, as you accepted your cross, you knew you would carry it to
            your death on Calvary. You knew it wouldn't be easy, but you
            accepted it and carried it just the same.
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
            Jesus, as you accepted your cross, you knew you would carry it to
            your death on Calvary. You knew it wouldn't be easy, but you
            accepted it and carried it just the same.
          </Text>
          <Text style={styles.txt}>
            As a child, sometimes I don't like the problems that come my way.
            Sometimes I try to get others to take care of them or solve them for
            me. Sometimes I become upset and crabby when I'm asked to do even
            the smallest thing to help others.
          </Text>
          <Text style={styles.txt}>
            As an adult I sometimes feel like I'm not appreciated. Sometimes I
            feel as if I accept more responsibility that I need to. I can feel
            sorry for myself, even though the crosses others carry are much
            larger than my own. In my self-pity, I don't reach out to help.
          </Text>
          <Text style={styles.txt}>
            My Jesus, Who by Thine own will didst take on Thee the most heavy
            cross I made for Thee by my sins, oh, make me feel their heavy
            weight, and weep for them ever while I live.
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
