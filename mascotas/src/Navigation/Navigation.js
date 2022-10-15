import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react'
import Perros from '../screens/Perros';
import Gatos from '../screens/Gatos';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {

  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#694fad' }}>
        <Tab.Screen name='Perros' component={Perros} options={{title:'Perros',  tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dog" color={color} size={26} />
          ),}}/>
        <Tab.Screen name='Gatos' component={Gatos} options={{title:'Gatos',
       tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="cat" color={color} size={26} />
      ),}}/>
    </Tab.Navigator>
  )
}