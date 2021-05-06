import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet,View, Image, SafeAreaView, TouchableOpacity, Text } from 'react-native'
import Logo from '../../../atoms/logo'
import Points from '../../../molecules/points'
import Title from '../../../atoms/title'
import SliderPanel from '../../../molecules/slider-panel'
import StepsNav from '../../../molecules/steps-nav'
import FormChecks from '../../../molecules/form-checks'
import SubTitle from '../../../atoms/subtitle'
import {  useSelector } from 'react-redux'

const FillingScreen = ({ navigation }) => {
  const { navigate } = navigation;
  const pizza = useSelector(({ StoomApp }) => StoomApp.stoom.pizza);
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.image}>
              {pizza && (<>
                <Image 
                  source={require(`../../../../assets/${pizza.image}`)} 
                  style={styles.starBg}
                />
                <Text style={styles.pizza}>Pizza {pizza.title}</Text>
                </>
              )}
            </View>
        <SliderPanel showPanel={true}>
            <View style={styles.content}>
              <Title title={'Recheios'}/>
              <StepsNav check="filling"/>
              <SubTitle title={'Selecione os recheios abaixo:'}/>
              <FormChecks format="mass"/>
              <View style={styles.btnBox}>
                <TouchableOpacity style={styles.btn} onPress={() => navigate('Sizes')}>
                  <Text style={styles.btnText}>Próximo</Text>
                </TouchableOpacity>
              </View>
            </View>
            
          </SliderPanel>
        <StatusBar style="auto" />
      </SafeAreaView>
  );
}

FillingScreen.navigationOptions = {
  headerTitle: () => <Logo/>,
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
      padding: '10px',
      height: '100%',
      width: '100%',
      marginTop: '5px',
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center'
    },
    image:{
      display: 'flex',
      width: '100%',
      height: 260,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: 0,
      top: '-5px',
  },
  pizza:{
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,.9)',
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 20,
    top: '70%',
    fontSize: 18
  },
    starBg:{
      width: '100%',
      height: 260,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      width: '100%',
      display: 'flex',
      position: 'relative',
    },
    btnBox: {
      position: 'relative',
      top: 250,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn:{
      borderRadius: 25,
      backgroundColor: '#0074bc',
      padding: 10,
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnText:{
      color: '#FFF',
      fontWeight: 600
    }
  
});

export default FillingScreen
  
 