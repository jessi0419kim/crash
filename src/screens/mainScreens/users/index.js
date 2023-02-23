import React, { useState } from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Color } from '../../../../styles/global';
import { supabase } from '../../../configs/supabaseConfig';

const Users = () => {

  const [isLoading, setIsLoading] = useState(false)

  const signOutWithSupabase = async() => {
    setIsLoading(prev=>!prev)
    await supabase.auth.signOut()
    setIsLoading(prev=>!prev)
  } 


  return (
      <View  style={{flex:1, backgroundColor: Color.white, paddingHorizontal: 20}}>
              <TouchableOpacity onPress={signOutWithSupabase}>
                       <View  style={{flexDirection: 'row', 
                                      justifyContent: 'center', 
                                      alignItems: 'center',
                                      height: 52, borderRadius: 24, marginVertical: 24,
                                      backgroundColor: Color.primary}} >
                            {isLoading
                            ? <ActivityIndicator size="small" color={Color.white}/>
                            : <Text style={{ fontSize: 18,  fontWeight: '600', color: Color.white}}>Sign Out</Text>}
                         </View>
              </TouchableOpacity >
      </View>
  );
}




export default Users