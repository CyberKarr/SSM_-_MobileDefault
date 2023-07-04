import React from "react";
import { RectButton } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import styles from './styles'
import { COLORS } from "../assets/COLORS";
import { Feather, Octicons } from "@expo/vector-icons";

export function CardButton(props: { icon: string, text: string, action: () => any, type: string, isDisabled?: boolean }) {

    let color;

    switch (props.type) {
        case "primary":
            color = COLORS.SUCCESS
            break;
        case "second":
            color = COLORS.SECOND
            break;
        case "third":
            color = COLORS.THIRD
            break;
        case "fourth":
            color = COLORS.FOURTH
            break;
        case "fifth":
            color = COLORS.FIFTH
            break;
        default:
            color = COLORS.MAIN
            break;
    }

    let Component;

    switch (props.icon) {
        case "calendar":
            Component = <Feather name="calendar" size={40} color="white" />
            break;
        case "info":
            Component = <Feather name="info" size={40} color="white" />
            break;
        case "check":
            Component = <Feather name="user-check" size={40} color="white" />
            break;
        case "history":
            Component = <Octicons name="history" size={40} color="white" />
            break;
        default:
            Component = <View />
            break;

        // usercheck
        // check - saquare
    }

    return (
        <RectButton
            enabled={!props.isDisabled}
            style={props.isDisabled ? styles.cardButton : [styles.cardButton, { backgroundColor: color }]}
            onPress={props.action}>
            <View style={styles.cardInternViewIcon}>
                {Component}
            </View>
            <View style={styles.cardInternViewText}>
                <Text style={styles.cardButtonText}> {props.text} </Text>
            </View>
        </RectButton>
    )
}

