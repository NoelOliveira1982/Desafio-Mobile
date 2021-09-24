import React, { useState } from "react";
import { SafeAreaView, Text, Dimensions, Image, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

//import images
import logo from '../../assets/images/logo-full.png';
//import constrains
import { HEIGHT_SCREEN } from "../Consts";

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <SafeAreaView>
            <LinearGradient colors={['#0424F3', '#5C25CB', '#8C35C4', '#7A34A5', '#521674']} style={Styles.backgroundGradient}>
                <Image source={logo} style={Styles.logoImage} />
                <View style={Styles.input}>
                    <Text style={Styles.label}>E-mail:</Text>
                    <TextInput placeholder='Insira seu e-mail' value={email}
                        onChangeText={email => setEmail(email)} style={Styles.textInput} autoCompleteType='email'
                        keyboardType='email-address' />
                </View>
                <View style={Styles.input}>
                    <Text style={Styles.label}>Senha:</Text>
                    <TextInput placeholder='Insira sua senha' value={password}
                        onChangeText={password => setPassword(password)} style={Styles.textInput} secureTextEntry={true} />
                    <View style={{ alignItems: 'center', width: '100%' }}>
                        <TouchableOpacity style={Styles.buttonAdmit}>
                            <Text>ENTRAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    logoImage: {
        height: 109,
        width: 358,
        marginLeft: 27,
        marginRight: 27,
        marginBottom: 30
    },
    backgroundGradient: {
        height: HEIGHT_SCREEN,
        justifyContent: 'center',
    },
    label: {
        fontFamily: 'Roboto Bold',
        fontSize: 26,
        color: 'white'
    },
    input: {
        marginTop: 40,
        marginLeft: 39,
        marginRight: 39,
    },
    textInput: {
        borderRadius: 29,
        backgroundColor: 'white',
        width: '100%',
        fontFamily: 'Roboto',
        fontSize: 22,
        color: '#9A9696',
        paddingLeft: 20,
        paddingRight: 20,
    },
    buttonAdmit: {
        backgroundColor: '#0335FF',
        borderRadius: 28,
        fontFamily: 'Roboto Bold',
        fontSize: 26,
        width: '60%',
        alignItems: 'center',
        paddingBottom: 18,
        paddingTop: 18,
        marginTop: 46,
    }
});

export default Login;