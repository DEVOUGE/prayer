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
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Popup from "../../../popup";
import { getData, removeData, storeData } from "../../../../lib/Storage";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function Settings({ route }) {
  const navigation = useNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(lang);
  const { lang, setLang } = route.params;
  const [visible, setVisible] = useState(false);
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { width, height } = Dimensions.get("window");
  const openPopup = () => {
    setVisible(true);
  };

  const closePopup = () => {
    setVisible(false);
  };

  // function RenderSettingsItems(
  //   settingObjectIcon,
  //   item,
  //   icon,
  //   useIcon,
  //   onpressFunc,
  // ) {
  //   return (
  //     <TouchableOpacity
  //       className="flex flex-row items-center w-11/12 justify-between my-3.5"
  //       onPress={() => {
  //         onpressFunc();
  //       }}
  //     >
  //       <Text
  //         className="text-[#101318] font-bold text-lg"
  //       >
  //         <FontAwesome5
  //           name={settingObjectIcon}
  //           size={25}
  //           color={"purple"}
  //         />
  //         &nbsp;
  //         {item}
  //       </Text>
  //       <Ionicons
  //         style={{ display: useIcon ? "none" : "flex" }}
  //         name={`${icon}`}
  //         color={"purple"}
  //         size={25}
  //       />

  //       <Switch
  //         style={{ display: useIcon ? "flex" : "none" }}
  //         value={pushEnabled}
  //         onValueChange={togglePushSwitch}
  //         thumbColor={pushEnabled ? "#f4511e" : "#f4f3f4"}
  //         trackColor={{ false: "#767577", true: "#f4511e" }}
  //       />
  //     </TouchableOpacity>
  //   );
  // }
  // getData("lang").then((language) => setSelectedLanguage(language));

  function RenderSelectLanguages({ langName, navigation }) {
    return (
      <Pressable
        className="flex flex-row items-center w-11/12 justify-between"
        onPress={async () => {
          await removeData("lang");
          await setLang("none");
          setSelectedLanguage(`${langName}`);
          // await storeData("lang",  `${langName}`).then(()=>  navigation.navigate('Home'));
          await storeData("lang", `${langName}`);
          // await setLang(selectedLanguage
          console.log(lang);
        }}
      >
        <Text className="font-bold text-lg capitalize my-2.5">{langName}</Text>
        <Entypo name="circle" size={24} color={"#56636f"} />
      </Pressable>
    );
  }
  // console.log(colorScheme);

  return (
    <SafeAreaProvider className="">
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

        {/* <Switch value={colorScheme == "light"} onChange={toggleColorScheme} /> */}

        <View style={styles.cardCont} className="hover:bg-[#800080e1]">
          <TouchableOpacity
            style={{ ...styles.popupButton, ...styles.card }}
            onPress={openPopup}
          >
            <Text className="font-medium text-base">Change Language</Text>
          </TouchableOpacity>
          {/* ========================pop up modal ============================*/}
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
    marginBottom: 13,
  },
});
