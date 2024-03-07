import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

export default function Popup({
  children,
  visible,
  transparent,
  dismiss,
  margin,
}) {
  return (
    <View className="flex-1 mt-[100px]">
      <Modal
        visible={visible}
        transparent={transparent}
        onRequestClose={dismiss}
      >
        <View className="flex-1 bg-[#000000aa] flex items-center justify-center">
          <TouchableWithoutFeedback onPress={dismiss}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>
          <View className="flex-1 bg-black dark:bg-[#f0eaea]  w-[80%] my-[50px] p-[40px] rounded-[20px] overflow-hidden max-h-[30%]">
          
            {children}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    justifyContent: "center",
    marginVertical: "100%",
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
