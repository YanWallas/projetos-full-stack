import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function App() {
  const [nome, setNome] = useState("Wallas");

  function handleMudaNome(){
    setNome("Você clicou no botão!");
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{nome}</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleMudaNome}>
        <Text style={styles.buttonText}>Mudar Nome</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    padding: 28,
  },
  title:{
    fontSize: 28,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  button:{
    backgroundColor: 'red',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText:{
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  }
});