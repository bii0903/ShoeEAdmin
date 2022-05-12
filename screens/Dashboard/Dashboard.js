import React from 'react'
import { View, FlatList, useWindowDimensions } from 'react-native'
import { Header } from '../../components/Dashboard/Header'
import { Overviews } from '../../components/Dashboard/Overviews'

const Dashboard = () => {
  const { height, width } = useWindowDimensions()
  console.log(width < height ? 'xoay doc' : 'xoay ngang')
  return (
    <FlatList 
      data={[]}
      renderItem={null}
      ListHeaderComponent={
        <View style={{ paddingHorizontal: 16, backgroundColor: 'black' }}>
          <Header />
          <Overviews/>
        </View>
      }/>
  )
}

export default Dashboard