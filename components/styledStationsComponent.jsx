import { View, Text, ScrollView } from "react-native";
import React from "react";
import TopBarComponent from "./Navigators/header/TopBarComponent";

const StyledStationsComponent = ({ children }) => {
  return (
    <View className="pt-6">
      <TopBarComponent shouldDisplayDropdownComponent={"no"} />
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        {children}
      </ScrollView>
    </View>
  );
};

export default StyledStationsComponent;