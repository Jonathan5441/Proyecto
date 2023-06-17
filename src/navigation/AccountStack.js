import { createStackNavigator } from "@react-navigation/stack";
import { screen } from "../utils/screenNames"
import AccountScreen from "../screens/Account/AccountScreen";
import LoginScreen from "../screens/Account/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/Account/RegisterScreen/RegisterScreen";

const Stack=createStackNavigator();

const AccountStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name={screen.account.accounts}
                component={AccountScreen}
                options={{title:"Cuenta"}}
            />
            <Stack.Screen
                name={screen.account.login}
                component={LoginScreen}
                options={{ title: "Iniciar Sesión" }}
            />
            <Stack.Screen
                name={screen.account.register}
                component={RegisterScreen}
                options={{ title: "Registrarse" }}
            />
        </Stack.Navigator>
    )
}

export default AccountStack;