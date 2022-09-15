import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

export const BoxComponent = ({ style, index, title }) => {
    return (
        <TouchableOpacity style={[styles.buttonRight, style]}>
            <Text style={styles.text}>{title}{index}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    buttonRight: {
        marginTop: '25%',
        marginLeft: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 100,
        height: 100,
    },
    text: {
        color: 'white'
    }
})