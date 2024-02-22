import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function LoginScreen(): JSX.Element {


    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");



    function login(){
        const dados = {
            email:email,
        password:password,
        }

        console.log(dados);
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo} resizeMode="contain"
                source={require('../asset/images/user-blue.png')} />

            <View style={styles.Card}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input
                } placeholder="E-mail"
                    placeholderTextColor={"#000000"}
                    
                    onChangeText={(textEmail)=> setEmail(textEmail)}/>

                <TextInput

                    style={styles.input
                    }
                    placeholder='Senha'
                    placeholderTextColor={"#151413"}

                    onChangeText={(textPassword)=> setPassword(textPassword)}
                />

                <TouchableOpacity style={styles.buttonForm}
                onPress={()=>{login()}} >
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>


                <TouchableOpacity  >
                <Text style={
                        styles.forgotPassword
                    } >Esqueceu a senha?</Text>
                   
                </TouchableOpacity>
                <TouchableOpacity  >
                
                    <Text style={
                        styles.forgotPassword
                    } >Não possui conta? Cadastre-se</Text>
                </TouchableOpacity>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00dbbb'
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 20,
        marginTop: -150
    },
    Card: {
        backgroundColor: "#ffffff",
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#151413',
        marginBottom:20,
        textAlign:'center'
    },
    input: {
        backgroundColor: "#d7d4d1",
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "grey"
    },
    buttonForm: {
        backgroundColor: '#00229A',
        height:40,

        borderRadius: 8,
        marginTop: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 40
    },

    forgotPassword: {
        color:'#F76900',
        textAlign: 'center',
        marginTop:10
    }
});

export default LoginScreen;