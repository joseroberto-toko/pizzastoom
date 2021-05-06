import React, {useEffect, useState} from 'react'
import { StyleSheet, View } from 'react-native'
import Pizza from '../../molecules/pizza'
import Title from '../../atoms/title'
import SubTitle from '../../atoms/subtitle'
import { useDispatch } from 'react-redux'
import { getPizzas } from '../../../store/pizzaSlice'

const Pizzas = (props) => {
    const dispatch = useDispatch();
    const [pizzas, setPizzas] = useState([]);
    
    useEffect(() => {
		dispatch(getPizzas()).then((action) => {
            if (action.payload) {
                setPizzas(action.payload)
            }
        });
	  
	}, [dispatch]);

    return(
        <>
            <Title title={'Monte sua pizza'}/>
            <SubTitle title={'Selecione sua massa'}/>
            <View style={styles.container}>
                {pizzas && pizzas.map((pizza, key) => {
                    if( !pizza.today ){
                        return(<Pizza navigate={props.navigate} pizza={pizza} key={key} />) 
                        }
                    })
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems:'flex-start',
    },
  })

export default Pizzas