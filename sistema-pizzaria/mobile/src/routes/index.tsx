import React from "react";
import { View } from "react-native";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

function Routes(){
  const isAuthenticated = false; // Simulação de autenticação
  const loading = false; // Simulação de carregamento

  return(
    isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
  )
}

export default Routes;