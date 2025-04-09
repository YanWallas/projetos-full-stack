import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { CategoryProps } from "../../pages/Order";

interface ModalPickerProps {
  options: CategoryProps[];
  handleCloseModal: () => void;
  selectedItem: (item: CategoryProps) => void;
}

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export function ModalPicker({ options, handleCloseModal, selectedItem }: ModalPickerProps) {

  function onPressItem(item: CategoryProps){
    //console.log(item);
    selectedItem(item);
    handleCloseModal();
  }

  const option = options.map((item, index) => (
    <TouchableOpacity key={index} style={styles.option} onPress={ () => onPressItem(item)}>
      <Text style={styles.item}> 
        {item?.name}
      </Text>
    </TouchableOpacity>
  ))

  return (
    <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {option}
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content:{
    width: WIDTH - 30,
    height: HEIGHT / 2,
    backgroundColor: " rgba(0, 0, 0, 0.9)",
    borderWidth: 1,
    borderColor: "#ff2038",
    borderRadius: 4,
  },
  option:{
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ff2038",

  },
  item:{
    margin: 16,
    fontSize: 16,
    fontWeight: "bold",
    color: "#F0f0f0",
  }
});