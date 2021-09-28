import axios from 'axios';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TEXT_FONT, TEXT_FONT_SIZE, TITLE_FONT } from '../Common';


const ItemCard = (props) => {

    const goToDescription = () => {
        if (props.id) {
            axios.defaults.params = props.id;
            props.navigation.navigate('Description');
        }
    };

    return (
        <TouchableOpacity onPress={goToDescription}>
            <View style={Styles.card}>
                {props.items.map(({ title, text }) => <Text style={Styles.title}>{title}: {text}</Text>)}
            </View>
        </TouchableOpacity>
    );
};

const Styles = StyleSheet.create({
    card: {
        width: '90%',
        marginLeft: 21,
        marginRight: 21,
        marginTop: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 15,
    },
    image: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    title: {
        fontFamily: TITLE_FONT,
        fontSize: TEXT_FONT_SIZE,
        color: 'black',
        paddingTop: 5,
        paddingHorizontal: 20,

    },
});

export default ItemCard;