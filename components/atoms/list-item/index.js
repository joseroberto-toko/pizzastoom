import React from 'react'
import { StyleSheet } from 'react-native'
import { List } from 'react-native-paper'

const styles = StyleSheet.create({
    checkTitle:{
        fontSize: 12,
        fontWeight: 500,
        marginLeft: 0,
    },
    icon:{
        borderRadius: 100,
        width: 26,
        height: 26,
        backgroundColor: 'rgba(0, 116, 188,.2)',
        marginRight: 0
        
    },
    iconCheck:{
        borderRadius: 100,
        width: 26,
        height: 26,
        backgroundColor: 'rgba(0, 116, 188,.8)',
        marginRight: 0
    } 
  })

const ListItem = (props) => {
    const {check,title,item} = props
    return (
        <List.Item 
            title={title}
            titleStyle={styles.checkTitle} 
            left={props => <List.Icon {...props} style={check === item ? styles.iconCheck : styles.icon} 
            icon="check"
            color={check === item ? "#FFF" : "#0074bc"}
            />}
        />
    )
}

export default ListItem