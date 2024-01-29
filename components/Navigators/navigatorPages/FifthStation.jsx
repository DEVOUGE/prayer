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
import pic from "../images/station05.jpg";
import GeneralComponentContainer from "../navigatorComponents/GeneralComponentContainer";

export default function FifthStation() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <GeneralComponentContainer />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            Fifth Station: Simon of Cyrene helps Jesus to carry his cross
          </Text>
          <Text style={styles.txt}>
            Jesus, the soldiers are becoming impatient. This is taking longer
            than they wanted it to. They are afraid you won't make it to the
            hill where you will be crucified. As you grow weaker, they grab a
            man out of the crowd and make him help carry your cross. He was just
            watching what was happening, but all of a sudden he is helping you
            carry your cross.
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
            Jesus, the soldiers are becoming impatient. This is taking longer
            than they wanted it to. They are afraid you won't make it to the
            hill where you will be crucified. As you grow weaker, they grab a
            man out of the crowd and make him help carry your cross. He was just
            watching what was happening, but all of a sudden he is helping you
            carry your cross.
          </Text>
          <Text style={styles.txt}>
            As a child, sometimes I see people who need my help. Sometimes I
            pretend not to hear when my parents call me. I disappear when I know
            others could use my help.
          </Text>
          <Text style={styles.txt}>
            As an adult, sometimes I try to do as little as I can and still get
            by. Others might need my help, but I ignore their needs. Even when
            I'm asked to help, I sometimes claim to be too busy.
          </Text>
          <Text style={styles.txt}>
            My Jesus, blest, thrice blest was he who aided Thee to bear the
            cross. Blest too shall I be if I aid Thee to bear the cross, by
            patiently bowing my neck to the crosses Thou shalt send me during
            life. My Jesus, give me grace to do so.
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
