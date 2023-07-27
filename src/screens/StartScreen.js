import { Dimensions, Text, View, Image, StyleSheet} from 'react-native'
import React, { Component, useEffect, useState } from 'react'


const StartScreen = (props) => {
    const [imageHeight,setImageHeight] = useState(Dimensions.get('screen').height);

    useEffect(()=>{
      console.log("组件加载完成");
      setTimeout(()=>{
        setImageHeight(0);
      },2000)
    })
    
    return (
        <Image
          source={require('../assets/splash.jpg')}
          style={[{height:imageHeight},styles.splash]}
        />
    );
  };
  

  const styles = StyleSheet.create({
    splash:{
      flex:1,
      position:'absolute',
      backgroundColor:"black",
      zIndex:99,
      width:Dimensions.get('screen').width
    }
  })
  export default StartScreen;