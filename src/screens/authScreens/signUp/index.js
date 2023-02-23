import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator, Keyboard, Pressable } from 'react-native';
import { Color } from '../../../../styles/global';
import { Input } from '../../../components/input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useForm, Controller } from "react-hook-form";

const SignIn = ({ navigation }) => {

  const [isLoading, setIsLoading] = useState(false)
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      Email: '',
      Password: ''
    }
  });

  const getSignIn = (data) => {
    console.log(data)
  }


  return (
      <View style={{flex:1, backgroundColor: Color.white, paddingHorizontal: 24}} >
        <KeyboardAwareScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>
           
              <View style={{marginVertical: 80}}>
                  <Text style={{fontSize: 32, fontWeight: 'bold'}}>Welcome</Text>
                  <Text style={{fontSize: 14, color: "#8E8E93" }}>Let's get started with out app!</Text>
              </View> 
            
                  <View className='formContainer'>
                        <View className="EmailContainer" style={{marginBottom: 16}}>
                                <Controller
                                    name="Email"
                                    control={control}
                                    rules={{
                                      required: true,
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                      <Input title={'Email'} placeholder={'Email'} secureTextEntry={false} onChange={onChange} value={value}/>
                                    )}
                                  />
                                {errors?.Email?.type=='required' && <Text style={{color: Color.primary, fontSize:12, paddingVertical: 6}}>Email is required.</Text>}
                        </View>

                        
                        <View className="PwContainer" style={{marginBottom: 16}}>
                               <Controller
                                    name="Password"
                                    control={control}
                                    rules={{
                                      required: true,
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                      <Input title={'Password'} placeholder={'Password'} secureTextEntry={true} onChange={onChange} value={value}/>
                                    )}
                                  />
                                  {errors?.Password?.type=='required' && <Text style={{color:  Color.primary, fontSize:12, paddingVertical: 6}}>Password is required.</Text>}
                        </View>                
                  </View>

                  <TouchableOpacity onPress={() => {navigation.navigate("ForgetPassword")}}>
                      <View style={{alignItems: 'flex-end', marginTop: 4}}>
                                <Text style={{ fontsize: 14, color:  Color.primary,}}>Forget Password?</Text>         
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={handleSubmit(getSignIn)}>
                                <View  style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                                                height: 52, borderRadius: 24, marginVertical: 24,
                                                backgroundColor: Color.primary}} >
                                  {isLoading
                                  ? <ActivityIndicator size="small" color={Color.white}/>
                                  : <Text style={{ fontSize: 18,  fontWeight: '600', color: Color.white}}>Sign In</Text>}
                                </View>
                  </TouchableOpacity >
                  <View style={{marginVertical:12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 14,  color: Color.primary}}>Don't have an account?  </Text>
                    <TouchableOpacity onPress={() => {navigation.navigate("SignUp")}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: Color.primary}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>  
      
          </KeyboardAwareScrollView>
      </View>
    
  );
}

export default SignIn