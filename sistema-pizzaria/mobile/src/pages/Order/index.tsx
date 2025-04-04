import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useRoute, RouteProp } from "@react-navigation/native";

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
      <Text>tela Order</Text>
      <Text>
        {route.params.number}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{

  }
})