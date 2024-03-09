import AsyncStorage from "@react-native-async-storage/async-storage";
import showToast from "../components/toast";

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log("error saving data");
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
      }
      return "none"
  } catch (e) {
    return 'none'
  }
};
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e){

  }
};