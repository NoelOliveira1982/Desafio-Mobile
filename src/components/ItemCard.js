import axios from 'axios';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const ItemCard = (props) => {

    const goToDescription = () => {
        axios.defaults.params = props.id;
        props.navigation.navigate('Description');
    };

    return (
        <TouchableOpacity onPress={goToDescription} >
            <View style={Styles.card}>
                <Text style={Styles.title}>Número: {props.name}</Text>
                <Text style={Styles.title}>Data de Envio: {props.date}</Text>
            </View>
        </TouchableOpacity>
    );
};

const Styles = StyleSheet.create({
    card: {
        height: 100,
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
        fontFamily: 'Roboto Bold',
        fontSize: 22,
        color: 'black',
        paddingTop: 5,
        paddingHorizontal: 20,

    },
});

export default ItemCard;