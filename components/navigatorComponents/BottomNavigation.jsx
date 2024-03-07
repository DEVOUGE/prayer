import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Button } from "react-native";
import StationsComponent from "./StationsComponent";
import stations from "../../lib/stations";

const BottomNavigation = () => {
  const [currentScreen, setCurrentScreen] = useState(0); // Initialize with the first screen

  const handlePrevious = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const handleNext = () => {
    if (currentScreen < stations.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.view}>
        {/* Render the current screen */}
        <StationsComponent
          name={stations[currentScreen].name}
          no={stations[currentScreen].no}
        />

        {/* Previous and Next buttons */}
        <Button
          title="Previous"
          onPress={handlePrevious}
          disabled={currentScreen === 0}
        />
        <Button
          title="Next"
          onPress={handleNext}
          disabled={currentScreen === stations.length - 1}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    columnGap: 12,
    marginBottom: 12,
  },
});

export default BottomNavigation;
