import React from 'react'
import { View, Image, Text, useWindowDimensions, FlatList } from 'react-native'
import { Overview } from './Overview'
const overViews = [
  {
    image: 'https://tinyurl.com/39efm7zf',
    title: 'Imcome',
    value: '10.26M'
  },
  {
    image: 'https://tinyurl.com/2p8p4n2k',
    title: 'Product',
    value: '1.234K'
  },
  {
    image: 'https://tinyurl.com/2p8fwfze',
    title: 'Customers',
    value: '9.301K'
  },
  {
    image: 'https://tinyurl.com/36kza98j',
    title: 'Orders',
    value: '300K'
  }
]
const Overviews = () => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      height: height/2, 
      backgroundColor: 'black',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}>
    { overViews.map((overView, index) => <Overview key={index} item={overView}/>) }
    </View>
  )
}
export { Overviews } 