import React from 'react';
import styles from './styles';
import { Text, View, Image } from "react-native";
import logo from '../../assets/images/logo.png'
import menu from '../../assets/images/menu.png'
const Header = () => {
    return ( <>
    <View style={styles.container}>
   <Image style={{width: 100, height: 20}} syle={styles.image1} source={logo}resizeMode={'contain'}/>
   <Image style={{width: 25, height: 25}}syle={styles.menu} source={menu}resizeMode={'contain'}/>
    </View>
    </> );
}
 
export default Header;