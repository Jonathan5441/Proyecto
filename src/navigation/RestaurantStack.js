import { createStackNavigator } from "@react-navigation/stack";
import { screen } from "../utils/screenNames"
import RestaurantScreen from "../screens/Restaurant/RestaurantScreen";
import PizzaDescriptionScreen from "../screens/ShoppingCart/Products/PizzaDescriptionScreen";
import LasanaDescriptionScreem from "../screens/ShoppingCart/Products/LasanaDescriptionScreen"

const Stack=createStackNavigator();

const RestaurantStack=({setNewProduct})=>{
    return(
        <Stack.Navigator>
            <Stack.Screen
            name={screen.restaurant.restaurants}
            component={RestaurantScreen}
            options={{title:"Productos"}}
            />
            <Stack.Screen
            name={screen.restaurant.pizzadescription}
            children={(props)=>(
                <PizzaDescriptionScreen {...props} setNewProduct={setNewProduct}/>
            )}
            options={{title:"Descripcion del producto"}}
            />
            <Stack.Screen
            name={screen.restaurant.lasanadescription}
            component={LasanaDescriptionScreem}
            options={{title:"Descripcion del producto"}}
            />
        </Stack.Navigator>
    )
}

export default RestaurantStack;