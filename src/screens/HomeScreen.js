import React from 'react'
import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen(props) {
  const { navigation } = props
  const goToPage = () => {
    navigation.navigate('Setting')
  }
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Button title="Go to Setting" onPress={goToPage} />
    </SafeAreaView>
  )
}
