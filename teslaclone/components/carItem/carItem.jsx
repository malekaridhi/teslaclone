import React from "react";
import { Text, View, ImageBackground } from "react-native";
import image1 from "../../assets/images/ModelX.jpeg";
import Buttons from "../styleButton/button.jsx";
import styles from "./styles";
const CarItem = (props) => {
  const {name ,tagLine,image,taglineCTA}=props.car
  return (
    <>
      <View style={styles.carContainer}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitles}>{tagLine}
          {' '}
          <Text stle={styles.taglineCTA}>
            {taglineCTA}
          </Text>
          </Text>
        </View>
        <View style={styles.buttonsComponent}>
        <Buttons type="primary" 
        content={"custom order"}
        onPress={()=>{ console.warn("custom order was clicked")}} />
        <Buttons type="secondary" 
        content={"Existing Inventory"}
        onPress={()=>{ console.warn("Existing Inventory was clicked")}} />
        </View>
      </View>
    </>
  );
};

export default CarItem;
