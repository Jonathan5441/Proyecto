import { createStackNavigator } from "@react-navigation/stack";
import { screen } from "../utils/screenNames"
import ShoppingCartScreen from "../screens/ShoppingCart/ShoppingCartScreen";

const Stack=createStackNavigator();

const ShoppingCartStack=({newProduct})=>{
    return(
        <Stack.Navigator>
            <Stack.Screen
            name={screen.shoppingcart.shoppingCart}
            children={(props)=>(
                <ShoppingCartScreen {...props} newProduct={newProduct}/>
            )}
            options={{title:"Carrito de compras"}}
            />
        </Stack.Navigator>
    )
}

export default ShoppingCartStack;