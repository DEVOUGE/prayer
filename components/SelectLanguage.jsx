import { Pressable, StyleSheet, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";
import { storeData } from "../lib/Storage";
import languages from "../lib/languges";

export default function SelectLanguage({ setLang }) {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Select Language</Text>
      <ScrollView>
      {languages.map(({ title, value }) => {
        return (
          <Pressable key={value}
            onPress={() => {
              setLang(value);
              storeData("lang", value);
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#fab7" : "inherit",
              },
              styles.title,
            ]}
          >
            <Text style={styles.title}>{title}</Text>
          </Pressable>
        )
      })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    padding: 50,
    margin: 0,
    backgroundColor: "#fab5",
    borderBlockColor: 'black',
    height: '100%'
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
});
