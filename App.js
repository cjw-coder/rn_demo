import 'react-native-gesture-handler'
import React, { Component, createRef } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import VideoScreen from './src/screens/VideoScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SplashScreen from 'react-native-splash-screen';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import StartScreen from './src/screens/StartScreen';



const Tab = createBottomTabNavigator();

export default class app extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){

  }
  render() {

    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StartScreen/>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon:({ focused, color, size}) => {
                let iconName;
                if(route.name == "首页"){
                  iconName = focused ? 'add-circle' : 'add-circle-outline'
                }else if(route.name == "视频"){
                  iconName = focused ? 'caret-forward-circle' : 'caret-forward-circle-outline'
                }else{
                  iconName = focused ? 'person' : 'person-outline'
                }
                return <Ionicons name={iconName} size={size} color={color}/>
              }
            })}
          > 
            <Tab.Screen name="首页" component={HomeScreen}/>
            <Tab.Screen name="视频" component={VideoScreen}/>
            <Tab.Screen name="我的" component={ProfileScreen}/>
          </Tab.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    );
  }
}
