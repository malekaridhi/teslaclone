import React from "react";
import { Text, View, ImageBackground } from "react-native";
import image from "../../assets/images/ModelX.jpeg";
import Buttons from "../styleButton/button.jsx";
import styles from "./styles";
const CarItem = () => {
  return (
    <>
      <View style={styles.carContainer}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subTitles}>starting at $69,420</Text>
        </View>
        <Buttons type="primary" 
        content={"custom order"}
        onPress={()=>{ console.warn("custom order was clicked")}} />
        <Buttons type="secondary" 
        content={"Existing Inventory"}
        onPress={()=>{ console.warn("Existing Inventory was clicked")}} />
      </View>
    </>
  );
};

export default CarItem;
