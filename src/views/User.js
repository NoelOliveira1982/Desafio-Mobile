import React from "react";
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import ItemCard from "../components/ItemCard";
import ToolBar from '../components/ToolBar';

//import images
import test from '../../assets/images/test.jpg';
import logo from '../../assets/images/logo-full.png';
//import constrains
import { HEIGHT_SCREEN } from "../Common";

const User = () => {
    return (
        <SafeAreaView style={{ backgroundColor: 'black', height: HEIGHT_SCREEN, flex: 1 }}>
            <ToolBar isMainScreen={true} />
            <ScrollView>
                <ItemCard url={test} name='Jorge Alberto' date='04/07/2003' />
                <ItemCard url={logo} name='Teste' date='10/10/2010' />
                <ItemCard url={logo} name='Teste' date='10/10/2010' />
                <ItemCard url={logo} name='Teste' date='10/10/2010' />
                <ItemCard url={logo} name='Teste' date='10/10/2010' />
                <ItemCard url={logo} name='Teste' date='10/10/2010' />
                <ItemCard url={logo} name='Teste' date='10/10/2010' />
            </ScrollView>
        </SafeAreaView>
    );
};

export default User;