import React from 'react';
import { View, Text, Image, FlatList, TextInput } from 'react-native';
import styles from './styles';

import microondas from '../../../assets/imgProdutos/micro_consul.jpg';
import geladeira1 from '../../../assets/imgProdutos/brastemp_branca.jpeg';
import fogao from '../../../assets/imgProdutos/fogao_consul.jpeg';
import geladeira2 from '../../../assets/imgProdutos/geladeira_brastemp.jpeg';

const tarefas = [
    {
        nome: "Microondas",
        img: microondas
    },
    {
        nome: "Geladeira",
        img: geladeira1
    },
    {
        nome: "Fogão",
        img: fogao
    },
    {
        nome: "Geladeira",
        img: geladeira2
    }
]

const Item = ({item}) => {
    return(
        <View style={styles.container}>
            <View style={styles.section_img}>
                <Image style={styles.img} resizeMode="contain" clearButtonMode="always" source={item.img} />
            </View>
            <Text style={styles.txt}>{item.nome}</Text>
        </View>
    )
}

function Produtos() {
    const renderItem = ({item, index}) => {
        return (
          <Item key={index} item={item} />
        )
    }
    return (
        <View>
            <View style={styles.boxflat}>
                <FlatList data={tarefas} renderItem={renderItem} style={styles.flatlist}/>
            </View>
        </View>
    )
}

export default Produtos;