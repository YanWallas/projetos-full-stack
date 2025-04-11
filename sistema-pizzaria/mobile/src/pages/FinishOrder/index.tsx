import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { api } from "../../services/api";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from '../../routes/app.routes'

type RouteDetailParams ={
  FinishOrder: {
    number: string | number;
    order_id: string;
  }
}

type FinishOrderRouteProp = RouteProp<RouteDetailParams, 'FinishOrder'>

export function FinishOrder(){
  const route = useRoute<FinishOrderRouteProp>();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  async function handleFinish(){
    try{
      await api.put('/order/send', {
        order_id: route.params?.order_id
      })

      navigation.popToTop();
      
    }catch(err){
      console.log("ERRO AO FINALIZAR, tente mais tarde")
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.alert}>Você deseja finalizar esse pedido?</Text>
      <Text style={styles.title}>Mesa: {route.params?.number}</Text>

      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.textButton}>Finalizar pedido</Text>
        <Feather name='shopping-cart' size={20} color="#9c3434"/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingVertical: '5%',
    paddingHorizontal: '4%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  alert:{
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  title:{
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  button:{
    backgroundColor: '#3ffFa3',
    flexDirection: 'row',
    width: '65%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  textButton:{
    fontSize: 18,
    color: '#9c3434',
    marginRight: 8,
    fontWeight: 'bold'
  }
})