//rnf+TAB
import React from "react";
import { View, ScrollView} from "react-native";
import { Text, Image } from "@rneui/themed";
import { styles } from "./LoginScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils/screenNames";
import LoginForm from "../../../components/Auth/LoginForm/LoginForm";
import { color } from "@rneui/base";

const LoginScreen = () => {
  const navigation = useNavigation();
  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };
  return (
    <ScrollView>
      <Image
        source={{uri:"https://ca-times.brightspotcdn.com/dims4/default/c3f4b96/2147483647/strip/true/crop/1970x1108+39+0/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001"}}
        style={styles.image}/>
      <View style={styles.content}>
      <LoginForm />
        <Text style={{marginTop:20}}>
          ¿Aún no tienes una cuenta?{" "}
          <Text style={{color:"red"}} onPress={goToRegister}>
            Regístrate
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};
export default LoginScreen;