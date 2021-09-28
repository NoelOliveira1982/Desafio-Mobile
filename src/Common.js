import { Alert } from 'react-native';
import { Dimensions } from "react-native";

export const SIZE_ICON = 40;
export const TEXT_FONT_SIZE = 22;
export const TITLE_FONT_SIZE = 24;
export const TEXT_FONT = 'Roboto';
export const TITLE_FONT = 'Roboto Bold';
export const HEIGHT_SCREEN = Dimensions.get('screen').height;
export const WIDTH_SCREEN = Dimensions.get('screen').width;
export const SERVER = 'https://desafio.pontue.com.br';

export function showError(err) {
    Alert.alert('Algum erro aconteceu durante o processo.', `Mensagem: ${err}`);
}

export function showSucess(msg) {
    Alert.alert('Sucesso!', msg);
}

