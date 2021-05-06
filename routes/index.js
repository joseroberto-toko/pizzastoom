import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import StepsNavigator from './steps'
import HomeScreen from '../components/pages/home'

const AppNavigation = createStackNavigator({
    Home: { screen: HomeScreen },    
    Steps: { 
            screen: StepsNavigator,
            navigationOptions: {
                headerShown: false,
                header: null,         
                headerMode: 'none',   
                headerVisible: 'none' 
              }
         },
         
    }
    
);

const AppNavigator = createAppContainer(AppNavigation);


export default AppNavigator;