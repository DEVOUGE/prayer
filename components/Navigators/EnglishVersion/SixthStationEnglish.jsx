import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, {useContext} from "react";
import pic from "../images/station06.jpg";
import GeneralComponentContainer from "../../navigatorComponents/GeneralComponentContainer";
import globalStyles from "../../../styles/styles";
import StyledStationsComponent from "../../styledStationsComponent";
import { verticalScale } from "react-native-size-matters";
import FontSizeContext from "../../../lib/FontSizeContext";
import { RenderChevronNavigation } from "../../chevronPagination";

export default function SixthStationEnglish() {
const { newFontSize, fetchAddedFontSize } = useContext(FontSizeContext);

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
    fontSize: 25 + newFontSize,
    lineHeight: verticalScale(25 + newFontSize),
    fontWeight: "500",
    textAlign: "center",
    color: "red",
    marginTop: verticalScale(newFontSize),
  },
  txt: {
    fontSize: 17 + newFontSize,
    lineHeight: verticalScale(24 + newFontSize),
    marginBottom: 10,
  },
  leader: {
    fontWeight: "600",
    fontSize: 17 + newFontSize,
    lineHeight: verticalScale(24 + newFontSize),
  },
  all: {
    fontWeight: "normal",
  },
});

  return (
    <>

    <StyledStationsComponent>
      <View style={styles.container} onLayout={fetchAddedFontSize}>
        <GeneralComponentContainer />
        <View style={styles.flexContainer}>
          <Text className="text-black dark:text-white" style={styles.heading}>
            Sixth Station: Veronica wipes the face of Jesus
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            Jesus, suddenly a woman comes out of the crowd. Her name is
            Veronica. You can see how she cares for you as she takes a cloth and
            begins to wipe the blood and sweat from your face. She can't do
            much, but she offers what little help she can.
          </Text>
          <Image source={pic} style={globalStyles.image } />
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
            Jesus, suddenly a woman comes out of the crowd. Her name is
            Veronica. You can see how she cares for you as she takes a cloth and
            begins to wipe the blood and sweat from your face. She can't do
            much, but she offers what little help she can.
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            As a child, sometimes I know someone could use a little help and
            understanding. They may be picked on or teased by others, or just
            sad or lonely. Sometimes I feel bad that others don't step in to
            help, but I don't help either.
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            As an adult, I notice the needs around me. Sometimes my own family
            members crave my attention, and I don't even seem to notice.
            Sometimes a co-worker, friend, or family member could use help or
            understanding, but I don't reach out to help lest I be criticized,
            or that they demand more of me than I'd like to give.
          </Text>
          <Text className="text-black dark:text-white" style={styles.txt}>
            My tender Jesus, Who didst deign to print Thy sacred face upon the
            cloth with which Veronica wiped the sweat from off Thy brow, print
            in my soul deep, I pray Thee, the lasting memory of Thy bitter
            pains.
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
      </View>
      </StyledStationsComponent>
      <RenderChevronNavigation to={"SeventhStationEnglish"} from={"FifthStationEnglish"} />
    </>
  );
}