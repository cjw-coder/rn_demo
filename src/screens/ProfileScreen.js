import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';

const ProfileScreen = () => {
  const [data ,setData ] = new useState([
    { label: '', value: '', type: 'avatar' },
    { label: '邮箱', value: '' },
    { label: '地址', value: '' },
    { label: '注册时间', value: '' },
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  //模拟请求
  const fetchData = async () => {
    try {
      const response = await fetch('https://getman.cn/mock/route/to/demo');
      if(response.status == 200){
        setData([
          { label: '', value: '小度', type: 'avatar' },
          { label: '邮箱', value: 'sdaf124@163.com' },
          { label: '地址', value: 'xx 省xx 市' },
          { label: '注册时间', value: '2011-1' },
        ]);
        console.log(data)
      }
    } catch (error) {
      console.error('请求失败,错误信息为：', error);
    }
  };


  const renderProfileInfo = ({ item }) => {
    if (item.type === 'avatar') {
      return (
        <View style={styles.row}>
          <Image source={require('../assets/splash.jpg')} style={styles.avatar} />
          <View style={styles.infoContainer}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.row}>
        <Text style={styles.label}>{item.label}</Text>
        <Text style={styles.value}>{item.value}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderProfileInfo}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 30,
    flex:1,
    alignItems: 'center',
  },
  label: {
    width: Dimensions.get("screen").width/2,
    fontWeight: 'bold',
  },
  value: {
    flex: 1,
    marginLeft: 40,
  },
});

export default ProfileScreen;