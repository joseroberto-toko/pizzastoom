import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Photo from '../photo'

const Pizza = (props) => {
    const {title, items, image} = props.pizza
    return(
        <View style={styles.container}>
                <Photo source={image} />
                <View style={styles.description}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{items && items.map((item,key) => <Text key={key}>{item}, </Text>)}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => props.navigate('Fillings')}>
                    <Text style={{color: '#FFF'}}>Selecionar</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'rgba(250,250,250,.9)',
        padding: '20px',
        height: '200px',
        width: '100%',
        borderRadius: '10px',
        position: 'relative',
        marginBottom: 15
    },
    description: {
        display: 'flex',
        position: 'absolute',
        left: 140,
        top: 10,
        width: 'auto',
    },
    title: {
      fontSize: '16px',
      color: '#0074bc',
      fontWeight: 'bold',
      marginBottom: 5
    },
    item: {
        width: '40%',
        display: 'flex',
    },
    text: {
        fontSize: '14px',
        color: '#333',
    },
    button:{
        display: 'flex',
        width: '90px',
        backgroundColor: '#0074bc',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        position: 'absolute',
        right: 10,
        bottom: 10,
        borderRadius: 25
    },
})

export default Pizza