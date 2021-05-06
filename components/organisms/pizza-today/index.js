import React,{useState , useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import Photo from '../../molecules/photo'
import Title from '../../atoms/title'
import { useDispatch } from 'react-redux'
import { getPizzaToday, setPizza, setPizzaMass, setPoint } from '../../../store/pizzaSlice'

const PizzaToday = (props) => {
    const dispatch = useDispatch()
    const [pizzaToday, setPizzaToday] = useState([])

    useEffect(() => {
		dispatch(getPizzaToday()).then((action) => {
            if (action.payload) {
                setPizzaToday(action.payload)
            }
        })
	}, [dispatch])

    function nextPizzaStep(pizza){
        dispatch(setPizza(pizza))
        dispatch(setPoint())
        dispatch(setPizzaMass(pizzaToday.title))
        props.navigate('Fillings')
    }
    
    return (
        <>
            <Title title={'Pizza do dia'}/>
            <View style={styles.container}>
                <Photo source={pizzaToday.image}/>
                <View style={styles.description}>
                    <Text style={styles.title}>Pizza {pizzaToday.title}</Text>
                    <Text style={styles.item}>Massa:</Text>
                    <Text style={styles.text}>{pizzaToday.title}</Text>
                    <Text style={styles.item}>Ingredientes:</Text>
                    <Text style={styles.text}>{pizzaToday?.items && pizzaToday.items.map((item,key) => <Text key={key}>{item}, </Text>)}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => nextPizzaStep(pizzaToday)}>
                    <Text style={{color: '#FFF'}}>Quero</Text>
                </TouchableOpacity>
                <View style={styles.star}>
                    <ImageBackground source={require('../../../assets/star.png')} style={styles.starBg}>
                        <Text style={styles.starText}>
                            <Text style={styles.starTextPoints}>50</Text> 
                            pontos
                        </Text>
                    </ImageBackground>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'rgba(248, 167, 80,.3)',
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
    },
    item: {
        fontSize: '12px',
        color: '#0074bc',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 2
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
    star:{
        display: 'flex',
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        top: 10,
    },
    starBg:{
        width: 84,
        height: 84,
        justifyContent: 'center',
        alignItems: 'center',
    },
    starText: {
        fontSize: '10px',
        color: '#FFF',
        display: 'flex',
    },
    starTextPoints:{
        fontWeight: 'bold',
        position: 'absolute',
        left: 33,
        top: 27
    }
  })

export default PizzaToday