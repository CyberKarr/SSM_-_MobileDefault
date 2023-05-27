import React from "react";
import { RectButton } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import styles from './styles'

export function Button(props: { text: String, action: () => {}, type: String }) {
    return (
        <RectButton
            style={styles.button}
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

