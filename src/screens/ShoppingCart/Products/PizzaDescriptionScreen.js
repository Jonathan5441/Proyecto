import { View, Text,Image } from 'react-native'
import React from 'react'
import { styles } from './DescriptionScreenStyles'
import { Button } from '@rneui/base'
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils/screenNames"

const PizzaDescriptionScreen = ({route,setNewProduct}) => {
  const navigation = useNavigation();
  const product=route.params;
  const agregarCarro=()=>{
    setNewProduct(product)
    navigation.navigate(screen.restaurant.restaurants)
  }
  return (
    <View>
      <Image source={require("../../../../assets/img/lasaña.jpg")} style={styles.image}/>
      <Text style={{fontSize:40,marginHorizontal:75,marginTop:20}}>Pizza Familiar</Text>
      <Text style={styles.text}>Nuestra pizza familiar es una deliciosa combinación de salsa de tomate casera, queso mozzarella fresco y jamon. La corteza se hornea a la perfección para obtener una textura crujiente y dorada. Esta pizza es perfecta para aquellos que buscan una opción rica y economica. ¡Prueba nuestra pizza familiar hoy mismo!</Text>
      <Button containerStyle={styles.button} buttonStyle={styles.buttoncolor} title="Añadir al carrito" onPress={agregarCarro}/>
    </View>
  )
}

export default PizzaDescriptionScreen