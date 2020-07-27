import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'


import Auth from './screen/Auth'
import SigningOrLogin from './screen/SigningOrLogin'
import Registrer from './screen/Registrer'
import RegisterBook from './screen/RegisterBook'

const menuConfig = {
    initialRouteName: 'Siging or Login',
    contentComponent: SigningOrLogin,
}


const mainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    SigningOrLogin: {
        name: 'SigningOrLogin',
        screen: SigningOrLogin
    },
    Registrer :{
        name: 'Registrer',
        screen: Registrer
    },
    RegisterBook :{
        name: 'RegisterBook',
        screen: RegisterBook
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'SigningOrLogin'
})

export default createAppContainer(mainNavigator)