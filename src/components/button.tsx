import React from "react";
import { RectButton } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import styles from './styles'
import { COLORS } from "../assets/COLORS";

export function Button(props: { text: String, action: () => {}, type: String }) {

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
            style={[{ backgroundColor: color }, styles.button]}
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

