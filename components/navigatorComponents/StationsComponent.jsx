import {
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { getData, removeData, storeData } from "../../lib/Storage";
import FontSizeContext from "../../lib/FontSizeContext";
import { scale, verticalScale } from "react-native-size-matters";

export default function StationsComponent({ name, no }) {
  const navigation = useNavigation();
  const [activeStation, setActiveStation] = useState(null);
  const { width } = useWindowDimensions();
  const { newFontSize, fetchAddedFontSize } = useContext(FontSizeContext);
  const [activeScreen, setActiveScreen] = useState(false);

  return (
    <View>
      <Pressable
        // style={styles.btn}
        onPress={async () => {
          // await removeData("activeStation");
          // await storeData("activeStation", name);
          setActiveScreen(!activeScreen);
          navigation.navigate(name);
        }}
        className={` focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 focus:outline-none`}
      >
        <Text
          className={`text-base font-medium capitalize dark:text-light`}
          style={{
            fontSize: 16 + newFontSize,
            lineHeight: verticalScale(16 + newFontSize),
            color: activeScreen ? "blue" : "black",
          }}
        >
          {name.slice(0, -14)}&nbsp; Station
        </Text>
      </Pressable>

      <View
        className={`self-center border-b-4 rounded-md mb-1`}
        style={{
          // borderBottomWidth: 3,
          borderBottomColor: "gray",
          width: scale(100 + newFontSize),
          // marginVertical: 2,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    // backgroundColor: "indigo",
    height: 50,
    width: 53,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
