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
  Dimensions,
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
import showToast from "../../../toast";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const StyledText = styled(Text);
export default function Settings({ route }) {
  const navigation = useNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(lang);
  const { lang, setLang } = route.params;
  const [visible, setVisible] = useState(false);
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();
  const { width, height } = Dimensions.get("window");
  const [activeTheme, setActiveTheme] = useState("none");

  const openBottomSheetModal = useRef(null);
  // const { width } = useWindowDimensions();
  const snapPoints = ["35%", "40%", "45%"];
  const [closeBottomSheetModal, setcloseBottomSheetModal] = useState("open");

  const openPopup = () => {
    setVisible(true);
  };

  const closePopup = () => {
    setVisible(false);
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
        <Text className="text-[#101318] dark:text-white font-medium text-base">
          <FontAwesome name={settingObjectIcon} size={25} color={"purple"} />
          &nbsp;&nbsp;&nbsp;
          {item}
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
    console.log(lang);
    return (
      <Pressable
        className="flex flex-row items-center w-11/12 justify-between"
        onPress={async () => {
          await removeData("lang");
          await setLang("none");
          // setSelectedLanguage(`${langName}`);
          await storeData("lang", `${langName}`);
          showToast(`Language set successfully to ${langName}`);
        }}
      >
        <Text className="font-bold dark:text-white text-lg capitalize my-2.5">
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
          // <i class="fas fa-sun fa-spin" style="color: #FFD43B;"></i>
          <Entypo name="circle" size={24} color={"#56636f"} />
        )}
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaProvider className="bg-[#FCFBF4 ] dark:bg-[#171717] ">
      <StatusBar />
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
        {/* <Switch
          value={colorScheme == "dark"}
          onChange={() => {
            toggleColorScheme(colorScheme === "light" ? "dark" : "light");
            console.log(colorScheme);
          }}
        /> */}

        {/* <Text className="my-4 font-medium text-xl dark:text-blue-400"
          onPress={() =>
            toggleColorScheme(colorScheme === "light" ? "dark" : "light")
          }
        >
          {`The color scheme is ${colorScheme}`}
        </Text>  */}

        <View style={styles.cardCont} className="space-y-1">
          <RenderSettingsItems
            item={"Change font size"}
            settingObjectIcon={"file-text"}
            addStyles="-mb-0.5"
            onPressFunc={() => showToast("coming soon")}
          />

          <RenderSettingsItems
            item={"Change Theme"}
            settingObjectIcon={colorScheme == "dark" ? "moon-o" : "sun-o"}
            onPressFunc={() => {
              handleOpenThemeTab();
              setcloseBottomSheetModal("open");
            }}
          />
          {/* ========================pop up modal ============================*/}
          <TouchableOpacity style={{ ...styles.card }} onPress={openPopup}>
            <Text className="font-medium text-base capitalize dark:text-white">
              {languageTransform("change language", "Gbanwee Asụsụ")}
            </Text>
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
          <View className="flex-1 items-center px-3.5 gap-y-4 pt-8 ">
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
