import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SeventhStationEnglish from "../EnglishVersion/SeventhStationEnglish";
import SeventhStationIgbo from "../IgboVersion/SeventhStationIgbo";

const Tab = createBottomTabNavigator();

export default function SeventhStation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="SeventhStationEnglish"
        component={SeventhStationEnglish}
      />
      <Tab.Screen name="SeventhStationIgbo" component={SeventhStationIgbo} />
    </Tab.Navigator>
  );
}
