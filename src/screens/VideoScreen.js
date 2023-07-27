import { ActivityIndicator, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'
import Video from 'react-native-video'



const VideoScreen = (props) => {

  //实现加载效果
  const [isLoading,setIsLoading] = useState(true);

  const handleLoadStart = () =>{
    setIsLoading(true)
  }
  const handleLoad = () =>{
    setIsLoading(false);
  }


  return (
     <View style={{flex:1}}>
        {isLoading && ( <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}>
          <ActivityIndicator
          size="large"
          color="white"/>
          </View>
        )}

        <Video 
        source={{uri:"https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4"}}
        resizeMode="contain"
        controls={true}
        style={styles.backgroundVideo}
        onLoadStart={handleLoadStart}
        onLoad={handleLoad}
        >
        </Video>
     </View>
  )
}
export default VideoScreen;


var styles = StyleSheet.create({
  backgroundVideo: {
    width:Dimensions.get("screen").width,
    flex:1,
    zIndex:-1,
    backgroundColor:'black'
  },
});