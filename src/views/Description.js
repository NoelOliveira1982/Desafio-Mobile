import React, { useState, useEffect } from "react";
import { Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ToolBar from "../components/ToolBar";
import DescriptionCard from "../components/DescriptionCard";
import { HEIGHT_SCREEN, SERVER, showError } from "../Common";
import axios from "axios";

const Description = (props) => {

    const id = axios.defaults.params;

    const [data, setData] = useState({
        id: '',
        aluno: {
            id: '',
            nome_completo: ''
        },
        numero: 0,
        created_at: '',
        urls: [
            {
                id: '',
                redacao_id: '',
                correcao_id: null,
                url: '',
                anotacoes: null,
                comentarios: null
            }
        ]
    });

    const getFile = async () => {
        try {
            const res = await axios.get(`${SERVER}/redacao/${id}`);
            return res.data.data;

        } catch (e) {
            showError(e);
        }

    }

    useEffect(() => {
        async function loadFile() {
            const data = await getFile();
            setData(data);
        }
        loadFile();
    }, []);

    const goToImage = () => {
        Linking.openURL(data.urls[0].url);
    };

    const removeFile = async () => {
        try {
            await axios.delete(`${SERVER}/redacao/${data.urls[0].redacao_id}/delete`);
            props.navigation.navigate('Home');
        } catch (e) {
            showError(e);
        }
    };


    return (
        <SafeAreaView style={{ backgroundColor: 'black', height: HEIGHT_SCREEN, flex: 1 }}>
            <ToolBar navigation={props.navigation} />
            <ScrollView >
                <View style={Styles.container}>
                    <DescriptionCard title='Nome: ' value={data.aluno.nome_completo} />
                    <DescriptionCard title='Número' value={data.numero} />
                    <DescriptionCard title='Criado em: ' value={data.created_at} />
                    <DescriptionCard title='URL: ' value={data.urls[0].url} />
                    <TouchableOpacity onPress={goToImage} style={Styles.button}>
                        <Text style={Styles.text}>Visualizar arquivo</Text>
                    </ TouchableOpacity>
                    <TouchableOpacity style={Styles.button} onPress={removeFile}>
                        <Text style={{ ...Styles.text, color: 'red' }}>Apagar arquivo</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    image: {
        width: '100%',
    },
    container: {
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    button: {
        width: '90%',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        marginHorizontal: '5%',
        borderRadius: 25,
        paddingVertical: 10,
        marginBottom: 20
    },
    text: {
        fontFamily: 'Roboto Bold',
        fontSize: 20,
        color: 'white'
    }
});

export default Description;