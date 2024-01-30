import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FourteenthStationEnglish from "../EnglishVersion/FourteenthStationEnglish";
import FourteenthStationIgbo from "../IgboVersion/FourteenthStationIgbo";

const Tab = createBottomTabNavigator();

export default function FourteenthStation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FourteenthStationEnglish"
        component={FourteenthStationEnglish}
      />
      <Tab.Screen
        name="FourteenthStationIgbo"
        component={FourteenthStationIgbo}
      />
    </Tab.Navigator>
  );
}
