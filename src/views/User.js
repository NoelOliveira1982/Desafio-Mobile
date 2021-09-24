import React from "react";
import { SafeAreaView, Text, View } from 'react-native';
import ItemCard from "../components/ItemCard";
import ToolBar from '../components/ToolBar';

//import constrains
import { HEIGHT_SCREEN } from "../Consts";

const User = () => {
    return (
        <SafeAreaView style={{ backgroundColor: 'black', height: HEIGHT_SCREEN }}>
            <ToolBar isMainScreen={true} />
            <ItemCard />
        </SafeAreaView>
    );
};

export default User;