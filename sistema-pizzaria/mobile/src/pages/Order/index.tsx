import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

import { useRoute, RouteProp } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

type RouteDetailParams = {
  order: {
    number: string | number;
    order_id: string;
  }
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'order'>;

export default function Order(){
  const route = useRoute<OrderRouteProps>();

  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Mesa {route.params.number}</Text>

        <TouchableOpacity>
          <Feather name="trash-2" size={28} color="#ff2038" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.input}>
        <Text style={{ color: '#FFF' }}>Pizzas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.input}>
        <Text style={{ color: '#FFF' }}>Pizza de Calabresa</Text>
      </TouchableOpacity>

      <View style={styles.qtdContainer}>
        <Text style={styles.qtdText}>Quantidades</Text>
        <TextInput
          style={[styles.input, { width: '60%', textAlign: 'center' }]}
          placeholder="1"
          placeholderTextColor="#F0F0f0"
          keyboardType="numeric"
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingVertical: '5%',
    paddingEnd: '4%',
    paddingStart: '4%',
  },
  header:{
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginRight: 14,
  },
  input:{
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 4,
    width: "100%",
    height: 40,
    marginBottom: 12,
    justifyContent: 'center',
    paddingHorizontal: 8,
    color: "#fff",
    fontSize: 20,
  },
  qtdContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  qtdText:{
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
})