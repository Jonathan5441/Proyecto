import React, { useState } from "react";
import { View } from "react-native";
import { Input, Icon, Button } from "@rneui/themed";
import { useFormik } from "formik";
import { initialValues } from "./RegisterFormData"
import { validationSchema } from "./RegisterFormData";
import { styles } from "./RegisterFormStyles";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils/screenNames"

const RegisterForm = () => {
    const navigation=useNavigation();
    //hook useState
    const [showPassword, setShowPassword] = useState(false);
    //hook
    const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: validationSchema(),
      validateOnChange: false,
      onSubmit: async (formValue) => {
        //console.log("Formulario");
        //console.group(formValue);
        try {
          const auth=getAuth();
          await createUserWithEmailAndPassword(
            auth,
            formValue.email,
            formValue.password
          );
          navigation.navigate(screen.account.login)
        } catch (error){
          console.log(error)
        }
      },
    });
  
    const showHiddenPassword = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <View style={styles.content}>
        <Input
          placeholder="Correo electrónico"
          containerStyle={styles.input}
          rightIcon={
            <Icon type="material-community" name="at" iconStyle={styles.icon} />
          }
          onChangeText={(text) => formik.setFieldValue("email", text)}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Contraseña"
          containerStyle={styles.input}
          secureTextEntry={showPassword ? false : true}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              iconStyle={styles.icon}
              onPress={showHiddenPassword}
            />
          }
          onChangeText={(text) => formik.setFieldValue("password", text)}
          errorMessage={formik.errors.password}
        />
        <Input
          placeholder="Confirmar Contraseña"
          containerStyle={styles.input}
          secureTextEntry={showPassword ? false : true}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              iconStyle={styles.icon}
              onPress={showHiddenPassword}
            />
          }
          onChangeText={(text) => formik.setFieldValue("confirmPassword", text)}
          errorMessage={formik.errors.confirmPassword}
        />
        <Button
          title="Unirse"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btnRegister}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        />
      </View>
    );
  };
  
  export default RegisterForm;