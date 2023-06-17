import { View, Image } from 'react-native'
import {screen} from "../../../utils/screenNames"
import React from 'react'
import { Card,Button,Icon,Text } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";

const LasañaCard = () => {
    const navigation = useNavigation();
    const onPress=()=>{
        navigation.navigate(screen.restaurant.lasanadescription)
    }
    return (
    <View>
        <Card>
            <Card.Title style={{fontSize:30}}>Lasaña</Card.Title>
            <Card.Divider />
            <Card.Image
                style={{ padding: 0 }}
                source={require("../../../../assets/img/lasaña.jpg")}
            />
            <Text style={{ marginBottom: 10, padding:5 }}>
                Deliciosa lasaña con varias capas de queso y carne molida de la mas alta calidad.
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

export default LasañaCard