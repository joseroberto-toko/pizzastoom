import React, {useState, useEffect} from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { setPizzaSize, setPizzaFillings } from '../../../store/pizzaSlice'

const FormChecks = (props) => { 
    const { format } = props
    const sizes = useSelector(({ StoomApp }) => StoomApp.stoom.sizes);
    const pizzaSize = useSelector(({ StoomApp }) => StoomApp.stoom.pizzaSize);
    const pizzaFilling = useSelector(({ StoomApp }) => StoomApp.stoom.pizzaFilling);
    const pizza = useSelector(({ StoomApp }) => StoomApp.stoom.pizza);
    const dispatch = useDispatch();

    const [data, setData] = useState([])

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    
    function getActionFormat(obj){
        setData([]);
        let newData = [];
        switch (format) {
            case 'size':
                sizes.map((item) => {
                    if(item.id === obj.id) {
                        item = {...item, active: obj.id }
                    }
                    newData.push(item);
                })
                setData(newData);
                dispatch(setPizzaSize(obj.title))
            break; 
            case 'mass':
                let newFilling = [];
                data.map((item) => {
                    if(item.id === obj.id) {
                        if(!item.active){
                            item = {...item, active: (obj.id + 1) }
                        } else {
                            item = {...item, active: false }
                        }
                        
                    }
                    newData.push(item);
                })
                setData(newData)
                newData.map((item) => {
                    if(item.active > 0){
                        newFilling.push(item.title)
                    }
                })
                dispatch(setPizzaFillings(newFilling))
            break;    
                
        }
    }

    useEffect(() => {
        if(format === 'size'){
            setData(sizes)
        }
        if(format === 'mass'){
            let newData = [];
            pizza.items.map((item, key) => {
                item = { id: (key + 1), title: capitalize(item) }
                newData.push(item);
            })

            setData(newData)
        }
    }, [])

    return( 
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {data && data.map((item,key) => <Checkbox.Item 
                    key={key} 
                    label={item.title} 
                    color="rgba(0, 116, 188,1)" 
                    onPress={ () => getActionFormat(item) } 
                    status={item.active ? 'checked' : 'unchecked'}                    
                    />
                )}
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
        top: 120,
        height: 200,
        maxHeight: 300,
    },
});


export default FormChecks