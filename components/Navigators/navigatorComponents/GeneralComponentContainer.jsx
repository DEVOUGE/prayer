import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import FifthComponent from "./FifthComponent";
import SixthComponent from "./SixthComponent";
import SeventhComponent from "./SeventhComponent";
import EightComponent from "./EightComponent";
import NinethComponent from "./NinethComponent";
import TenthComponent from "./TenthComponent";
import EleventhComponent from "./EleventhComponent";
import TwelfthComponent from "./TwelfthComponent";
import ThirthenthComponent from "./ThirthenthComponent";
import FourthenthComponent from "./FourthenthComponent";

export default function GeneralComponentContainer() {
  return (
    <ScrollView horizontal={true}>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <FifthComponent />
      <SixthComponent />
      <SeventhComponent />
      <EightComponent />
      <NinethComponent />
      <TenthComponent />
      <EleventhComponent />
      <TwelfthComponent />
      <ThirthenthComponent />
      <FourthenthComponent />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
