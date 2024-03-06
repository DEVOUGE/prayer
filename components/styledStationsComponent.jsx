import { View, Text, ScrollView } from "react-native";
import React from "react";
import TopBarComponent from "./Navigators/header/TopBarComponent";

const StyledStationsComponent = ({ children }) => {
  return (
    <View className="pt-6 bg-light dark:bg-black">
      <TopBarComponent shouldDisplayDropdownComponent={"no"} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 60 }}
        className="-mt-6"
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default StyledStationsComponent;
