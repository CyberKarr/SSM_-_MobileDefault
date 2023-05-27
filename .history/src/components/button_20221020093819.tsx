import React from "react";
import { RectButton } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import styles from './styles'

export function Button(text: String, action: () => {}, type: String) {
    return (
        <RectButton style={styles.button} onPress={action}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </RectButton >
    )
}

