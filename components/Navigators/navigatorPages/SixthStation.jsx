import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SixthStationEnglish from "../EnglishVersion/SixthStationEnglish";
import SixthStationIgbo from "../IgboVersion/SixthStationIgbo";

const Tab = createBottomTabNavigator();

export default function SixthStation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="SixthStationEnglish" component={SixthStationEnglish} />
      <Tab.Screen name="FirstStationIgbo" component={SixthStationIgbo} />
    </Tab.Navigator>
  );
}
