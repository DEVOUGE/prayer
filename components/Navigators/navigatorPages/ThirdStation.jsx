import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ThirdStationEnglish from "../EnglishVersion/ThirdStationEnglish";
import ThirdStationIgbo from "../IgboVersion/ThirdStationIgbo";

const Tab = createBottomTabNavigator();

export default function ThirdStation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ThirdStationEnglish" component={ThirdStationEnglish} />
      <Tab.Screen name="ThirdStationIgbo" component={ThirdStationIgbo} />
    </Tab.Navigator>
  );
}
