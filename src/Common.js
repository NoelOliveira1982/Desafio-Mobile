import { Alert } from 'react-native';
import { Dimensions } from "react-native";

export const SIZE_ICON = 40;
export const TEXT_FONT = 22;
export const TITLE_FONT = 24;
export const HEIGHT_SCREEN = Dimensions.get('screen').height;
export const WIDTH_SCREEN = Dimensions.get('screen').width;
export const SERVER = 'https://desafio.pontue.com.br';

export function showError(err) {
    Alert.alert('Algum erro aconteceu durante o processo.', `Mensagem: ${err}`);
}

export function showSucess(msg) {
    Alert.alert('Sucesso!', msg);
}

