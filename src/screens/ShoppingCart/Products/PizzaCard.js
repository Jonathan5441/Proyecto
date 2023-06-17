import { View, Image } from 'react-native'
import {screen} from "../../../utils/screenNames"
import React from 'react'
import { Card,Button,Icon,Text } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";

const PizzaCard = () => {
    const navigation = useNavigation();
    const onPress=()=>{
        navigation.navigate(screen.restaurant.pizzadescription)
    }
    return (
    <View>
        <Card>
            <Card.Title style={{fontSize:30}}>Pizza Familiar</Card.Title>
            <Card.Divider />
            <Card.Image
                style={{ padding: 0 }}
                source={{uri:'https://www.saborusa.com/ni/wp-content/uploads/sites/19/2019/11/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png',}}
            />
            <Text style={{ marginBottom: 10, padding:5 }}>
                Rica pizza de pepperoni o jamon con una masa gruesa y crujiente.
            </Text>
            <Button
                icon={
                <Icon
                    type="material-community"
                    name="food-outline"
                    color="#ffffff"
                    iconStyle={{ marginRight: 10 }}
                />
                }
                buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor:"#F1948A"
                }}
                title="Ver descripcion del producto"
                onPress={onPress}
            />
            </Card>
    </View>
  )
}

export default PizzaCard