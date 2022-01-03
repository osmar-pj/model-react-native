import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

export default function Saludar(props) {
  const { firstname, lastname } = props
  console.log({firstname, lastname})
  return (
    <View>
      <Text>Hola {lastname} {firstname} </Text>
    </View>
  )
}

// Saludar.defaultProps = {
//   firstname: 'Memo',
//   lastname: 'Navarro'
// }

Saludar.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string
}