import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from "react-native";

import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { api } from "../../services/api";
import { ModalPicker } from "../../components/ModalPicker";

type RouteDetailParams = {
  order: {
    number: string | number;
    order_id: string;
  }
}

export type CategoryProps = {
  id: string;
  name: string;
}

type productsProps = {
  id: string;
  name: string;
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'order'>;

export default function Order(){
  const route = useRoute<OrderRouteProps>();
  const navigation = useNavigation();

  const [category, setCategory] = useState<CategoryProps[] | []>([]);
  const [categorySelected, setCategorySelected] = useState<CategoryProps | undefined>();
  const [modalVisible, setModalVisible] = useState(false);

  const [products, setProducts] = useState<productsProps[] | []>([]);
  const [productSelected, setProductSelected] = useState<productsProps | undefined>();
  const [modalVisibleProduct, setModalVisibleProduct] = useState(false);

  const [amount, setAmount] = useState('1');

  useEffect(() => {
    async function loadInfo(){
      const response = await api.get('/category');
      //console.log(response.data);
      setCategory(response.data);
      setCategorySelected(response.data[0]);
    }

    loadInfo();
  }, []);

  useEffect(() => {
    async function loadProducts(){
    
      const response = await api.get('/category/product', {
        params:{
          category_id: categorySelected?.id
        }
      })

      setProducts(response.data);
      setProductSelected(response.data[0]);
    }

    loadProducts();
  }, [categorySelected]);

  async function handleCloseOrder(){
    try {
      await api.delete('/order', {
        params:{
          order_id: route.params?.order_id
        }
      })

      navigation.goBack();

    }catch(err){
      console.log(err);
    }
  }

  function handleChangeCategory(item: CategoryProps){
    setCategorySelected(item);
  }

  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Mesa {route.params.number}</Text>

        <TouchableOpacity onPress={handleCloseOrder}>
          <Feather name="trash-2" size={28} color="#ff2038" />
        </TouchableOpacity>
      </View>

      {category.length !== 0 && (
        <TouchableOpacity style={styles.input} onPress={() => setModalVisible(true)}>
        <Text style={{ color: '#FFF' }}>{categorySelected?.name}</Text>
        </TouchableOpacity>
      )}

      {products.length !== 0 && (
        <TouchableOpacity style={styles.input}>
          <Text style={{ color: '#FFF' }}>{productSelected?.name}</Text>
        </TouchableOpacity>
      )}

      <View style={styles.qtdContainer}>
        <Text style={styles.qtdText}>Quantidades</Text>
        <TextInput
          style={[styles.input, { width: '60%', textAlign: 'center' }]}
          placeholderTextColor="#F0F0f0"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
      >
        <ModalPicker
          handleCloseModal={() => setModalVisible(false)}
          options={category}
          selectedItem={ handleChangeCategory }
        />
      </Modal>

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
    alignItems: 'center',
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
  actions:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonAdd:{
    width: '25%',
    backgroundColor: '#3fd1ff',
    borderRadius: 4,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: '#9c3434',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button:{
    width: '70%',
    backgroundColor: '#3fffa3',
    borderRadius: 4,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
  }
})