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
import pic from "../images/station07.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";

export default function SeventhStationEnglish() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <GeneralComponentContainer />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            Seventh Station: Jesus falls the second time
          </Text>
          <Text style={styles.txt}>
            This is the second time you have fallen on the road. As the cross
            grows heavier and heavier it becomes more difficult to get up. But
            you continue to struggle and try until you're up and walking again.
            You don't give up.
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
            This is the second time you have fallen on the road. As the cross
            grows heavier and heavier it becomes more difficult to get up. But
            you continue to struggle and try until you're up and walking again.
            You don't give up.
          </Text>
          <Text style={styles.txt}>
            As a child, sometimes things get me down. Others seem to find things
            easier to do or to learn. Each time I fail, I find it harder to keep
            trying.
          </Text>
          <Text style={styles.txt}>
            As an adult, sometimes I think I should know more than I do. I
            become impatient with myself and find it hard to believe in myself
            when I fail. It is easy to despair over small things, and sometimes
            I do.
          </Text>
          <Text style={styles.txt}>
            Help me when things seem difficult for me. Even when it's hard, help
            me get up and keep trying as you did. Help me do my best without
            comparing myself with others.
          </Text>
          <Text style={styles.txt}>
            My Jesus, often have I sinned and often, by sin, beaten Thee to the
            ground beneath the cross. Help me to use the efficacious means of
            grace that I may never fall again.
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
