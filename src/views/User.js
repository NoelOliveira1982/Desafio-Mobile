import React from "react";
import { SafeAreaView, Text, View } from 'react-native';
import ItemCard from "../components/ItemCard";
import ToolBar from '../components/ToolBar';

//import images
import test from '../../assets/images/test.jpg';
import logo from '../../assets/images/logo-full.png';
//import constrains
import { HEIGHT_SCREEN } from "../Consts";

const User = () => {
    return (
        <SafeAreaView style={{ backgroundColor: 'black', height: HEIGHT_SCREEN }}>
            <ToolBar isMainScreen={true} />
            <ItemCard url={test} />
            <ItemCard url={logo} />
        </SafeAreaView>
    );
};

export default User;