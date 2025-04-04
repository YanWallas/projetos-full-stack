import React, { useState } from "react";
import { Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../routes/app.routes"; 

export default function Dashboard() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const [number, setNumber] = useState("");

  function openOrder(){
    if(number === ""){
      alert("Informe o número da mesa");
      return;
    }

    //Precisa fazer a requisição e abrir a mesa e navegar para a próxima tela.
    navigation.navigate('Order', { number: number, order_id: '' });
  }

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Novo pedido</Text>

      <TextInput
        placeholder="Número da mesa"
        placeholderTextColor={"#F0F0F0"}
        style={styles.input}
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.buttonText}>Abrir Mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    paddingVertical: 25,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 24,
  },
  input:{
    width: "90%",
    height: 60,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    marginBottom: 18,
    paddingHorizontal: 8,
    color: "#fff",
    textAlign: 'center',
    fontSize: 20,
  },
  button:{
    width: "90%",
    height: 40,
    backgroundColor: "#3fffa3",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  buttonText:{
    fontSize: 18,
    fontWeight: "bold",
    color: "#9c3434",
  }
});