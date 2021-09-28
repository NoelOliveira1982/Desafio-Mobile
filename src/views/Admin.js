import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ToolBar from "../components/ToolBar";
import { HEIGHT_SCREEN, SERVER, showError, TEXT_FONT, TEXT_FONT_SIZE, TITLE_FONT, TITLE_FONT_SIZE } from "../Common";
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from "axios";
import ItemCard from "../components/ItemCard";

const Admin = (props) => {

    const [data, setData] = useState([]);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const getFiles = async () => {
        try {
            let month = String(date.getMonth() + 1);
            let year = date.getFullYear().toString();
            const data = await axios.get(`${SERVER}/index/admin?month=${month}&year=${year}`);
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
    }, [date]);

    return (
        <SafeAreaView style={{ backgroundColor: 'black', height: HEIGHT_SCREEN, flex: 1 }} >
            <ToolBar isAdminScreen={true} isMainScreen={true} navigation={props.navigation} />
            <ScrollView>
                <View style={Styles.view}>
                    <Text style={Styles.title}>Incrições de {date.getMonth() + 1}/{date.getFullYear().toString()}</Text>
                    <TouchableOpacity style={Styles.button}
                        onPress={() => setShow(!show)}>
                        <Text style={Styles.buttonText}>Filtrar Redações</Text>
                    </TouchableOpacity>
                    {data.map(({ aluno, escola, numero, created_at }) =>
                        <ItemCard items={[
                            { title: 'Aluno', text: aluno.nome_completo },
                            { title: 'Escola', text: escola.nome },
                            { title: 'Turma', text: aluno.turma.nome },
                            { title: 'Número', text: numero },
                            { title: 'Data de inscrição', text: created_at }
                        ]} key={id} navigation={props.navigation} id={null} />)}
                </View>
                {show && <DateTimePicker value={date}
                    onChange={(_, date) => { if (date) { setDate(date); } setShow(!show) }} mode='date' />}
            </ScrollView>
        </SafeAreaView >
    );
};

const Styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        alignItems: 'center',
        width: '80%',
        borderRadius: 20,
        marginVertical: 15
    },
    view: {
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        fontFamily: TITLE_FONT,
        fontSize: TITLE_FONT_SIZE,
        color: 'white'
    },
    buttonText: {
        fontFamily: TEXT_FONT,
        fontSize: TEXT_FONT_SIZE,
        color: 'black',
    }
});

export default Admin;