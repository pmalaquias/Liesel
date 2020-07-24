import React, { Component } from 'react'
import {
    ImageBackground,
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    Alert,
    AsyncStorage,
    SafeAreaView,
    Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import AuthInput from '../components/AuthInput'

import Logo from '../../assets/LieselC.png'

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stageNew: false
}

export default class Auth extends Component {

    state = {
        ...initialState
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Bem-Vindo</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 40, }}>ao</Text>
                <Image source={Logo} style={styles.logo} />
                <View style={styles.formContainer}>
                    <Text style={styles.label}>E-mail</Text>
                    <AuthInput icon='at' placeholder='example@email.com' style={styles.input} />
                    <Text style={styles.label}>Senha</Text>
                    <AuthInput
                        icon='lock'
                        placeholder='Senha'
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}
                    />
                    <TouchableOpacity style={styles.buttonLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity style={{ paddingTop: 10, flex: 1 }}>
                    <Text >Cadastra-se</Text>
                </TouchableOpacity>

                <Text style={styles.conectar}>Conectar ou fazer login com:</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '50%',
                    paddingBottom: 50
                }}>
                    <TouchableOpacity>
                        <Icon style={styles.icon} name="google" size={30}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon style={styles.icon} name="apple" size={30}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon style={styles.icon} name="facebook" size={30}></Icon>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'linear-gradient(to bottom right, red, yellow)'
    },
    formContainer: {
        //backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 20,
        width: '90%',
        flex: 3,
    },
    input: {
        marginTop: 10,
        marginBottom: 5
        //backgroundColor: '#fff',
    },
    logo: {
        width: 250,
        height: 150,
        resizeMode: 'contain'
    },
    buttonText: {
        height: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
    },
    buttonLogin: {
        paddingBottom: 5,
        borderWidth: 1,
        borderRadius: 20,
        alignSelf: 'center',
        width: 100,
        marginTop: 15
    },
    title: {
        //flex: 1,
        fontWeight: 'bold',
        fontSize: 40,
        paddingTop: 40
    },
    label: {
        paddingLeft: 20,
        paddingTop: 5
    },
    conectar: {
        flex: 1,
        flexDirection: 'column',
        borderTopWidth: 2
    },
    icon: {

    }
})