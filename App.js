import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import NavigationsComponent from "./components/Navigators/NavigationsComponent";
import Delet from "./components/Delet";
import BodyComponent from "./components/BodyComponent";
import FirstStation from "./components/Navigators/navigatorPages/FirstStation";
import SecondStation from "./components/Navigators/navigatorPages/SecondStation";
import ThirdStation from "./components/Navigators/navigatorPages/ThirdStation";
import FourthStation from "./components/Navigators/navigatorPages/FourthStation";
import FifthStation from "./components/Navigators/navigatorPages/FifthStation";
import SixthStation from "./components/Navigators/navigatorPages/SixthStation";
import SeventhStation from "./components/Navigators/navigatorPages/SeventhStation";
import EighthStation from "./components/Navigators/navigatorPages/EighthStation";
import NinthStation from "./components/Navigators/navigatorPages/NinthStation";
import TenthStation from "./components/Navigators/navigatorPages/TenthStation";
import EleventhStation from "./components/Navigators/navigatorPages/EleventhStation";
import TwelfthStation from "./components/Navigators/navigatorPages/TwelfthStation";
import ThirteenthStation from "./components/Navigators/navigatorPages/ThirteenthStation";
import FourteenthStation from "./components/Navigators/navigatorPages/FourteenthStation";
import SelectLanguage from "./components/SelectLanguage";
import { getData } from "./lib/Storage";
import { useState } from "react";


const Stack = createNativeStackNavigator();

export default function App() {
  const [states, setStates] = useState("none");

  //
  getData("lang").then((language)=> setStates(language))
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="First" component={NavigationsComponent} />
        <Stack.Screen name="Deleted" component={Delet} />
        <Stack.Screen
          name="Homes"
          component={BodyComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FirstStation"
          component={FirstStation}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name="SecondStation"
          component={SecondStation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ThirdStation"
          component={ThirdStation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FourthStation"
          component={FourthStation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FifthStation"
          component={FifthStation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SixthStation"
          component={SixthStation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SeventhStation"
          component={SeventhStation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EighthStation"
          component={EighthStation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NinthStation"
          component={NinthStation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TenthStation"
          component={TenthStation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EleventhStation"
          component={EleventhStation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TwelfthStation"
          component={TwelfthStation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ThirteenthStation"
          component={ThirteenthStation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FourteenthStation"
          component={FourteenthStation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );

  
}

