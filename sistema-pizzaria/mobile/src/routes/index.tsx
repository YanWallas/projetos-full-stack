import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import { AuthContext } from "../contexts/AuthContext";

function Routes(){
  const { isAuthenticated } = useContext(AuthContext);// Importa o contexto de autenticação
  const loading = false; // Simulação de carregamento

  if(loading){
    return(
      <View 
        style={{
          flex: 1, 
          backgroundColor: "#1a1a1a", 
          justifyContent: 'center', 
          alignItems: 'center'
        }}>

        <ActivityIndicator size={60} color="#f5f7fb"/>1a1a1a
      </View>
    )
  }
  // Verifica se o usuário está autenticado
  return(
    isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
  )
}

export default Routes;