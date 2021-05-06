import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#FFF',
        padding: '20px',
        height: 'auto',
        minHeight: '65%',
        width: '100%',
        borderRadius: '15px',
        position: 'absolute',
        marginBottom: 15,
        zIndex: 900,
        top: 240
    }
})


const SliderPanel = (props) => {
  return (
      <View style={styles.container}>{props.children}</View>
  )
}

export default SliderPanel