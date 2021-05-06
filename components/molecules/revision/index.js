import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { useSelector } from 'react-redux'

const Revision = (props) => {
    const pizzaMass = useSelector(({ StoomApp }) => StoomApp.stoom.pizzaMass);
    const pizzaFillings = useSelector(({ StoomApp }) => StoomApp.stoom.pizzaFillings);
    const pizzaSize = useSelector(({ StoomApp }) => StoomApp.stoom.pizzaSize);
    return( 
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.label}>Massa</Text>
                <Text style={styles.item}>{pizzaMass}</Text>
                <Text style={styles.label}>Recheios</Text>
                <Text style={styles.item}>{pizzaFillings && pizzaFillings.map((item,key) => <Text key={key}>{item}, </Text>)}</Text>
                <Text style={styles.label}>Tamanhos</Text>
                <Text style={styles.item}>{pizzaSize}</Text>
            </View>
        </ScrollView>
    )
}    

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: '5px',
        width: '100%',
        height: 'auto',
        position: 'relative',
        flexDirection: 'column',
    },
    scrollView: {
        position: 'absolute',
        width: '100%',
        top: 150,
        maxHeight: 400,
    },
    
      label: {
        fontSize: '12px',
        color: '#0074bc',
        fontWeight: 'bold',
      },  
    checkTitle:{
        fontSize: 12,
        fontWeight: 500,
        marginLeft: 0,
    },
    item: {
        fontSize: '13px',
        color: '#333',
        paddingLeft: 10,
        marginBottom: 15,
        marginTop: 5,
      },  
  });

export default Revision