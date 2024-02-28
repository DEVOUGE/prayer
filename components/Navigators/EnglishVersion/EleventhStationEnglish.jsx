import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import pic from "../images/station11.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";
import globalStyles from "../../../styles/styles";
import StyledStationsComponent from "../../styledStationsComponent";

export default function EleventhStationEnglish() {
  return (
    <StyledStationsComponent>
      <View style={styles.container}>
        <GeneralComponentContainer />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            Eleventh Station: Jesus is nailed to the cross
          </Text>
          <Text style={styles.txt}>
            You are stretched out on the cross you have carried so far. The
            soldiers take big nails and drive them into your hands and feet. You
            feel abandoned by the people you loved so much. People seem to have
            gone mad. You have done nothing but good, yet they drive nails
            through your hands and feet.
          </Text>
          <Image source={pic} style={{ ...globalStyles.image }} />
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
            You are stretched out on the cross you have carried so far. The
            soldiers take big nails and drive them into your hands and feet. You
            feel abandoned by the people you loved so much. People seem to have
            gone mad. You have done nothing but good, yet they drive nails
            through your hands and feet.
          </Text>
          <Text style={styles.txt}>
            As a child, sometimes I hurt others. Sometimes I join with friends
            and decide not to like another. We gang up against another and cause
            them hurt and pain. Sometimes I say or do hurtful things to my
            brothers and sisters. I can wonder what they'd think about
            themselves if they believed everything I told them about themselves.
          </Text>
          <Text style={styles.txt}>
            As and adult, sometimes I discriminate against others. Even without
            thinking, I judge others because of their color, intelligence,
            income level or name. I forget that I am to live as a brother or
            sister to all people. Sometimes I use harsh words when I speak to my
            children and family members. I can find it easy to look for
            something that isn't very important and make it very important.
          </Text>
          <Text style={styles.txt}>
            Help me look again at the people around me. Help me see the hurt and
            pain I have caused in others. Be with me to help me make amends for
            the harm I have done.
          </Text>
          <Text style={styles.txt}>
            My Jesus, by Thine agony when the cruel nails pierced Thy tender
            hands and feet and fixed them to the cross, make me crucify my flesh
            by Christian penance.
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
