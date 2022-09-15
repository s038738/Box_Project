import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

export const ButtonComponent = ({ buttonPress, index, title }) => {
    return (
        <TouchableOpacity style={styles.buttonLeft}
            onPress={() => {
                buttonPress(index);
                return buttonPress;
            }}>
            <Text>{title}{index}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonLeft: {
        marginTop: '50%',
        marginLeft: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgb(102,168,197)',
        borderWidth: 3,
        borderRadius: 20,
        width: 110,
        height: 40,
    },
})