import React from 'react'
import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SettingScreen(props) {
  const { navigation } = props
  const goToHome = (pageName) => {
    navigation.navigate(pageName)
  }
  return (
    <SafeAreaView>
      <Text>Setting Screen</Text>
      <Text>Setting Screen</Text>
      <Text>Setting Screen</Text>
      <Text>Setting Screen</Text>
      <Button title="Go to Home" onPress={() => goToHome("Home")} />
    </SafeAreaView>
  )
}
