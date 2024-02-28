import { StyleSheet, Text, View, Pressable, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getData, removeData, storeData } from "../../lib/Storage";

export default function StationsComponent({ name, no }) {
  const navigation = useNavigation();
  const [activeStation, setActiveStation] = useState(null);
  const { width } = useWindowDimensions();


  async function getActiveStation() {
    await getData("activeStation").then((station) => setActiveStation(station));
    // console.log(activeStation, "active staton just got updated");
  }
  
  useEffect(() => {
    getActiveStation();
  }, []);

  return (
    <View>
      <Pressable
        // style={styles.btn}
        onPress={async () => {
          await removeData("activeStation");
          await storeData("activeStation", name);
          navigation.navigate(name);
        }}
        className={` focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 focus:outline-none`}
      >
        <Text className={`${activeStation == name ? "text-purple-600" : "text-slate-500"} text-base font-medium capitalize`} style={styles.txt}>{no} </Text>
      </Pressable>
      <View
        className="self-center rounded-md mb-1"
        style={{
          width: 50,
          borderBottomWidth: 3,
          borderBottomColor: activeStation == name ?"purple":"gray",
          // marginVertical: 2,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    // backgroundColor: "indigo",
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

});
