import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    FlatList,
    SafeAreaView
} from 'react-native';

export const ButtonComponent = ({buttons, doSomething, title}) =>{
    return(
        <TouchableOpacity style={styles.buttonLeft}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonLeft: {
        marginTop: '50%',
        marginLeft: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'rgb(108,116,118)',
        borderRadius: 20,
        width: 110,
        height: 40,
    },
})