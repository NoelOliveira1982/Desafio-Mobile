import React from "react";
import { SafeAreaView, Text, Dimensions } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

const HEIGHT_SCREEN = Dimensions.get('screen').height;

const Login = () => {
    return (
        <SafeAreaView>
            <LinearGradient colors={['#0424F3', '#5C25CB', '#8C35C4', '#7A34A5', '#521674']} style={{ height: HEIGHT_SCREEN }}>
                <Text>Teste</Text>
            </LinearGradient>
        </SafeAreaView>
    );
};

export default Login;