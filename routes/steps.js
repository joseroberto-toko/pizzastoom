import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Fillings from '../components/pages/steps/fillings'
import Sizes from '../components/pages/steps/sizes'
import Revision from '../components/pages/steps/revision'

const StepsNavigation = createStackNavigator({
        Revision: { screen: Revision },    
        Fillings: { screen: Fillings },
        Sizes: { screen: Sizes },
    }
    
);

const StepsNavigator = createAppContainer(StepsNavigation);


export default StepsNavigator;
