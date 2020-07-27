import React, { Component } from 'react'
import {
    View,
    TextInput,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Text
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import InputBook from '../components/InputBook'


export default class RegisterBook extends Component {

    render() {
        return (
            <View>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Nome do Livro</Text>
                </View>
                <View style={styles.addImage}>
                    <TouchableOpacity>
                        <Icon style={styles.icon} name="image-outline" size={150}></Icon>
                    </TouchableOpacity>
                </View>

                <FlatList style={styles.formContainer}>
                    <Text style={styles.label}>Nome</Text>
                    <InputBook />
                    <Text style={styles.label}>Autor</Text>
                    <InputBook />
                    <Text style={styles.label}>Genero</Text>
                    <InputBook />
                    <Text style={styles.label}>Estado do Livro</Text>
                    <InputBook />
                    <Text style={styles.label}>Resenha</Text>
                    <InputBook />

                    <TouchableOpacity  style={styles.buttonSave}
                        onPress={() => this.props.navigation.navigate('Auth')}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{paddingTop: 40}}
                        onPress={() => this.props.navigation.navigate('Auth')}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                </FlatList>


            </View>


        )
    }

}

const styles = StyleSheet.create({
    containerTitle: {
        borderBottomWidth: 2,
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 30
    },
    addImage: {
        alignItems: 'center',
        borderWidth: 2,
        width: '50%',
        borderRadius: 550,
        marginTop: 25,
        alignSelf: 'center',
        //position: 'absolute',
    },
    label: {
        paddingLeft: 20,
        paddingTop: 10
    }, 
    formContainer: {
        //backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 20,
        width: '90%',
        flex: 5,
        alignSelf: 'center'
    },
    buttonSave:{
        paddingBottom: 5,
        borderWidth: 1,
        borderRadius: 20,
        alignSelf: 'center',
        width: '100%',
        marginTop: 35
    },buttonText: {
        height: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
    },
    
})