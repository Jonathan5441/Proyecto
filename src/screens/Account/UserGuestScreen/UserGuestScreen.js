import React from "react";
import { ScrollView } from "react-native";
import { Text, Button, Image } from "@rneui/themed";
import { styles } from "./UserGuestScreenStyles";
import { screen } from "../../../utils/screenNames";
import { useNavigation } from "@react-navigation/native";

const UserGuestScreen = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, justifyContent: "center" }}
      style={styles.viewBody}
    >
      <Image
        source={{uri:"https://ca-times.brightspotcdn.com/dims4/default/c3f4b96/2147483647/strip/true/crop/1970x1108+39+0/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001"}}
        style={styles.image}
      />
      <Text style={styles.title}>Accede a tu cuenta de EdgarBurguer</Text>
      <Button
        title="Ver tu perfil"
        onPress={goToLogin}
        buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  );
};

export default UserGuestScreen;
