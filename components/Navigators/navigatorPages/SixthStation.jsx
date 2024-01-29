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
import pic from "../images/station06.jpg";
import GeneralComponentContainer from "../navigatorComponents/GeneralComponentContainer";

export default function SixthStation() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <GeneralComponentContainer />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            Sixth Station: Veronica wipes the face of Jesus
          </Text>
          <Text style={styles.txt}>
            Jesus, suddenly a woman comes out of the crowd. Her name is
            Veronica. You can see how she cares for you as she takes a cloth and
            begins to wipe the blood and sweat from your face. She can't do
            much, but she offers what little help she can.
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
            Jesus, suddenly a woman comes out of the crowd. Her name is
            Veronica. You can see how she cares for you as she takes a cloth and
            begins to wipe the blood and sweat from your face. She can't do
            much, but she offers what little help she can.
          </Text>
          <Text style={styles.txt}>
            As a child, sometimes I know someone could use a little help and
            understanding. They may be picked on or teased by others, or just
            sad or lonely. Sometimes I feel bad that others don't step in to
            help, but I don't help either.
          </Text>
          <Text style={styles.txt}>
            As an adult, I notice the needs around me. Sometimes my own family
            members crave my attention, and I don't even seem to notice.
            Sometimes a co-worker, friend, or family member could use help or
            understanding, but I don't reach out to help lest I be criticized,
            or that they demand more of me than I'd like to give.
          </Text>
          <Text style={styles.txt}>
            My tender Jesus, Who didst deign to print Thy sacred face upon the
            cloth with which Veronica wiped the sweat from off Thy brow, print
            in my soul deep, I pray Thee, the lasting memory of Thy bitter
            pains.
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
