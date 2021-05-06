import React from 'react'
import '../../../store/fake-db'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ScrollView, View } from 'react-native'
import Logo from '../../atoms/logo'
import Points from '../../molecules/points'
import PizzaToday from '../../organisms/pizza-today'
import Pizzas from '../../organisms/pizzas'

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  
  return (
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <PizzaToday navigate={navigate}/>
            <Pizzas navigate={navigate}/>
            <StatusBar style="auto" />
          </View>
        </ScrollView>
    );
  }

HomeScreen.navigationOptions = {
    headerTitle: () => <Logo />,
    headerRight: () => <Points points={0}/>,
    headerLeft: () => null,
    headerStyle: {
      backgroundColor: '#0074bc',
      height: '120px'
    },
    headerTintColor: '#FFF',
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    padding: '10px',
    height: 'auto',
    width: '100%',
    marginTop: '5px'
  },
  scrollView: {
    height: '100%',
    position: 'absolute',
    width: '100%'
  },
})

export default HomeScreen
  
 