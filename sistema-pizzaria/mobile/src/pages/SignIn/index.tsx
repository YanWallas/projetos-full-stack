import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if(email === "" || password === "") {
      alert("Preencha todos os campos");
      return;
    }

    alert("Email: " + email + "\nSenha: " + password);
  }

  return(
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo.png")}
      />

      <View style={styles.containerInput}>
        <TextInput
          placeholder="Digite seu e-mail"
          style={styles.input}
          placeholderTextColor= '#f0f0f0'
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          placeholderTextColor= '#f0f0f0'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>Acessar</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a1a"
  },
  text: {
    color: "#fff",
    fontSize: 20
  },
  logo:{
    marginBottom: 20,
  },
  containerInput:{
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 16,
    boxShadow: "0 4px 32px rgba(0, 0, 0, 0.2)",
    paddingVertical: 30,
    paddingHorizontal: 10
  },
  input:{
    width: "95%",
    height: 40,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    marginBottom: 18,
    paddingHorizontal: 8,
    color: "#fff",
  },
  button:{
    width: "95%",
    height: 40,
    backgroundColor: "#ff2038",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textButton:{
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  }  
});