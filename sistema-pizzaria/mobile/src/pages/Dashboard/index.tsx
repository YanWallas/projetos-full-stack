import React, { useContext, useState } from "react";
import { Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../routes/app.routes"; 
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";

export default function Dashboard() {
  const { signOut } = useContext(AuthContext);
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const [number, setNumber] = useState("");

  async function openOrder(){
    if(number === ""){
      alert("Informe o número da mesa");
      return;
    }

    const response = await api.post('/order', {
      table: Number(number)
    })

    //console.log(response.data);
  
    //Precisa fazer a requisição e abrir a mesa e navegar para a próxima tela.
    navigation.navigate('Order', { number: number, order_id: response.data.id });
    setNumber('');
  }

  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonSair} onPress={signOut}>
        <Text style={styles.textButtonSair}>SAIR</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Novo pedido</Text>

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
  },
  buttonSair:{
    position: "absolute",
    top: '5%',
    right: '5%',
    backgroundColor: "#9c3434",
    borderRadius: 4,
  },
  textButtonSair:{
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
});