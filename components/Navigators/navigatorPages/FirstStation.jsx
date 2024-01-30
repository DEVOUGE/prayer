import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FirstStationEnglish from "../EnglishVersion/FirstStationEnglish";
import FirstStationIgbo from "../IgboVersion/FirstStationIgbo";

const Tab = createBottomTabNavigator();

export default function FirstStation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FirstStationEnglish" component={FirstStationEnglish} />
      <Tab.Screen name="FirstStationIgbo" component={FirstStationIgbo} />
    </Tab.Navigator>
  );
}

