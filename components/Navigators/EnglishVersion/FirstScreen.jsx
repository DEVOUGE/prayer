import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import pic from "../images/act_of_contrition.gif";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";
import TopBarComponent from "../header/TopBarComponent";

export default function FirstScreen() {
  return (
    <View style={styles.stickyHeader}>
      <TopBarComponent shouldDisplayDropdownComponent={"yes"} />
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <GeneralComponentContainer />
          <View>
            <Text style={styles.title}>Opening Prayer</Text>
            <Image style={styles.imgs} source={pic} />
            <Text style={styles.all}>ALL:</Text>
            <Text style={styles.txt}>My Lord, Jesus Christ, </Text>
            <Text style={styles.txt}>
              You have made this journey to die for me with unspeakable love;{" "}
            </Text>
            <Text style={styles.txt}>
              and I have so many times ungratefully abandoned You. | But now I
              love You with all my heart;
            </Text>
            <Text style={styles.txt}>
              and, because I love You, I am sincerely sorry for ever having
              offended You.
            </Text>
            <Text style={styles.txt}>
              Pardon me, my God, and permit me to accompany You on this journey.
            </Text>
            <Text style={styles.txt}>You go to die for love of me; </Text>
            <Text style={styles.txt}>
              I want, my beloved Redeemer, to die for love of You.{" "}
            </Text>
            <Text style={styles.txt}>
              My Jesus, I will live and die always united to You.
            </Text>
            <View style={styles.flexTxt}>
              <Text style={styles.bottomTxt}>
                At the cross her station keeping{" "}
              </Text>
              <Text style={styles.bottomTxt}>
                Stood the mournful Mother weeping{" "}
              </Text>
              <Text style={[styles.bottomTxt, styles.lastTxt]}>
                Close to Jesus to the last
              </Text>
            </View>
            <GeneralComponentContainer />
          </View>
        </View>

        <StatusBar translucent={true} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    scroll: {
      marginTop: 20,
},
stickyHeader: {
        paddingTop: Platform.OS === "android" ? 45 : 0,
    marginBottom: 50,
    },
  container: {
    marginHorizontal: 7,
    paddingHorizontal: 8,
    zIndex: -100,
    // marginTop: 65,
  },
  txt: {
    fontSize: 18,
    lineHeight: 25,
    fontStyle: "italic",
  },
  all: {
    fontSize: 20,
    fontWeight: "500",
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 7,
    color: "indigo",
  },
  imgs: {
    justifyContent: "center",
    alignSelf: "center",
  },
  subTxt: {
    fontSize: 22,
  },
  bottomTxt: {
    lineHeight: 23,
    color: "#696969",
    fontSize: 15,
  },
  lastTxt: {
    marginBottom: 10,
  },
});
