import React from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';

import Fundo from '../../../assets/fundo.jpg';

import styles from './styles';

const apiUsuario = {
    id: 1,
    email: "renan@gmail.com",
    senha: "12345"
}

function Login({navigation}) {

    const [usuario,setUsuario] = React.useState("");
    const [senha,setSenha] = React.useState("");

    function autenticacao() {
        if (apiUsuario.email === usuario && apiUsuario.senha) {
            navigation.navigate("Produtos");
        } else {
            Alert.alert("Usuário inválido", "Este usuário não existe");
        }
    }

    return (
        <View style={styles.caixa}>
            <ImageBackground source={Fundo} style={styles.fundo}>

                <View>
                    <Text style={styles.titulo}>Login</Text>
                </View>

                <View style={styles.inputs}>
                    <TextInput placeholder="Digiteo email..." style={styles.input} clearButtonMode="always" value={usuario} onChangeText={(text) => setUsuario(text)} />
                    <TextInput placeholder="Digiteo a senha..." style={styles.input} clearButtonMode="always" secureTextEntry={true} value={senha} onChangeText={(text) => setSenha(text)} />
                
                    <TouchableOpacity style={styles.btn} onPress={autenticacao}>
                        <Text style={styles.texto}>Entrar</Text>
                    </TouchableOpacity>
                
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login;