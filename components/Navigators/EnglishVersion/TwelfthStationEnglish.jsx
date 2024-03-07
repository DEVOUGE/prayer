import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import pic from "../images/station12.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";
import globalStyles from "../../../styles/styles";
import StyledStationsComponent from "../../styledStationsComponent";

export default function TwelfthStationEnglish() {
  return (
    <StyledStationsComponent>
      <View style={styles.container}>
        <GeneralComponentContainer />
        <View style={styles.flexContainer}>
          <Text className="text-black dark:text-white" style={styles.heading}>
            Twelfth Station: Jesus dies on the cross
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            As Jesus hung on the cross, he forgave the soldiers who had
            crucified him, and prayed for his mother and friends. Jesus wanted
            all of us to be able to live forever with God, so he gave all he had
            for us.
          </Text>
          <Image source={pic} style={{ ...globalStyles.image }} />
          <Text className="text-black dark:text-white" style={styles.leader}>
            Leader:
            <Text className="text-black dark:text-white" style={styles.all}>
              We adore you, O Christ, and we praise you.
            </Text>
          </Text>
          <Text className="text-black dark:text-white" style={styles.leader}>
            All:
            <Text className="text-black dark:text-white" style={styles.all}>
              Because by your holy cross You have redeemed the world.
            </Text>
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            As Jesus hung on the cross, he forgave the soldiers who had
            crucified him, and prayed for his mother and friends. Jesus wanted
            all of us to be able to live forever with God, so he gave all he had
            for us.
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            Jesus, let me take a few moments now to consider your love for me.
            Help me thank you for your willingness to go to your death for me.
            Help me express my love for you!
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            My Jesus, three hours didst Thou hang in agony, and then die for me;
            let me die before I sin, and if I live, live for Thy love and
            faithful service.
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            Our Father.... Hail Mary.... Glory Be to the Father....
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>Leader: Jesus Christ Crucified.</Text>
          <Text className="text-black dark:text-white" style={styles.txt}>All: Have mercy on Us.</Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            Leader: May the souls of the faithful departed, through the mercy of
            God, Rest in peace.
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>All: Amen.</Text>
        </View>
        <StatusBar translucent={true} />
        <GeneralComponentContainer />
      </View>
    </StyledStationsComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 10 : 0,
    marginHorizontal: 12,
    marginBottom: 23,
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
    marginBottom: 10,
  },
  leader: {
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 24,
  },
  all: {
    fontWeight: "normal",
  },
});
