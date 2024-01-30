import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SecondStationEnglish from "../EnglishVersion/SecondStationEnglish";
import SecondStationIgbo from "../IgboVersion/SecondStationIgbo";

const Tab = createBottomTabNavigator();

export default function SecondStation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="EnglishStationEnglish" component={SecondStationEnglish} />
      <Tab.Screen name="FirstStationIgbo" component={SecondStationIgbo} />
    </Tab.Navigator>
  );
}
