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
import AuthInput from '../components/AuthInput'
import Logo from '../../assets/LieselC.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class SigningOrLogin extends Component {

    loging= () => {
        this.props.navigation.navigate('Auth')
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

                {/* <Text style={styles.title}>Bem-Vindo</Text>

                <Text style={{ fontWeight: 'bold', fontSize: 40, }}>ao</Text> */}


                <Image source={Logo} style={styles.logo} />

                <View style={styles.button}>
                    <TouchableOpacity style={[styles.buttonLogin]}
                        onPress={() => this.props.navigation.navigate('Auth')}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonLogin}
                        onPress={() => this.props.navigation.navigate('Registrer')}>
                        <Text style={styles.buttonText} >Cadastrar-se</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.conectar}>Conectar ou fazer login com:</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '50%',
                    paddingBottom: 100
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
        marginTop: 15,
        paddingTop: 10,
        alignContent: 'center',
        margin: 20
        //backgroundColor: 'linear-gradient(to bottom right, red, yellow)'
    },
    logo: {
        width: 250,
        height: 150,
        resizeMode: 'contain',
        marginTop:100
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
        width: '50%',
        marginTop: 15,
    },
    button: {
        flex: 2,
        marginTop: 50,
        width: '100%'
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
        borderTopWidth: 2,
        marginTop: 100,

    },
    icon: {

    }
})