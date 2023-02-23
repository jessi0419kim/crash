import {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './authNavigation';
import MainNavigation from './mainNavigation';
import { supabase } from '../configs/supabaseConfig';

const Navigations = () => {

    const [session, setSession] = useState(null);
	
	
	useEffect( ()=>{
		 supabase.auth.getSession().then(({data:{session}}) => {
		  setSession(session)	
		 })
		
		supabase.auth.onAuthStateChange( async(event, session) => {
		   setSession(session)
		})
	},[]);
  

    return(
        <NavigationContainer>
            {session? <MainNavigation />: <AuthNavigation />} 
        </NavigationContainer>
    )
}

export default Navigations