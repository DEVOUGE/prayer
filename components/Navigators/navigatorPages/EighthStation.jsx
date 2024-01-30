import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EighthStationEnglish from "../EnglishVersion/EighthStationEnglish";
import EightStationIgbo from "../IgboVersion/EightStationIgbo";

const Tab = createBottomTabNavigator();

export default function EighthStation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="EighthStationEnglish"
        component={EighthStationEnglish}
      />
      <Tab.Screen name="EightStationIgbo" component={EightStationIgbo} />
    </Tab.Navigator>
  );
}
