import { ToastAndroid, Platform } from "react-native";


const showToast = (message) => {
    if (Platform.OS) {
        ToastAndroid.showWithGravity(
            message,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }
};

export default showToast