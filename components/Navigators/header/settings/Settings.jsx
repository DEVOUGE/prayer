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
  TouchableWithoutFeedback,
  Touchable,
  Dimensions,
  Button,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Popup from "../../../popup";
import { getData, removeData, storeData } from "../../../../lib/Storage";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { colorScheme, useColorScheme, styled } from "nativewind";
import Slider from "@react-native-community/slider";
import showToast from "../../../toast";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const StyledText = styled(Text);
import { useContext } from "react";
import { LanguageContext } from "../../../../lib/LanguageContext";
export default function Settings({ route }) {
  const { setLang } = useContext(LanguageContext);
  const navigation = useNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(lang);
  const { lang } = route.params;
  const [visible, setVisible] = useState(false);
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();
  const { width, height } = Dimensions.get("window");
  const [fontSize, setFontSize] = useState(0);
  const [newfontSize, setNewFontSize] = useState(0);
  const [fontSizeSliderDisplay, setFontSizeSliderDisplay] = useState(false);

  const openBottomSheetModal = useRef(null);
  // const { width } = useWindowDimensions();
  const snapPoints = ["35%", "40%", "45%"];
  const [closeBottomSheetModal, setcloseBottomSheetModal] = useState("open");
  const statusBarStyle =
    colorScheme === "dark" ? "light-content" : "dark-content";
  const statusBarBackgroundColor = colorScheme === "dark" ? "black" : "white";

  const openPopup = () => {
    setVisible(true);
  };

  const closePopup = () => {
    setVisible(false);
  };

  const Tooltip = ({ value }) => {
    return (
      <View className="px-3 py-1.5 rounded-md bg-purple-600">
        <Text
          className="dark:text-light font-medium text-base"
          style={{ fontSize: 2 + newfontSize }}
        >
          {value}
        </Text>
      </View>
    );
  };

  useEffect(() => {
    languageTransform();
  }, [lang]);

  function RenderSettingsItems({
    settingObjectIcon,
    item,
    onPressFunc,
    useIcon,
    addStyles,
  }) {
    return (
      <TouchableOpacity
        className={`flex flex-row items-center justify-between my-4 ${addStyles}`}
        style={{ ...styles.card }}
        onPress={onPressFunc}
      >
        <View className="flex flex-row  items-start justify-between w-[97%]">
          <Text className="text-[#101318] dark:text-white font-medium text-base">
            {item}
          </Text>
          <FontAwesome name={settingObjectIcon} size={25} color={"purple"} />
        </View>

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
        className="flex flex-row items-center w-11/12 justify-between dark:text-black"
        onPress={async () => {
          await removeData("lang");
          await setLang("none");
          await storeData("lang", `${langName}`);
          // setSelectedLanguage(`${langName}`);
          showToast(`Language set successfully to ${langName}`);
        }}
      >
        <Text className="font-bold text-white dark:text-black text-lg capitalize my-2.5">
          {langName}
        </Text>
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

  useEffect(() => {
    fetchTheme();
  }, []);

  async function fetchTheme() {
    await getData("theme").then((theme) => setColorScheme(theme));
    await getData("addedFontSize").then((size) => setNewFontSize(size));
  }

  const handleOpenThemeTab = () => {
    openBottomSheetModal.current?.present();
  };

  function RenderChangeThemeItemsInBottomModal({ onPressFunc, theme }) {
    return (
      <TouchableOpacity
        className="flex flex-row items-center w-11/12 justify-between space-y-6 "
        onPress={onPressFunc}
        // onPress={()=>{onPressFunc}}
      >
        <Text
          className="font-medium text-base capitalize dark:text-white"
          style={{}}
        >
          {theme} mode
        </Text>
        {colorScheme == theme ? (
          <FontAwesome
            name={theme == "light" ? "sun-o" : "moon-o"}
            style={{ color: theme == "light" ? "#FFD43B" : "#fff" }}
            size={25}
          />
        ) : (
          <Entypo name="circle" size={24} color={"#56636f"} />
        )}
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaProvider className="bg-[#FCFBF4 ] dark:bg-[#171717] ">
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={statusBarBackgroundColor}
      />
      <View style={{ ...styles.container }} className="">
        <View className="flex ml-3 flex-row  ">
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color={colorScheme == "dark" ? "#fff" : "#000"}
            style={styles.iconBack}
            onPress={() => navigation.goBack()}
          />
          <Text className="uppercase dark:text-white text-[#800080e1] ml-5 text-lg font-bold">
            Settings
          </Text>
        </View>

        <View style={styles.cardCont} className="space-y-1">
          <RenderSettingsItems
            item={"Change Font size"}
            settingObjectIcon={"font"}
            addStyles="-mb-0.5"
            onPressFunc={() => setFontSizeSliderDisplay(!fontSizeSliderDisplay)}
          />

          <TouchableWithoutFeedback
            onPress={() => setFontSizeSliderDisplay(false)}
          >
            <View
              className={`block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 items-center ${
                fontSizeSliderDisplay ? "flex" : "hidden"
              }`}
            >
              <Slider
                style={{
                  width: 250,
                  height: 60,
                  display: fontSizeSliderDisplay ? "flex" : "hidden",
                }}
                minimumValue={0}
                maximumValue={16}
                minimumTrackTintColor={
                  fontSizeSliderDisplay ? "purple" : "transparent"
                }
                maximumTrackTintColor="#000000"
                onValueChange={(value) => setFontSize(value)}
                thumbTintColor={
                  fontSizeSliderDisplay ? "purple" : "transparent"
                }
                value={Number(newfontSize)}
              />
              <Text
                style={{ fontSize: 19 + fontSize }}
                className="text-center dark:text-light font-medium -mt-1"
              >
                Preview
              </Text>

              <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                  await removeData("addedFontSize");
                  const jsonValue = JSON.stringify(fontSize);
                  await storeData("addedFontSize", jsonValue);
                  showToast(`font size increased by ${fontSize}px`);
                }}
                className="py-3 px-6 my-2 bg-purple-600 rounded-md "
              >
                <Text
                  className="text-light text-base"
                  style={styles.buttonText}
                >
                  Set font size
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>

          <RenderSettingsItems
            item={"Change Theme"}
            settingObjectIcon={colorScheme == "dark" ? "moon-o" : "sun-o"}
            onPressFunc={() => {
              handleOpenThemeTab();
              setcloseBottomSheetModal("open");
            }}
          />
          {/* ========================pop up modal ============================*/}
          <TouchableOpacity
            style={{ ...styles.card }}
            onPress={openPopup}
            className="pr-4"
          >
            <Text className="font-medium text-base capitalize dark:text-white">
              {languageTransform("change language", "Gbanwee Asụsụ")}
            </Text>
            <FontAwesome name="language" size={25} color={"purple"} />
          </TouchableOpacity>

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
      {/* ========================bottom modal ============================*/}
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={openBottomSheetModal}
          index={0}
          enablePanDownToClose={true}
          snapPoints={snapPoints}
          backgroundStyle={{
            borderRadius: 30,
            backgroundColor: colorScheme == "dark" ? "#000" : "#fff",
          }}
          onBlur={() => setcloseBottomSheetModal("close")}
          stackBehavior="push"
          style={{
            display: closeBottomSheetModal === "open" ? "flex" : "none",
          }}
        >
          <View className="flex-1 items-center px-3.5 gap-y-4 pt-8">
            <RenderChangeThemeItemsInBottomModal
              onPressFunc={async () => {
                setColorScheme("dark");
                await removeData("theme");
                await storeData("theme", "dark");
                showToast(`dark theme enabled`);
              }}
              theme="dark"
            />
            <RenderChangeThemeItemsInBottomModal
              onPressFunc={async () => {
                setColorScheme("light");
                await removeData("theme");
                await storeData("theme", "light");
                showToast(`light theme enabled`);
              }}
              theme="light"
            />

            <View
              className="w-full"
              style={{
                width: width,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: "gray",
                marginVertical: 30,
              }}
            />
            <Pressable
              className="flex flex-row items-center w-11/12 justify-between"
              onPress={() => {
                setcloseBottomSheetModal("close");
              }}
            >
              <Text className="dark:text-white font-bold text-lg" style={{}}>
                Close
              </Text>
              {closeBottomSheetModal === "open" ? (
                <AntDesign name="close" size={24} color={"red"} />
              ) : (
                <Entypo name="circle" size={24} color={"#56636f"} />
              )}
            </Pressable>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
      {/* ========================bottom  modal ============================*/}
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
    borderBottomWidth: 2,
    borderBottomColor: "silver",
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: "95%",
    alignSelf: "center",
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
