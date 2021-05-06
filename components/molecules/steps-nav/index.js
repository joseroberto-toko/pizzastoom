import React from 'react'
import { StyleSheet, View } from 'react-native'
import { List } from 'react-native-paper'
import ListItem from '../../atoms/list-item';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: '5px',
        height: '46px',
        width: '100%',
        position: 'relative',
        borderTopColor: '#0074bc',
        borderBottomColor: '#0074bc',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 15
    },
  });

const stepsItens = [
    {key:'filling',title: 'Recheios'},
    {key:'size',title: 'Tamanhos'},
    {key:'revision',title: 'Revisão'},
]; 
const StepsNav = (props) => {
    const {check} = props
    return (
        <View style={styles.container}>
            {stepsItens.map((item) => <ListItem key={item.key} item={item.key} title={item.title} check={check} />)}
        </View>
    )
}

export default StepsNav