import React from 'react'
import { View, Image, Text,useWindowDimensions } from 'react-native'

const Overview = ({item}) => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      width: width/2.4,
      height: height/5,
      backgroundColor: '#413F46',
      borderRadius: 10,
      justifyContent: 'space-around',
      paddingBottom: 40,
      margin: 9,
      paddingTop: 25
    }}>
      <View style={{
          flexDirection: 'row',
          paddingLeft: 20,
          alignItems: 'center'
      }}>
        <Image style={{
          width: 30,
          height: 30,
        }}
        source={{uri: 'https://tinyurl.com/39efm7zf'}} />
        <Text style={{ color: 'white'}}>{item.title}</Text>
      </View>
      <Text style={{
        color: 'white', 
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: '900',
      }}>10.26M</Text>
    </View>
  )
}
export { Overview }