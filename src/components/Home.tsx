import React from 'react'
import { View } from 'react-native'
import { Header } from 'react-native-elements'

import styles from '../styles'
import { Reservations } from './Reservations'

const Home = () => (
  <View style={styles.shared.container}>
    <Header
      centerComponent={{
        style: styles.shared.header,
        text: 'Upcoming Reservations'
      }}
    />
    <Reservations />
  </View>
)

export default Home
