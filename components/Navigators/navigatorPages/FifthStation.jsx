import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FifthStationEnglish from "../EnglishVersion/FifthStationEnglish";
import FifthStationIgbo from "../IgboVersion/FifthStationIgbo";

const Tab = createBottomTabNavigator();

export default function FifthStation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FifthStationEnglish" component={FifthStationEnglish} />
      <Tab.Screen name="FifthStationIgbo" component={FifthStationIgbo} />
    </Tab.Navigator>
  );
}
