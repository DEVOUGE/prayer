import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Switch,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Popup from "../../../popup";
import { getData, removeData, storeData } from "../../../../lib/Storage";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { colorScheme, useColorScheme } from "nativewind";
import showToast from "../../../toast";
import { useContext } from "react";
import { LanguageContext } from "../../../../lib/LanguageContext";
export default function Settings({ route }) {
  const { setLang } = useContext(LanguageContext);
  const { setFont } = useContext(LanguageContext);
  const navigation = useNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(lang);
  const { lang, font } = route.params;
  const [visible, setVisible] = useState(false);
  const { colorScheme, setColorScheme } = useColorScheme();
  const { width, height } = Dimensions.get("window");
  const [activeStation, setActiveStation] = useState(null);

  const openPopup = () => {
    setVisible(true);
  };

  const closePopup = () => {
    setVisible(false);
  };

  useEffect(() => {
    languageTransform();
  }, [lang]);
  useEffect(() => {
    fontTransform();
  }, [font]);

  function RenderSettingsItems({
    settingObjectIcon,
    fontName,
    item,
    icon,
    useIcon,
    onpressFunc,
  }) {
    return (
      <TouchableOpacity
        className="flex flex-row items-center justify-between "
        style={{ ...styles.card }}
        onPress={async () => {
          await removeData("font");
          await setFont("none");
          await storeData("font", `${fontName}`);
          // setSelectedLanguage(`${fontName}`);
          showToast(`Font size set successfully to ${fontName}`);
        }}
      >
        <Text className="text-[#101318] font-medium text-base">
          <FontAwesome name={settingObjectIcon} size={25} color={"purple"} />
          &nbsp;&nbsp;&nbsp;
          {font == fontName ? (
            <FontAwesome
              name="check-circle"
              style={{ color: "#9e19e6" }}
              size={25}
            />
          ) : (
            <Entypo name="circle" size={24} color={"#56636f"} />
          )}
        </Text>

        {/* <Ionicons
          style={{ display: useIcon ? "none" : "flex" }}
          name={`${icon}`}
          color={"purple"}
          size={25}
        /> */}

        {/* <Switch
          style={{ display: useIcon ? "flex" : "none" }}
          value={pushEnabled}
          onValueChange={togglePushSwitch}
          thumbColor={pushEnabled ? "#f4511e" : "#f4f3f4"}
          trackColor={{ false: "#767577", true: "#f4511e" }}
        /> */}
      </TouchableOpacity>
    );
  }

  function RenderSelectLanguages({ langName }) {
    return (
      <Pressable
        className="flex flex-row items-center w-11/12 justify-between"
        onPress={async () => {
          await removeData("lang");
          await setLang("none");
          await storeData("lang", `${langName}`);
          // setSelectedLanguage(`${langName}`);
          showToast(`Language set successfully to ${langName}`);
        }}
      >
        <Text className="font-bold text-lg capitalize my-2.5">{langName}</Text>
        {lang == langName ? (
          <FontAwesome
            name="check-circle"
            style={{ color: "#9e19e6" }}
            size={25}
          />
        ) : (
          <Entypo name="circle" size={24} color={"#56636f"} />
        )}
      </Pressable>
    );
  }

  // console.log(colorScheme);
  function fontTransform(
    normalFontSize,
    mediumFontSize,
    largeFontSize
    // englishTranslation,
  ) {
    if (font == 16) {
      normalFontSize = mediumFontSize;
    }

    // return <Text>{normalFontSize}</Text>;
  }
  function languageTransform(
    normalTranslation,
    igboTranslation
    // englishTranslation,
  ) {
    if (lang == "igbo") {
      normalTranslation = igboTranslation;
    }

    return <Text>{normalTranslation}</Text>;
  }

  return (
    <SafeAreaProvider className="dark:bg-red-400">
      <StatusBar />
      <View style={{ ...styles.container }} className="">
        <View className="flex ml-3 flex-row  ">
          <Ionicons
            name="arrow-back-outline"
            size={30}
            style={styles.iconBack}
            onPress={() => navigation.goBack()}
          />
          <Text className="uppercase text-[#800080e1] ml-5 text-lg font-bold">
            Settings
          </Text>
        </View>

        {/* <Switch value={colorScheme == "light"} onChange={setColorScheme} />

        <Text className="my-4 font-medium text-xl dark:text-red-400"
          onPress={() =>
            setColorScheme(colorScheme === "light" ? "dark" : "light")
          }
        >
          {`The color scheme is ${colorScheme}`}
        </Text> */}

        <View style={styles.cardCont} className="space-y-3">
          {/* <RenderSettingsItems
            item={"Change font size"}
            // settingObjectIcon={"file-text"}
            fontName={fontName}
          /> */}
          {/* ========================pop up modal ============================*/}
          <TouchableOpacity style={{ ...styles.card }} onPress={openPopup}>
            <Text className="font-medium text-base capitalize">
              {fontTransform("change font size", "Gbanwee ibu")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.card }} onPress={openPopup}>
            <Text className="font-medium text-base capitalize">
              {languageTransform("change language", "Gbanwee Asụsụ")}
            </Text>
          </TouchableOpacity>

          <Popup
            visible={visible}
            transparent={true}
            dismiss={closePopup}
            margin={"25%"}
          >
            <RenderSettingsItems fontName={16} />
            <RenderSettingsItems fontName={18} />
            <RenderSettingsItems fontName={21} />
          </Popup>

          <Popup
            visible={visible}
            transparent={true}
            dismiss={closePopup}
            margin={"25%"}
          >
            <RenderSelectLanguages langName={"english"} />
            <RenderSelectLanguages langName={"igbo"} />
          </Popup>
          {/* ========================pop up modal ============================*/}
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 45 : 0,
  },
  iconBack: {
    marginBottom: 30,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: "95%",
    alignSelf: "center",
  },
});
