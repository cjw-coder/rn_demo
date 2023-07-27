import { StyleSheet, Text, View ,Image, Dimensions} from 'react-native'
import React, { Component } from 'react'
import WaterfallFlow from 'react-native-waterfall-flow'
import dataList from '../assets/imgList'


export default class HomeScreen extends Component {

  
  constructor(props){
    super(props);
  }

  renderItem = ({item}) => {
    return(
      <View>
        <Image source={{uri:item.thumbURL}} style={{height:item.height/8,width:Dimensions.get('screen').width/3,margin:1}}></Image>
      </View>
    )
  }

  render() {
    return (
        <View style={styles.container}>

        <WaterfallFlow
          data={dataList}
          renderItem={this.renderItem}
          numColumns={3}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})