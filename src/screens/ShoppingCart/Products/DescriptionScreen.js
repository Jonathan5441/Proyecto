import { View, Text } from 'react-native'
import React from 'react'

const DescriptionScreen = () => {
    const description=[
        {
            id:1,
            title:"Pizza Familiar",
            infoprofuct:"Nuestra pizza familiar es una deliciosa combinación de salsa de tomate casera, queso mozzarella fresco y jamon. La corteza se hornea a la perfección para obtener una textura crujiente y dorada. Esta pizza es perfecta para aquellos que buscan una opción rica y economica. ¡Prueba nuestra pizza familiar hoy mismo!"
        },
        {
            id:2,
            title:"Lasaña",
            infoprofuct:"Nuestra pizza familiar es una deliciosa combinación de salsa de tomate casera, queso mozzarella fresco y jamon. La corteza se hornea a la perfección para obtener una textura crujiente y dorada. Esta pizza es perfecta para aquellos que buscan una opción rica y economica. ¡Prueba nuestra pizza familiar hoy mismo!"
        }
    ]
  return (
    <View>
      {description.map((description) => {
          return (
            <Card>
              <Card.Title style={{ fontSize: 30 }}>{description.title}</Card.Title>
              <Card.Divider />
              <Text style={{ marginBottom: 10, padding: 5 }}>{description.infoprofuct}</Text>
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
                title="Agregar al carrito"
              />
            </Card>
          );
        })}
    </View>
  )
}

export default DescriptionScreen