import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

export default function DropdownComponent() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Stations Of the cross", value: "Stations Of the cross" },
  ]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        theme="DARK"
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    width: 150,
    }
});
