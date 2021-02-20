import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'

export default function Home({navigation}) {
    <View>
        <Image />
        <TouchableOpacity onPress={() => navigation.navigate("Produtos")}>
            <Text>Entrar</Text>
        </TouchableOpacity>
    </View>
}