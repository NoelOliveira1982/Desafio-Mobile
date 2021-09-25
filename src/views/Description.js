import React, { useState, useEffect } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import ToolBar from "../components/ToolBar";
import DescriptionCard from "../components/DescriptionCard";
import { HEIGHT_SCREEN, SERVER, showError } from "../Common";
import axios from "axios";

const Description = (props) => {

    const id = axios.defaults.params;

    const [data, setData] = useState({ urls: [] });

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


    return (
        <SafeAreaView style={{ backgroundColor: 'black', height: HEIGHT_SCREEN, flex: 1 }}>
            <ToolBar isDescriptionScreen={true} navigation={props.navigation} />
            <ScrollView >
                <View style={Styles.container}>
                    {data.urls.map(
                        ({ url }) => { <Image source={url} style={Styles.image} resizeMode='contain' /> })}

                    <DescriptionCard title='Número' value={data.numero} />
                    <DescriptionCard title='Criado em: ' value={data.created_at} />
                    {data.urls.anotacoes &&
                        <DescriptionCard title='Anotações: ' value={data.urls.anotacoes} />}
                    {data.urls.comentarios &&
                        <DescriptionCard title='Comentários' value={data.urls.comentarios} />}
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
    }
});

export default Description;