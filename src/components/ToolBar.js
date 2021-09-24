import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import LinearGradient from 'react-native-linear-gradient';
//import constrains
import { SIZE_ICON } from '../Common';

const ToolBar = ({ isMainScreen = false, isDescriptionScreen = false }) => {
    return (
        <View>
            <StatusBar />
            <LinearGradient colors={['#A208EE', '#7A1ED5', '#6D52E1']} style={Styles.gradient} >
                <Icon name={isMainScreen === true ? 'logout' : 'keyboard-arrow-left'} size={SIZE_ICON} />
                <Text style={Styles.textName}>Jorge Alberto</Text>
                {isDescriptionScreen && <Icon name='mode-edit' size={SIZE_ICON} />}
                <Icon name='add' size={SIZE_ICON} />
            </LinearGradient>
        </View>
    );
};

const Styles = StyleSheet.create({
    textName: {
        fontFamily: 'Roboto Bold',
        fontSize: 26,
    },
    gradient: {
        justifyContent: 'space-around',
        padding: 18,
        flexDirection: 'row'
    }
});

export default ToolBar;