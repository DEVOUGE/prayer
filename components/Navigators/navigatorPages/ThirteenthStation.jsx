import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ThirteenthStationEnglish from "../EnglishVersion/ThirteenthStationEnglish";
import ThirteenthStationIgbo from "../IgboVersion/ThirteenthStationIgbo";

const Tab = createBottomTabNavigator();

export default function ThirteenthStation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ThirteenthStationEnglish"
        component={ThirteenthStationEnglish}
      />
      <Tab.Screen
        name="ThirteenthStationIgbo"
        component={ThirteenthStationIgbo}
      />
    </Tab.Navigator>
  );
}
