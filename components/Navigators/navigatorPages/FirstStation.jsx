import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FirstStation() {
  return (
    <View style={styles.container}>
      <Text>FirstStation</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 45 : 0,
    }
})