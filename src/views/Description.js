import React from "react";
import { SafeAreaView } from 'react-native';
import ToolBar from "../components/ToolBar";

const Description = () => {
    return (
        <SafeAreaView>
            <ToolBar isDescriptionScreen={true} />
        </SafeAreaView>
    );
};

export default Description;