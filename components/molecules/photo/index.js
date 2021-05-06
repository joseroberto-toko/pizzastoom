import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: '5px',
        height: '200px',
        width: '100%',
        borderRadius: '10px',
        position: 'relative'
    },
    image: {
      width: '120px',
      height: '180px',
      display: 'flex',
      position: 'absolute',
      left: '-10px',
      top: '-10px',
      overflow: 'hidden',
    },
  })

const Photo = (props) => (
    <View style={styles.container}>
        <View style={styles.image}>
            {props.source && (
                <Image
                    source={require(`../../../assets/${props.source}`)}
                    style={{width: '120px', height: '100%'}}
                />
            )}
            
        </View>
    </View>
)

export default Photo