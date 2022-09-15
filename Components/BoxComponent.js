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

export const BoxComponent = ({buttons, doSomething, title}) =>{
    return (
                <TouchableOpacity style={styles.buttonRight}>
                    <Text style={styles.text}>{title}</Text>
                </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    buttonRight: {
        marginTop: '25%',
        marginLeft: '25%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(108,116,118)',
        width: 100,
        height: 100,
    },
    text: {
        color: 'white'
    }
})

//export default BoxComponent;