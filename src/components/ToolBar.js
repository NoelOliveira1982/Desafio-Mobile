import axios from 'axios';
import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import LinearGradient from 'react-native-linear-gradient';
import { SERVER, showError, showSucess, SIZE_ICON, TITLE_FONT, TITLE_FONT_SIZE } from '../Common';
import DocumentPicker from 'react-native-document-picker';

const ToolBar = ({ isMainScreen = false, isAdminScreen = false, navigation }) => {

    const data = new FormData();

    const logout = () => {
        try {
            delete axios.defaults.headers.common['Authorization'];
            navigation.navigate('Login');
        } catch (e) {
            showError(e);
        }
    };

    const pickFiles = async () => {
        try {
            const results = await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
            });
            const res = results.map(({ uri }) => uri);
            data.append('uri', { uri: res });
        } catch (e) {
            if (!DocumentPicker.isCancel(e)) {
                showError(e);
            }
        }
    };

    const addFiles = async () => {
        try {
            await pickFiles();
            await axios.post(`${SERVER}/alunos/redacao/create`, data)
                .then(() => showSucess(`${res.length} adicionados com sucesso!`))
                .catch((e) => showError(e));
        } catch (e) {
            showError(e);
        }
    };

    const goBack = () => {
        navigation.navigate('Home');
    };

    const decideFunction = () => {
        if (isMainScreen) {
            logout();
        } else {
            goBack();
        }
    };

    return (
        <View>
            <StatusBar />
            <LinearGradient colors={['#A208EE', '#7A1ED5', '#6D52E1']} style={isAdminScreen ? { ...Styles.gradient, ...Styles.gradientAdmin } : Styles.gradient} >
                <Icon name={isMainScreen === true ? 'logout' : 'keyboard-arrow-left'} size={SIZE_ICON} onPress={decideFunction} />
                <Text style={Styles.textName}>Pontue</Text>
                {isAdminScreen != true && <Icon name='add' size={SIZE_ICON} onPress={addFiles} />}
            </LinearGradient>
        </View>
    );
};

const Styles = StyleSheet.create({
    textName: {
        fontFamily: TITLE_FONT,
        fontSize: TITLE_FONT_SIZE,
    },
    gradient: {
        justifyContent: 'space-around',
        padding: 18,
        flexDirection: 'row'
    },
    gradientAdmin: {
        justifyContent: 'space-between',
        paddingHorizontal: '10%',
    }
});

export default ToolBar;