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

        const validForm = validations.reduce((t, a) => t && a)

        return (

            <SafeAreaView style={styles.container}>
                {/*  {!this.state.stageNew &&
                    <Text style={styles.title}>Bem-Vindo</Text>
                }
                {!this.state.stageNew &&
                    <Text style={{ fontWeight: 'bold', fontSize: 40, }}>ao</Text>
                }
 */}
                <Image source={Logo} style={styles.logo} />
                <View style={styles.formContainer}>

                    <Text style={styles.label}>E-mail</Text>
                    <AuthInput icon='at' placeholder='example@email.com'
                        value={this.state.email} style={styles.input}
                        autoFocus={false} keyboardType='email-address' 
                        onChangeText={email => this.setState({ email })} />
                    <Text style={styles.label}>Senha</Text>
                    <AuthInput
                        icon='lock-outline'
                        placeholder='Senha' value={this.state.password}
                        secureTextEntry={true} 
                        onChangeText={password => this.setState({ password })}
                    />

                    <TouchableOpacity style={[styles.buttonLogin, validForm ? {} : { backgroundColor: '#DDD' }]}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingTop: 10, 
                        flex: 1, 
                        marginTop: 20,
                        alignSelf: 'center' }}
                        onPress={() => this.props.navigation.navigate('SigningOrLogin')}>
                        <Text >Cancelar</Text>
                    </TouchableOpacity>
                </View>



                {/* {!this.state.stageNew &&
                    <Text style={styles.conectar}>Conectar ou fazer login com:</Text>
                }
                {!this.state.stageNew &&
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
                } */}

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
        marginTop: 100,
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
        marginTop: 35
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