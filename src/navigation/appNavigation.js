import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import { screen } from "../utils/screenNames";
import RestaurantStack from "./RestaurantStack";
import AccountStack from "./AccountStack";
import ShoppingCartStack from "./ShoppingCartStack";

const Tab = createBottomTabNavigator();

export const AppNavigation = ({ newProduct, setNewProduct }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#76D7C4",
        headerShown: false,
        tabBarInactiveTintColor: "#F8C471",
        tabBarIcon: ({ color, size }) => edgar(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.restaurant.tab}
        children={(props) => (
          <RestaurantStack {...props} setNewProduct={setNewProduct} />
        )}
        options={{ title: "Restaurantes" }}
      />
      <Tab.Screen
        name={screen.shoppingcart.tab}
        children={(props)=>(
          <ShoppingCartStack {...props} newProduct={newProduct} />
        )}
        options={{ title: "Carrito de compras" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
};

const edgar = (route, color, size) => {
  let iconName;
  if (route.name == screen.restaurant.tab) {
    iconName = "cat";
  }
  if (route.name == screen.account.tab) {
    iconName = "account-arrow-up-outline";
  }
  if (route.name == screen.shoppingcart.tab) {
    iconName = "cart-outline";
  }
  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
};
