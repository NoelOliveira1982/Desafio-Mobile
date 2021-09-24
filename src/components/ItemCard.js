import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';


const ItemCard = (props) => {
    return (
        <View style={Styles.card}>
            <Image source={props.url} style={Styles.image} />
            <View style={Styles.description}>
                <Text style={Styles.title}>{props.name}</Text>
                <Text style={Styles.title}>{props.date}</Text>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    card: {
        height: 258,
        width: '90%',
        marginLeft: 21,
        marginRight: 21,
        marginTop: 25,
        backgroundColor: 'white',
        justifyContent: 'flex-end'
    },
    image: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Roboto Bold',
        fontSize: 26,
        color: 'white',
        paddingTop: 10,
        paddingBottom: 5,
        padding: 20,

    },
    description: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default ItemCard;