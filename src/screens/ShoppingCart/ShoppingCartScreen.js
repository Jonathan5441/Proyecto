import { View, Text } from 'react-native'
import React, {useState,useEffect} from 'react'
import { ListItem } from '@rneui/base'

const ShoppingCartScreen = ({newProduct}) => {
  const [products,setProducts]=useState([])

  useEffect(()=>{
    if(newProduct !=null){
      setProducts([...products,newProduct])
    }
  },[newProduct])
  return (
    <View>
      {products.map((product)=>{
        return(
          <ListItem>
            <ListItem.Content>
            <ListItem.Title>{product.name}</ListItem.Title>
            <ListItem.Subtitle>{product.price}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )
      })}
    </View>
  )
}

export default ShoppingCartScreen