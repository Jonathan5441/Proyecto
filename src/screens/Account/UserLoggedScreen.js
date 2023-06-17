import { View, Text,Image } from 'react-native'
import React from 'react'

const UserLoggedScreen = () => {
  return (
    <View>
      <Image source={{uri:"https://media.tenor.com/Ry9PSsQTcxoAAAAd/who-are-you-cat.gif"}} style={{height: 500,width: "100%"}}/>
      <Text style={{fontSize:20,marginHorizontal:70,marginTop:40}}>Has iniciado sesion con exito!</Text>
    </View>
  )
}

export default UserLoggedScreen