import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator, Keyboard, Pressable } from 'react-native';
import { Color } from '../../../../styles/global';
import { Input } from '../../../components/input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useForm, Controller } from "react-hook-form";
import { supabase } from '../../../configs/supabaseConfig';

const SignUp = ({ navigation }) => {

  const [isLoading, setIsLoading] = useState(false)

  const { control, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      Name: '',
      Email: '',
      Password: '',
      Password2: '',
    }
  });

  const getSignUpWithSupabase = async(req) => {
    
    setIsLoading(prev => !prev)
    try {
          const {data, error} = await supabase.auth.signUp({
          email: req.Email,
          password: req.Password,
          options: {
          data: {
              name: req.Name,
          }
        }
          })
          
      if(error){
        console.log(error)
      }
      } catch (e) {
        console.log(e)
      }
    setIsLoading(prev => !prev)
  }



   return (
      <View style={{flex:1, backgroundColor: Color.white, paddingHorizontal: 24}} >
        <KeyboardAwareScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>
              <View style={{marginVertical: 80}} onPress={()=>console.log(';ho')}>
                  <Text style={{fontSize: 32, fontWeight: 'bold'}}>Create an account</Text>
                  <Text style={{fontSize: 14, color: "#8E8E93" }}>Let's get started with out app!</Text>
              </View> 
            
                  <View className='formContainer'>
                      <View className="NameContainer" style={{marginBottom: 16}}>
                                <Controller
                                  name="Name"
                                  control={control}
                                  rules={{
                                    required: true,
                                  }}
                                  render={({ field: { onChange, onBlur, value } }) => (
                                    <Input title={'Name'} placeholder={'Name'} secureTextEntry={false} onChange={onChange} value={value}/>
                                  )}
                                />
                                {errors?.Name?.type=='required' && <Text style={{color: Color.primary, fontSize:12, paddingVertical: 6}}>Email is required.</Text>}
                               
                        </View>
                        <View className="EmailContainer" style={{marginBottom: 16}}>
                              <Controller
                                          name="Email"
                                          control={control}
                                          rules={{
                                            required: true,
                                            pattern: {
                                              value: /\S+@\S+\.\S+/,
                                              message: "Entered value does not match email format"
                                            },
                                          }}
                                          render={({ field: { onChange, onBlur, value } }) => (
                                            <Input title={'Email'} placeholder={'Email'} secureTextEntry={false} onChange={onChange} value={value}/>
                                          )}
                                        />
                                {errors?.Email?.type=='required' && <Text style={{color:  Color.primary, fontSize:12, paddingVertical: 6}}>Email is required.</Text>}
                               {errors?.Email?.type=='pattern' && <Text style={{color:  Color.primary, fontSize:12, paddingVertical: 6}}>{errors.Email.message}</Text>}
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
                        <View className="PwContainer2" style={{marginBottom: 16}}>
                                  <Controller
                                  name="Password2"
                                  control={control}
                                  rules={{
                                    required: true,
                                    validate: {
                                      match: value => value === watch("Password") || 'Passwords do not match'
                                    }
                                  }}
                                  render={({ field: { onChange, onBlur, value } }) => (
                                    <Input title={'Confirm Password'} placeholder={'Confirm Password'} secureTextEntry={true}  onChange={onChange} value={value}/>
                                  )}
                                />
                                {errors?.Password2?.type=='required' && <Text style={{color:  Color.primary, fontSize:12, paddingVertical: 6}}>Password is required.</Text>}
                                {errors?.Password2?.type=='match' && <Text style={{color:  Color.primary, fontSize:12, paddingVertical: 6}}>{errors.Password2.message}</Text>}
                                
                        </View>                 
                  </View>

                  <TouchableOpacity onPress={handleSubmit(getSignUpWithSupabase)}>
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
          </KeyboardAwareScrollView>
      </View>
   )
}



export default SignUp