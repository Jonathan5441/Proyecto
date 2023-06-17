import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navigation/appNavigation";
import { initFirebase } from "./src/utils/firebase";
import { useState } from "react";

const App=()=>{
  const[newProduct,setNewProduct]=useState(null);
  return(
    <>
    <NavigationContainer>
      <AppNavigation newProduct={newProduct} setNewProduct={setNewProduct}/>
    </NavigationContainer>
    </>
  );
};

export default App;
