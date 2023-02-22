import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './authNavigation';
import MainNavigation from './mainNavigation';

const Navigations = () => {

    const [isLogin, setIsLogin] = useState(false)

    return(
        <NavigationContainer>
            {isLogin? <MainNavigation />: <AuthNavigation />} 
        </NavigationContainer>
    )
}

export default Navigations