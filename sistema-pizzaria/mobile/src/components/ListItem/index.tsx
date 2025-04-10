import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

interface ItemProps {
  data:{
    id: string;
    product_id: string;
    name: string;
    amount: string | number;
  },
  deleteItem: (item_id: string) => void;
}

export function ListItem({ data, deleteItem }: ItemProps){8

  function handleDeleteItem(){
    deleteItem(data.id)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.item}>Qtd: {data.amount} - {data.name}</Text>

      <TouchableOpacity onPress={handleDeleteItem}>
        <Feather name="trash-2" size={25} color="#FF3F4B" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#101026',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 12,
    marginBottom: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  item:{
    color: '#FFF',
    fontSize: 16,
  }
})