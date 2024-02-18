import { Platform, Pressable, SafeAreaView, StyleSheet, Text, View, Modal, TouchableOpacity, } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Popup from "../../../popup";
import { getData, removeData, storeData } from "../../../../lib/Storage";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function Settings({ route }) {
  const navigation = useNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(lang);
  const { lang, setLang } = route.params;
  const [visible, setVisible] = useState(false);

  const openPopup = () => {
    setVisible(true);
  }

  const closePopup = () => {
    setVisible(false);
  }

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

  function RenderSelectLanguages({ langName,navigation }) {
    return (
      <Pressable
        className="flex flex-row items-center w-11/12 justify-between"
        onPress={async () => {
          await removeData("lang");
          await setLang("none");
          setSelectedLanguage(`${langName}`);
          // await storeData("lang",  `${langName}`).then(()=>  navigation.navigate('Home'));
          await storeData("lang",  `${langName}`);
          // await setLang(selectedLanguage)
          console.log(lang)
        }}
      >
        <Text
          className="font-bold text-lg capitalize my-2.5"
        >
          {langName}
        </Text>
        <Entypo name="circle" size={24} color={"#56636f"} />
      </Pressable>
    )
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar />
      <View>
        <Ionicons
          name="arrow-back-outline"
          size={30}
          style={styles.iconBack}
          onPress={() => navigation.goBack()}
        />

        <View style={styles.cardCont} className="hover:bg-[purple]">
          <Pressable
            style={styles.card}
          // onPress={openModal}
          >
            <Text className="uppercase">Change Language</Text>
            <Ionicons name="arrow-forward-outline" size={30} />
          </Pressable>

          <TouchableOpacity
            style={{ ...styles.popupButton, ...styles.card, }}
            onPress={openPopup}
          >
            <Text className="text-orange-400">Open Popup</Text>
          </TouchableOpacity>

          {/* ========================pop up modal ============================*/}

          <Popup
            visible={visible}
            // transparent={true}
            dismiss={closePopup}
            margin={"25%"}
          >
            <RenderSelectLanguages langName={"english"} />
            <RenderSelectLanguages langName={"igbo"} />
          </Popup>
          {/* ========================pop up modal ============================*/}

          <View style={styles.card}>
            <Text>Language</Text>
            <Ionicons name="arrow-forward-outline" size={30} />
          </View>

          <View style={styles.card}>
            <Text>Language</Text>
            <Ionicons name="arrow-forward-outline" size={30} />
          </View>
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
