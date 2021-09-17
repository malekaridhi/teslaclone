import React from 'react';
import {Text, View,ImageBackground,Pressable } from 'react-native';
import styles from "./style"
const Buttons = (props) => {
  // const type =props.type
  // const content =props.content
  // const onPress =props.onPress
  const {type,content,onPress}=props
  // console.warn(type)
const BackgroundColor = type=== "primary"? '#171A20CC' : '#FFFFFFA6'

const TextColor = type ==='primary' ? "#FFFFFF" :'#171A20'
    return ( <>
    <View style={styles.container}>
  <Pressable
  style={[styles.button,{backgroundColor:BackgroundColor}]}
  onPress={()=>onPress()}
  >
  <Text style={[styles.text,{color:TextColor}]}> {content} </Text>
  </Pressable>
    </View>
    </> );
}
 
export default Buttons;