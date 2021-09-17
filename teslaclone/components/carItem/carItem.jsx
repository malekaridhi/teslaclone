import React from 'react';
import {Text, View,ImageBackground } from 'react-native';
import image from "../../assets/images/ModelX.jpeg"
import styles from "./styles"
const CarItem = () => {
    return ( <>
       <View style={styles.carContainer}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}/>
        <View style={styles.titles} >
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitles}>starting at $69,420</Text>
        
        </View>
        
      </View>
    </> );
}
 
export default CarItem;
