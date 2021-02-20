import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles.js';

import logo from '../../../assets/imgProdutos/logo.jpeg';

export default function Home({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.section_img}>
                <Image style={styles.img_logo} resizeMode="contain" source={logo} />
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.txt}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}