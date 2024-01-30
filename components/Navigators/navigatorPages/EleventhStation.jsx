import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EleventhStationEnglish from "../EnglishVersion/EleventhStationEnglish";
import EleventhStationIgbo from "../IgboVersion/EleventhStationIgbo";


const Tab = createBottomTabNavigator();

export default function EleventhStation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="EleventhStationEnglish"
        component={EleventhStationEnglish}
      />
      <Tab.Screen name="EleventhStationIgbo" component={EleventhStationIgbo} />
    </Tab.Navigator>
  );
}
