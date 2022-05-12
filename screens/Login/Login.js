import React from 'react'
import { View, useWindowDimensions, Image } from 'react-native'
import { UserInput } from '../../components/Login/UserInput'
const Login = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'black'
    }}>
      <View style={{
        marginTop: height/8,
        height: height/1.5,
        alignItems: 'center'
      }}>
        <Image 
          source={{uri: 'https://tinyurl.com/ysed392s'}}
          style={{
            width:155,
            height:23,

          }} />
        <Image 
          source={{uri: 'https://tinyurl.com/yckhnbwm'}}
          style={{
            height: 55,
            width: 55
          }} />
        <View>
          <UserInput/>
        </View>
      </View>
    </View>
  )
}

export default Login