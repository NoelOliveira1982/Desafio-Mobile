import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from 'react-native';
import ItemCard from "../components/ItemCard";
import ToolBar from '../components/ToolBar';
import { HEIGHT_SCREEN, SERVER, showError } from "../Common";
import axios from "axios";

const User = (props) => {

    const [data, setData] = useState([]);

    const getFiles = async () => {
        try {
            const data = await axios.get(`${SERVER}/index/aluno/${axios.defaults.data}`);
            return data.data.data;
        } catch (e) {
            showError(e);
        }
    };

    useEffect(() => {
        async function loadFiles() {
            const data = await getFiles();
            setData(data);
        }
        loadFiles();
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: 'black', height: HEIGHT_SCREEN, flex: 1 }}>
            <ToolBar isMainScreen={true} navigation={props.navigation} />
            <ScrollView>
                {data.map(({ id, numero, created_at }) =>
                    <ItemCard items={[
                        { title: 'Número', text: numero },
                        { title: 'Data de Envio', text: created_at }
                    ]} id={id} navigation={props.navigation} key={id} />)}
            </ScrollView>
        </SafeAreaView>
    );
};

export default User;