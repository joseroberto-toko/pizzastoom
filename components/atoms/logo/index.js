import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'

const Logo = () => {
    const { navigate } = useNavigation();
    
    return(
        <TouchableOpacity onPress={() => navigate('Home')}>
            <Image
                source={require('../../../assets/logo.png')}
                style={{ width: 180, height: 42 }}
            />
        </TouchableOpacity>
    )
}

export default Logo