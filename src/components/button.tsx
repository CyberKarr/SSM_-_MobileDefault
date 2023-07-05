import React from "react";
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { COLORS } from "../assets/COLORS";
import styles from './styles';

export function Button(props: { text: String, action: () => any, type: String, isDisabled?: boolean }) {

    let color;

    switch (props.type) {
        case "primary":
            color = COLORS.SUCCESS
            break;
        default:
            color = COLORS.MAIN
            break;
    }

    return (
        <RectButton
            enabled={!props.isDisabled}
            style={props.isDisabled ? styles.button : [styles.button, { backgroundColor: color }]}
            onPress={props.action}>
            <View
                style={styles.buttonIcon}
            />
            <Text
                style={styles.buttonText}>
                {props.text}
            </Text>
        </RectButton >
    )
}

