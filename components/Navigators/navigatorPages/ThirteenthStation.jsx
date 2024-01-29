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
import pic from "../images/station13.jpg";
import GeneralComponentContainer from "../navigatorComponents/GeneralComponentContainer";

export default function ThirteenthStation() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <GeneralComponentContainer />
        <View style={styles.flexContainer}>
          <Text style={styles.heading}>
            Thirteenth Station: The body of Jesus is taken down from the cross
          </Text>
          <Text style={styles.txt}>
            Jesus, how brutally you were put to death. How gently your are taken
            from the cross. Your suffering and pain are ended, and you are put
            in the lap of your mother. The dirt and blood are wiped away. You
            are treated with love.
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
            Jesus, how brutally you were put to death. How gently your are taken
            from the cross. Your suffering and pain are ended, and you are put
            in the lap of your mother. The dirt and blood are wiped away. You
            are treated with love.
          </Text>
          <Text style={styles.txt}>
            As a child, sometimes I treat others better when they're sad or in
            pain. When somebody dies, I become very gentle and kind. I notice
            the good and kind things people say about those who have died.
          </Text>
          <Text style={styles.txt}>
            As an adult, I seem to be kinder when someone dies. If only I could
            learn to see the good things about them while they were alive. If
            only I would tell those around me how much I love them, while I
            still have the opportunity to do so.
          </Text>
          <Text style={styles.txt}>
            Help me look for the good in those around me, especially those I
            love the most. Help me live this day as if it were the last. Help me
            become a more gentle and loving person through my greater
            appreciation for those around me.
          </Text>
          <Text style={styles.txt}>
            O Mary, Mother most sorrowful, the sword of grief pierced thy soul
            when thou didst see Jesus lying lifeless on thy bosom; obtain for me
            hatred of sin because sin slew thy Son and wounded thine own heart,
            and grace to live a Christian life and save my soul.
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
