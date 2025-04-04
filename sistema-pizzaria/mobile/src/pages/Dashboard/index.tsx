import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/AuthContext";

export default function Dashboard() {
  const { signOut } = useContext(AuthContext);// Importa o contexto de autenticação

  return(
    <View>
      <Text>Tela de Dashboard</Text>
      <Button title="Sair" onPress={signOut}/>
    </View>
  )
}