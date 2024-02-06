import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? 45 : 0
    }
})