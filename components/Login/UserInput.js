import React from 'react';
import { View, useWindowDimensions, Text, Image, TextInput } from 'react-native'

const UserInput = () => {
  const { height, width } = useWindowDimensions()
  return ( 
    <View>
      <Text style={{
        color: 'white',
        fontSize: 16,
        padding: 8
      }}>Mã quản lý: </Text>
      <View style={{      }}>
        <TextInput style={{
          backgroundColor: '#413F46', 
          width: width/1.3,
          height: height/12,
          justifyContent: 'center',
          paddingLeft: width/8,
          borderRadius: width/1.3/2,
          color: 'white',
          }}>
          </TextInput>
        <Image
          source={{uri: 'https://tinyurl.com/3dmy6af7'}}
          style={{
            width: 25,
            height: 25,
            position: 'absolute',
            top: '27%',
            left: '5%'
          }}
        />
      </View>
    </View>
   );
}

export {UserInput};