import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import ToolBar from "../components/ToolBar";
import DescriptionCard from "../components/DescriptionCard";

//import constrains
import { HEIGHT_SCREEN } from "../Consts";
//import test
import Logo from '../../assets/images/logo-full.png';
import Test from '../../assets/images/test.jpg';

const Description = ({ url = Test }) => {

    return (
        <SafeAreaView style={{ backgroundColor: 'black', height: HEIGHT_SCREEN, flex: 1 }}>
            <ToolBar isDescriptionScreen={true} />
            <ScrollView >
                <View style={Styles.container}>
                    <Image source={url} style={Styles.image} resizeMode='contain' />
                    <DescriptionCard title='Teste' value='jkdfjgfdgkdfngdfkjgdflkgfdklgjdfklgjdfglkfdjgkldfgjkdflg' />
                    <DescriptionCard title='Teste' value='jkdfjgfdgkdfngdfkjgdflkgfdklgjdfklgjdfglkfdjgkldfgjkdflg' />
                    <DescriptionCard title='Teste' value='jkdfjgfdgkdfngdfkjgdflkgfdklgjdfklgjdfglkfdjgkldfgjkdflg' />
                    <DescriptionCard title='Teste' value='jkdfjgfdgkdfngdfkjgdflkgfdklgjdfklgjdfglkfdjgkldfgjkdflg' />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    image: {
        width: '100%',
    },
    container: {
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
    }
});

export default Description;