import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator, Keyboard, Pressable } from 'react-native';
import { Color } from '../../../../styles/global';
import { Input } from '../../../components/input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SignUp = ({ navigation }) => {

  const [isLoading, setIsLoading] = useState(false)


   return (
      <View style={{flex:1, backgroundColor: Color.white, paddingHorizontal: 24}} >
        <KeyboardAwareScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>
           <Pressable onPress={Keyboard.dismiss}>
              <View style={{marginVertical: 80}} onPress={()=>console.log(';ho')}>
                  <Text style={{fontSize: 32, fontWeight: 'bold'}}>Create an account</Text>
                  <Text style={{fontSize: 14, color: "#8E8E93" }}>Let's get started with out app!</Text>
              </View> 
            
                  <View className='formContainer'>
                      <View className="NameContainer" style={{marginBottom: 16}}>
                                <Input title={'Name'} placeholder={'Name'} secureTextEntry={false}/>
                        </View>
                        <View className="EmailContainer" style={{marginBottom: 16}}>
                                <Input title={'Email'} placeholder={'Email'} secureTextEntry={false}/>
                        </View>
                        <View className="PwContainer" style={{marginBottom: 16}}>
                                <Input title={'Password'} placeholder={'Password'} secureTextEntry={true}/>
                        </View>  
                        <View className="PwContainer2" style={{marginBottom: 16}}>
                                <Input title={'Confirm Password'} placeholder={'Confirm Password'} secureTextEntry={true}/>
                        </View>                 
                  </View>

                  <TouchableOpacity >
                                <View  style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                                                height: 52, borderRadius: 24, marginVertical: 24,
                                                backgroundColor: Color.primary}} >
                                  {isLoading
                                  ? <ActivityIndicator size="small" color={Color.white}/>
                                  : <Text style={{ fontSize: 18,  fontWeight: '600', color: Color.white}}>Sign Up</Text>}
                                </View>
                  </TouchableOpacity >
                  <View style={{marginVertical:12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 14,  color: Color.primary}}>Already have an account?  </Text>
                    <TouchableOpacity onPress={() => {navigation.navigate("SignIn")}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: Color.primary}}>Sign In</Text>
                    </TouchableOpacity>
                </View>  
           </Pressable>
          </KeyboardAwareScrollView>
      </View>
   )
}



export default SignUp