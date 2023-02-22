import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../screens/authScreens/signIn';
import SignUp from '../../screens/authScreens/signUp';
import ForgetPassword from '../../screens/authScreens/forgetPassword';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShadowVisible: false, headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShadowVisible: false, headerShown: false}}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShadowVisible: false, headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default AuthNavigation;