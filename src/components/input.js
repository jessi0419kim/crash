import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Color } from '../../styles/global';


export const Input = ({title, placeholder, secureTextEntry, onChange, value}) => {

    const [isFocus, setIsFocus] = useState(false)

    return(
            <View>
                     <Text style={{paddingBottom: 12, fontWeight: '600'}}>{title}</Text>
                     <TextInput 
                            style={{height:52, paddingVertical: 10,  paddingHorizontal:20,
                                    borderRadius: 30, 
                                    borderWidth: 1, 
                                    borderColor: isFocus? Color.primary: Color.grey1,
                                    outlineStyle: 'none'}}
                            selectionColor={Color.primary}
                            placeholderTextColor={Color.grey1}
                            onFocus={()=>setIsFocus(prev=>!prev)}
                            onBlur={()=>setIsFocus(prev=>!prev)}
                            placeholder={placeholder}
                            secureTextEntry={secureTextEntry}
                            onChangeText={onChange}
                            value={value}
                                    />
            </View>
    )
}

