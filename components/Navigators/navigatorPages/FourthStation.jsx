import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FourthStationEnglish from "../EnglishVersion/FourthStationEnglish";
import FourthStationIgbo from "../IgboVersion/FourthStationIgbo";

const Tab = createBottomTabNavigator();

export default function SecondStation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FourthStationEnglish"
        component={FourthStationEnglish}
      />
      <Tab.Screen name="FourthStationIgbo" component={FourthStationIgbo} />
    </Tab.Navigator>
  );
}
