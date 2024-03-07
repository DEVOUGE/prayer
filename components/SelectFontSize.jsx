import { useState } from "react";
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
import fonts from "../lib/fonts";
import LottieView from "lottie-react-native";

export default function SelectFontSize({ setFont }) {
  const [isLoading, setIsLoading] = useState(false);
  const [chooseFontSize, setChooseFontSize] = useState(false);


  if (isLoading) {
    return <Loading />;
  }

  function Loading() {
    return (
      <View className="flex item-center justify-center  flex-1">
        <LottieView
          onLayout={() => {
            setTimeout(() => {
              setChooseFontSize(true);
            }, 3000);
          }}
          autoPlay
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

  if (chooseFontSize) {
    return (
      <SafeAreaView style={styles.background}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Select Font Size</Text>
        <ScrollView>
          {fonts.map(({ title, value }) => {
            return (
              <Pressable
                key={value}
                onPress={() => {
                  setLang(value);
                  storeData("font", value);
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
    );
  }
  return <Loading />;
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
