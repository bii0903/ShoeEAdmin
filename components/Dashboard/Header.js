import React from 'react'
import { View, Text, Image, useWindowDimensions, TouchableOpacity } from 'react-native'

const Header = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{ 
      height: height > width ? height / 8 : height / 5,
      backgroundColor: 'black',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <View style={{
        width: '40%',
        backgroundColor: '#413F46',
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Image 
          style={{
            width: 50,
            height: 50,
            borderRadius: 25
          }}
          source={{uri: 'https://tinyurl.com/yckuvz5w'}}/>
        <Text style={{
          paddingLeft: 10,
          color: 'white'
        }}>Thành Bii</Text>
      </View>
      <TouchableOpacity style={{
        backgroundColor: '#413F46',
        padding: 16,
        borderRadius: 100,
      }}>
        <Image
          style={{
            width: 18,
            height: 18
          }}
          source={{uri: 'https://tinyurl.com/mwj9ub7k'}}/>
      </TouchableOpacity>
    </View>
  )
}

export { Header }