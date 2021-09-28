import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { TEXT_FONT, TITLE_FONT } from "../Common";

const DescriptionCard = ({ title, value }) => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>{title}</Text>
            <Text style={Styles.value}>{value}</Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 15,
        borderColor: '#707070',
        width: '90%',
        margin: '5%',
        marginTop: 18
    },
    title: {
        fontFamily: 'Roboto Bold',
        fontSize: TITLE_FONT,
        color: 'white',
        marginLeft: 15
    },
    value: {
        fontFamily: 'Roboto',
        fontSize: TEXT_FONT,
        color: 'white',
        margin: 10
    }
});

export default DescriptionCard;