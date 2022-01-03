import React from 'react'
import { TextInput, Button, Text, View } from 'react-native'

export default function LoginForm() {
  return (
    <View>
      <Text>Email</Text>
      <TextInput />
      <Text>Password</Text>
      <TextInput />
      <Button title="Login" onPress={() => console.log('enviado')}/>
    </View>
  )
}