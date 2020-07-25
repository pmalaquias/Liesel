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
    stageNew: false,
    signupOrSignin: true
}

export default class Auth extends Component {

    state = {
        ...initialState
    }

    render() {

        const validations = []
        validations.push(this.state.email && this.state.email.includes('@'))
        validations.push(this.state.password && this.state.password.length >= 6)

        if (this.state.stageNew) {
            validations.push(this.state.name && this.state.name.trim().length >= 3)
            validations.push(this.state.password === this.state.confirmPassword)
        }

        const validForm = validations.reduce((t, a) => t && a)

        return (

            <SafeAreaView style={styles.container}>

                <Image source={Logo} style={styles.logo} />
                <View style={styles.formContainer}>

                    <Text style={styles.label}>Nome</Text>

                    <AuthInput icon='account-outline' placeholder='Nome' value={this.state.name}
                        style={styles.input}
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })} />

                    <Text style={styles.label}>E-mail</Text>
                    <AuthInput icon='at' placeholder='example@email.com'
                        value={this.state.email} style={styles.input}
                        onChangeText={email => this.setState({ email })} />
                    <Text style={styles.label}>Senha</Text>
                    <AuthInput
                        icon='lock-outline'
                        placeholder='Senha' value={this.state.password}
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}
                    />

                    <Text style={styles.label}>Confirme sua Senha</Text>


                    <AuthInput icon='asterisk' placeholder='Confirmação de Senha'
                        value={this.state.confirmPassword}
                        style={styles.input} secureTextEntry={true}
                        onChangeText={confirmPassword => this.setState({ confirmPassword })} />

                    <TouchableOpacity style={[styles.buttonLogin, validForm ? {} : { backgroundColor: '#DDD' }]}>
                        <Text style={styles.buttonText}>Registrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingTop: 0, flex: 1, marginTop: 20, alignSelf: 'center' }}
                        onPress={() => this.props.navigation.navigate('SigningOrLogin')}>
                        <Text >Cancelar</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        paddingTop: 10,
        alignContent: 'center'
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
        resizeMode: 'contain',
        marginTop: 50,
        flex: 1
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
        width: '100%',
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
        paddingTop: 10
    },
    conectar: {
        flex: 1,
        flexDirection: 'column',
        borderTopWidth: 2
    },
    icon: {

    }
})