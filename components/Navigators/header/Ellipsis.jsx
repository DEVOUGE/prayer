import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function Ellipsis({ fruitItem }) {
  const [showItems, setShowItems] = useState(false);
  const navigation = useNavigation();

  const handleFruitSelection = (fruit) => {
    navigation.navigate(`${fruit}`);
  };

  const toggleItems = () => {
    setShowItems(!showItems);
  };

  return (
    <View style={styles.container}>
      <Ionicons
        size={28}
        name="ellipsis-vertical"
        onPress={toggleItems}
        color={"white"}
      />
      {showItems && (
        <View style={styles.itemsContainer}>
          {fruitItem.map((fruit, index) => (
            <Text
              key={index}
              style={[styles.fruitText, index !== 0 && styles.seperator]}
              onPress={() => handleFruitSelection(fruit)}
            >
              {fruit}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  itemsContainer: {
    marginTop: 10,
    position: "absolute",
    width: "auto",
    top: 45,
    marginLeft: -75,
    backgroundColor: "black",
    borderRadius: 5,
  },
  fruitText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 3,
    paddingVertical: 15,
    paddingHorizontal: 20,
    color: "white",
    fontStyle: "italic",
  },
});
