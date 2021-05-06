import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet,View, Image, SafeAreaView, TouchableOpacity, Text } from 'react-native'
import { Card, Paragraph } from 'react-native-paper'
import Logo from '../../../atoms/logo'
import Points from '../../../molecules/points'
import Title from '../../../atoms/title'
import SliderPanel from '../../../molecules/slider-panel'
import StepsNav from '../../../molecules/steps-nav'
import Revision from '../../../molecules/revision'
import SubTitle from '../../../atoms/subtitle'
import { useSelector } from 'react-redux'

const RevisionScreen = () => {
    const [revision, setRevision] = useState(false)
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
                <Title title={'Revisão'}/>
                <StepsNav check="revision"/>
                <SubTitle title={'Confira seu pedido abaixo:'}/>
                <Text style={styles.title}>Pedido</Text>
                <Revision/>
                <View style={styles.btnBox}>
                  <TouchableOpacity style={styles.btn} onPress={() => setRevision(true)}>
                    <Text style={styles.btnText}>Fazer Pedido</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </SliderPanel>
          <StatusBar style="auto" />
          {revision && (
            <View style={styles.dialog}>
              <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                  <View>
                    <Image 
                      source={require('../../../../assets/success.png')} 
                      style={styles.ImgSucces}
                    />
                  </View>
                  <Text style={styles.titleSuccess}>Parabéns</Text>
                  <Paragraph style={styles.paragraph}>Sua deliciosa pizza logo estará em sua casa.</Paragraph>
                  <Text style={styles.tks}>Obrigado!</Text>
                </Card.Content>
              </Card>
            </View>
          )}
        </SafeAreaView>
    );
}

RevisionScreen.navigationOptions = {
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
  ImgSucces:{
    width: 120,
    height: 120,
  },
  content: {
    width: '100%',
    display: 'flex',
    position: 'relative',
  },
  btnBox: {
    position: 'relative',
    top: 230,
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
  },
  title: {
    fontSize: '16px',
    color: '#0074bc',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  dialog:{
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.9)',
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 998,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: "75%",
    height: 300,
   
  },
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  titleSuccess: {
    fontSize: 20,
    color: '#0074bc',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  tks: {
    fontSize: 16,
    color: '#0074bc',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  paragraph:{
    fontSize: 16,
    textAlign: 'center'
  }
});

export default RevisionScreen
  
 