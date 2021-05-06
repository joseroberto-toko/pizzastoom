import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useSelector } from 'react-redux'

const Points = (props) => {
    const points = useSelector(({ StoomApp }) => StoomApp.stoom.totalPoints);

    return(
        <View style={styles.container}>
            <Image
                source={require('../../../assets/points.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>StoomPoints</Text>
            <Text style={styles.total}>{points}
                <Text style={styles.points}>pontos</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#f00',
      width: '170px',
      position: 'absolute',
      right: '-15px',
      top: '30px',
    },
    logo:{
        position: 'absolute',
        left: 0,
        top: '10px',
        display: 'flex',
        width: 35, 
        height: 32
    },
    title: {
        color: '#f8a750',
        fontSize: '16px',
        fontWeight: 'bold',
        position: 'absolute',
        left: '40px',
        top: '10px',
        display: 'flex'
        
    },
    total: {
        color: '#fff',
        fontSize: '14px',
        position: 'absolute',
        left: '40px',
        top: '30px',
        display: 'flex',
        fontWeight: 'bold',
    },
    points: {
        color: '#f8a750',
        marginLeft: '5px'
    },

});

export default Points