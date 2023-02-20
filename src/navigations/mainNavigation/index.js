import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/mainScreens/home';
import Profile from '../../screens/mainScreens/profile';
import Upload from '../../screens/mainScreens/upload';
import Users from '../../screens/mainScreens/users';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Upload" component={Upload} />
        <Tab.Screen name="Users" component={Users} />
      </Tab.Navigator>
  );
}

export default MainNavigation;