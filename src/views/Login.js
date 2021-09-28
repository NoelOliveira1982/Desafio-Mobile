import axios from "axios";
import React, { useState } from "react";
import { SafeAreaView, Text, Image, StyleSheet, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

import logo from '../../assets/images/logo-full.png';
import { SERVER, showError, HEIGHT_SCREEN, TITLE_FONT, TEXT_FONT } from "../Common";

const Login = (props) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signin = async () => {
        try {
            const res = await axios.post(`${SERVER}/auth/login`, {
                email: email,
                password: password
            });

            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
            axios.defaults.data = res.data.aluno_id;
            if (res.data.aluno_id) {
                props.navigation.navigate('Home');
            } else {
                props.navigation.navigate('Admin');
            }
        } catch (e) {
            showError(e);
        }
    };

    return (
        <SafeAreaView>
            <ScrollView>
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
                            <TouchableOpacity style={Styles.buttonAdmit} onPress={signin}>
                                <Text style={Styles.textAdmit}>ENTRAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>
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
        fontSize: TITLE_FONT,
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
        fontSize: TEXT_FONT,
        color: '#9A9696',
        paddingLeft: 20,
        paddingRight: 20,
    },
    buttonAdmit: {
        backgroundColor: '#0335FF',
        borderRadius: 28,
        width: '60%',
        alignItems: 'center',
        paddingBottom: 18,
        paddingTop: 18,
        marginTop: 46,
    },
    textAdmit: {
        fontFamily: 'Roboto Bold',
        fontSize: TEXT_FONT,
    }
});

export default Login;