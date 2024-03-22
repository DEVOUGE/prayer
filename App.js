import { NavigationContainer } from "@react-navigation/native";
import { NativeWindStyleSheet } from "nativewind";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import { LanguageProvider } from "./lib/LanguageContext";
// English component
import GeneralComponentContainer from "./components/navigatorComponents/GeneralComponentContainer";
import Settings from "./components/Navigators/header/settings/Settings";
import Home from "./components/Navigators/EnglishVersion/Home";
import FirstStationEnglish from "./components/Navigators/EnglishVersion/FirstStationEnglish";
import SecondStationEnglish from "./components/Navigators/EnglishVersion/SecondStationEnglish";
import ThirdStationEnglish from "./components/Navigators/EnglishVersion/ThirdStationEnglish";
import FourthStationEnglish from "./components/Navigators/EnglishVersion/FourthStationEnglish";
import FifthStationEnglish from "./components/Navigators/EnglishVersion/FifthStationEnglish";
import SixthStationEnglish from "./components/Navigators/EnglishVersion/SixthStationEnglish";
import SeventhStationEnglish from "./components/Navigators/EnglishVersion/SeventhStationEnglish";
import EighthStationEnglish from "./components/Navigators/EnglishVersion/EighthStationEnglish";
import NinthStationEnglish from "./components/Navigators/EnglishVersion/NinthStationEnglish";
import TenthStationEnglish from "./components/Navigators/EnglishVersion/TenthStationEnglish";
import EleventhStationEnglish from "./components/Navigators/EnglishVersion/EleventhStationEnglish";
import TwelfthStationEnglish from "./components/Navigators/EnglishVersion/TwelfthStationEnglish";
import ThirteenthStationEnglish from "./components/Navigators/EnglishVersion/ThirteenthStationEnglish";
import FourteenthStationEnglish from "./components/Navigators/EnglishVersion/FourteenthStationEnglish";
// The end of english stations

// Starting Igbo Stations
import IgboComponentForDisplayingAllStations from "./components/navigatorComponents/IgboComponentForDisplayingAllStations";
// import FirstIgboScreen from "./components/Navigators/IgboVersion/FirstIgboScreen";
import HomePageForIgboStation from "./components/Navigators/IgboVersion/HomePageForIgboStation";
import FirstStationIgbo from "./components/Navigators/IgboVersion/FirstStationIgbo";
import SecondStationIgbo from "./components/Navigators/IgboVersion/SecondStationIgbo";
import ThirdStationIgbo from "./components/Navigators/IgboVersion/ThirdStationIgbo";
import FourthStationIgbo from "./components/Navigators/IgboVersion/FourthStationIgbo";
import FifthStationIgbo from "./components/Navigators/IgboVersion/FifthStationIgbo";
import SixthStationIgbo from "./components/Navigators/IgboVersion/SixthStationIgbo";
import SeventhStationIgbo from "./components/Navigators/IgboVersion/SeventhStationIgbo";
import EightStationIgbo from "./components/Navigators/IgboVersion/EightStationIgbo";
import NinthStationIgbo from "./components/Navigators/IgboVersion/NinthStationIgbo";
import TenthStationIgbo from "./components/Navigators/IgboVersion/TenthStationIgbo";
import EleventhStationIgbo from "./components/Navigators/IgboVersion/EleventhStationIgbo";
import TwelfthStationIgbo from "./components/Navigators/IgboVersion/TwelfthStationIgbo";
import ThirteenthStationIgbo from "./components/Navigators/IgboVersion/ThirteenthStationIgbo";
import FourteenthStationIgbo from "./components/Navigators/IgboVersion/FourteenthStationIgbo";
import AririoNihuAltar from "./components/Navigators/IgboVersion/AririoNihuAltar";
import EkpereMmechi from "./components/Navigators/IgboVersion/EkpereMmechi";
// End of Igbo stations
import SelectLanguage from "./components/SelectLanguage";
import SelectFontSize from "./components/SelectFontSize";
import { getData } from "./lib/Storage";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useColorScheme } from "nativewind";
import FontSizeProvider from "./lib/FontSizeProvider";

const { Navigator, Screen } = createNativeStackNavigator();
NativeWindStyleSheet.setOutput({
  default: "native",
});
export default function App() {
  const [lang, setLang] = useState("none");
  const { colorScheme, setColorScheme } = useColorScheme();
  const [font, setFont] = useState("none");
  const [newFontSize, setNewFontSize] = useState(0);

  useEffect(() => {
    fetchTheme();
    fetchAddedFontSize();
  }, [lang]);

  async function fetchTheme() {
    await getData("theme").then((theme) => setColorScheme(theme));
  }

  useEffect(() => {
    setInterval(() => {
      fetchAddedFontSize();
    }, 1000);
  }, []);

  async function fetchAddedFontSize() {
    await getData("addedFontSize").then(async (size) => {
      const parsed = JSON.parse(size);
      await parsed;
      setNewFontSize(parsed);
    });
  }

  getData("lang").then((language) => setLang(language));
  getData("font").then((fonts) => setFont(fonts));

  return (
    <LanguageProvider setLang={setLang} setFont={setFont}>
      <FontSizeProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            {lang == "none" ? (
              <SelectLanguage setLang={setLang} />
            ) : (
                <Navigator initialRouteName="Home" screenOptions={{
                  animation: "slide_from_right",
              }}>
                <Screen
                  name="SelectLanguage"
                  component={SelectLanguage}
                  options={{ headerShown: false }}
                  initialParams={{ lang, font }}
                  setLang={setLang}
                  setFont={setFont}
                />
                <Screen
                  name="SelectFontSize"
                  component={SelectFontSize}
                  options={{ headerShown: false }}
                  initialParams={{ font }}
                  setFont={setFont}
                />
                <Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ headerShown: false }}
                  initialParams={{ lang, font }}
                />
                <Screen
                  name="Settings"
                  component={Settings}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="First"
                  component={GeneralComponentContainer}
                  initialParams={{ lang }}
                />
                <Screen
                  name="Homes"
                  component={Home}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="FirstStationEnglish"
                  component={FirstStationEnglish}
                    options={{
                      headerShown: false,
                    }}
                    initialParams={{ lang, newFontSize }}
                />
                <Screen
                  name="SecondStationEnglish"
                  component={SecondStationEnglish}
                  options={{
                    headerShown: false,
                  }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="ThirdStationEnglish"
                  component={ThirdStationEnglish}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="FourthStationEnglish"
                  component={FourthStationEnglish}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="FifthStationEnglish"
                  component={FifthStationEnglish}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="SixthStationEnglish"
                  component={SixthStationEnglish}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="SeventhStationEnglish"
                  component={SeventhStationEnglish}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="EighthStationEnglish"
                  component={EighthStationEnglish}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="NinthStationEnglish"
                  component={NinthStationEnglish}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="TenthStationEnglish"
                  component={TenthStationEnglish}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="EleventhStationEnglish"
                  component={EleventhStationEnglish}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="TwelfthStationEnglish"
                  component={TwelfthStationEnglish}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="ThirteenthStationEnglish"
                  component={ThirteenthStationEnglish}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="FourteenthStationEnglish"
                  component={FourteenthStationEnglish}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                {/* Igbo components starts here */}
                <Screen
                  name="IgboComponentForDisplayingAllStations"
                  component={IgboComponentForDisplayingAllStations}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="HomePageForIgboStation"
                  component={HomePageForIgboStation}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="FirstStationIgbo"
                  component={FirstStationIgbo}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="SecondStationIgbo"
                  component={SecondStationIgbo}
                  options={{ headerShown: false }}
                    initialParams={{ lang }}
                    
                />
                <Screen
                  name="ThirdStationIgbo"
                  component={ThirdStationIgbo}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="FourthStationIgbo"
                  component={FourthStationIgbo}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="FifthStationIgbo"
                  component={FifthStationIgbo}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="SixthStationIgbo"
                  component={SixthStationIgbo}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="SeventhStationIgbo"
                  component={SeventhStationIgbo}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="EighthStationIgbo"
                  component={EightStationIgbo}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="NinthStationIgbo"
                  component={NinthStationIgbo}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="TenthStationIgbo"
                  component={TenthStationIgbo}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="EleventhStationIgbo"
                  component={EleventhStationIgbo}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="TwelfthStationIgbo"
                  component={TwelfthStationIgbo}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="ThirteenthStationIgbo"
                  component={ThirteenthStationIgbo}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="FourteenthStationIgbo"
                  component={FourteenthStationIgbo}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="AririoNihuAltar"
                  component={AririoNihuAltar}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
                <Screen
                  name="Ekperemmechi"
                  component={EkpereMmechi}
                  options={{ headerShown: false }}
                  initialParams={{ lang }}
                />
              </Navigator>
            )}
          </NavigationContainer>
        </GestureHandlerRootView>
      </FontSizeProvider>
    </LanguageProvider>
  );
}
