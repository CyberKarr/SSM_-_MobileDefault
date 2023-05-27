import React from "react";
import { RectButton } from 'react-native-gesture-handler'

export function Button() {
    return {
        < RectButton style = { styles.button } onPress = {() => { }
}>
                            <View style={styles.buttonIcon}></View>
                            <Text style={styles.buttonText}>
                                Entrar
                            </Text>
                        </RectButton >
    }
}