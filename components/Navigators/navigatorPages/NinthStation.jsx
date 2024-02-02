import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NinthStationEnglish from "../EnglishVersion/NinthStationEnglish";
import NinethStationIgbo from "../IgboVersion/NinthStationIgbo";

const Tab = createBottomTabNavigator();

export default function NinthStation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="NinthStationEnglish" component={NinthStationEnglish} />
      <Tab.Screen name="NinethStationIgbo" component={NinethStationIgbo} />
    </Tab.Navigator>
  );
}
