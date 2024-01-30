import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TwelfthStationEnglish from "../EnglishVersion/TwelfthStationEnglish";
import TwelfthStationIgbo from "../IgboVersion/TwelfthStationIgbo";

const Tab = createBottomTabNavigator();

export default function TwelfthStation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TwelfthStationEnglish"
        component={TwelfthStationEnglish}
      />
      <Tab.Screen name="TwelfthStationIgbo" component={TwelfthStationIgbo} />
    </Tab.Navigator>
  );
}
