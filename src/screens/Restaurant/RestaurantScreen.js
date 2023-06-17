import { View, Image } from "react-native";
import React from "react";
import { Card, Button, Icon, Text } from "@rneui/themed";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DescriptionScreen from "../ShoppingCart/Products/DescriptionScreen";
import { useNavigation } from "@react-navigation/native";

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const products = [
    {
      id: 1,
      title: "Pizza Familiar",
      uri:"https://www.saborusa.com/ni/wp-content/uploads/sites/19/2019/11/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png",
      description: "Rica pizza de pepperoni o jamon con una masa gruesa y crujiente."
    },
    {
      id: 2,
      title: "Lasaña",
      uri:"https://assets.unileversolutions.com/recipes-v2/232080.jpg",
      description: "Deliciosa lasaña con varias capas de queso y carne molida de la mas alta calidad."
    },

  ];
  return (
    <View>
      <KeyboardAwareScrollView>
        {products.map((product) => {
          return (
            <Card>
              <Card.Title style={{ fontSize: 30 }}>{product.title}</Card.Title>
              <Card.Divider />
              <Card.Image
                style={{ padding: 0 }}
                source={{uri:product.uri}}
              />
              <Text style={{ marginBottom: 10, padding: 5 }}>{product.description}</Text>
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
                  backgroundColor: "#F1948A",
                }}
                title="Ver descripcion del producto"
              />
            </Card>
          );
        })}
        <Text>Cantidad total de productos: {products.length}</Text>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default RestaurantScreen;
