import React from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    title: {
      fontSize: '18px',
      color: '#0074bc',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
  })

const Title = (props) => (
    <Text style={styles.title}>
        {props.title}
    </Text>
)

export default Title