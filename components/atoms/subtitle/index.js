import React from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    title: {
      fontSize: '14px',
      color: '#333',
      marginBottom: '10px'
    },
  })

const SubTitle = (props) => (
    <Text style={styles.title}>
        {props.title}
    </Text>
)

export default SubTitle