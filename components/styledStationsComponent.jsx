import { View, Text, ScrollView } from "react-native";
import React from "react";
import TopBarComponent from "./Navigators/header/TopBarComponent";
import { verticalScale } from "react-native-size-matters";

const StyledStationsComponent = ({ children }) => {
  return (
    <View className="pt-6 bg-light dark:bg-black">
      <TopBarComponent shouldDisplayDropdownComponent={"no"} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: verticalScale(100) }}
        className="-mt-6"
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default StyledStationsComponent;
