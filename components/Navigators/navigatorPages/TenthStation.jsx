import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TenthStationEnglish from "../EnglishVersion/TenthStationEnglish";
import TenthStationIgbo from "../IgboVersion/TenthStationIgbo";

const Tab = createBottomTabNavigator();

export default function TenthStation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TenthStationEnglish" component={TenthStationEnglish} />
      <Tab.Screen name="TenthStationIgbo" component={TenthStationIgbo} />
    </Tab.Navigator>
  );
}
