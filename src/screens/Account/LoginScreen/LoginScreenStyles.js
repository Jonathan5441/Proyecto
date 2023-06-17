import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    height: 150,
    width: "100%",
    marginTop: 20,
  },
  content: {
    marginHorizontal: 40,
  },
  button:{
    width:'40%',
    justifyContent: 'center',
    alignItems: 'center',
    height:50,
    borderRadius:30,
    padding:10,
    marginTop:10,
    backgroundColor:'#ffad6f',
  },
  input:{
    width:'80%',
    height:50,
    borderRadius:30,
    padding:10,
    paddingStart:30,
    marginTop:10,
    backgroundColor:'#fff',
  },
});