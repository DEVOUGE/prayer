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
import pic from "../images/station12.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";

export default function TwelfthStationEnglish() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <GeneralComponentContainer />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            Twelfth Station: Jesus dies on the cross
          </Text>
          <Text style={styles.txt}>
            As Jesus hung on the cross, he forgave the soldiers who had
            crucified him, and prayed for his mother and friends. Jesus wanted
            all of us to be able to live forever with God, so he gave all he had
            for us.
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
            As Jesus hung on the cross, he forgave the soldiers who had
            crucified him, and prayed for his mother and friends. Jesus wanted
            all of us to be able to live forever with God, so he gave all he had
            for us.
          </Text>
          <Text style={styles.txt}>
            Jesus, let me take a few moments now to consider your love for me.
            Help me thank you for your willingness to go to your death for me.
            Help me express my love for you!
          </Text>
          <Text style={styles.txt}>
            My Jesus, three hours didst Thou hang in agony, and then die for me;
            let me die before I sin, and if I live, live for Thy love and
            faithful service.
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
