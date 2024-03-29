import { useContext, useState, useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
} from "react-native";
import { storeData } from "../lib/Storage";
import languages from "../lib/languges";
import LottieView from "lottie-react-native";
import { getData } from "../lib/Storage";

export default function SelectLanguage({ setLang, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [chooseLang, setChooseLang] = useState(false);

  // const langCtx = useContext(languages);

  if (isLoading) {
    return <Loading />;
  }

  function Loading() {
    return (
      <View className="flex item-center justify-center  flex-1">
        <LottieView
          onLayout={() => {
            setTimeout(() => {
              setChooseLang(true)
            }, 3000);
          }}
          autoPlay
          // loop={false}
          duration={2000}
          source={require("../assets/animation/Animation - 1708727620988.json")}
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
            backgroundColor: "auto",
          }}
        />
      </View>
    );
  }

  if (chooseLang) {
    return (
      <SafeAreaView style={styles.background}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Select Language</Text>
        <ScrollView>
          {languages.map(({ title, value }) => {
            return (
              <Pressable
                key={value}
                onPress={() => {
                  setLang(value);
                  storeData("lang", value);
                }}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#0005" : "inherit",
                    borderWidth: 1,
                    borderColor: "#fab9",
                    paddingBottom: 12,
                    borderRadius: 8,
                  },
                  styles.title,
                ]}
              >
                <Text style={styles.title}>{title}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    )
  }
  return (
      <Loading/>
  );
}

const styles = StyleSheet.create({
  background: {
    padding: 50,
    margin: 0,
    borderBlockColor: "black",
    height: "100%",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
});
