import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const ChevronPagination = ({ to, from }) => {
  const navigation = useNavigation();
  return (
    <View className="flex flex-row items-center justify-between  w-11/12">
      <TouchableOpacity
        className={`${from === "none" ? "hidden" : "flex"}`}
        onPress={() => navigation.navigate(from)}
      >
        <FontAwesome name="chevron-circle-left" size={50} color="purple" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(to)}
        className={`${from === "none" ? "absolute right-2 " : ""}`}
      >
        <FontAwesome
          name="chevron-circle-right"
          size={50}
          color="purple"
        />
      </TouchableOpacity>
    </View>
  );
};

export const RenderChevronNavigation = ({to, from})=>{
    return(
        <View
        className="w-full bg-light dark:bg-black absolute bottom-0 left-0 right-0 items-center justify-center py-2.5"
        style={{
          // height: verticalScale(80), // Set the height of the fixed view
        }}
      >
        <ChevronPagination
          to={to}
          from={from}
        />
      </View>
    )
}

// export default ChevronPagination
