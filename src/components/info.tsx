import React from "react";
import { RectButton } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import styles from './styles'
import { COLORS } from "../assets/COLORS";
import { Entypo } from "@expo/vector-icons";

export function Information(props: { text: string, type: string }) {

    let color;

    switch (props.type) {
        case "success":
            color = COLORS.SUCCESS
            break;
        case "error":
            color = COLORS.RED
            break;
        case "alert":
            color = COLORS.YELLOW
            break;
        default:
            color = COLORS.MAIN
            break;
    }

    let Component;

    switch (props.type) {
        case "success":
            Component = <Entypo name="check" size={40} color={COLORS.SUCCESS} />
            break;
        case "error":
            Component = <Entypo name="cross" size={40} color={COLORS.RED} />
            break;
        case "alert":
            Component = <Entypo name="info" size={30} color={COLORS.YELLOW} />
            break;
        default:
            Component = <View />
            break;
    }

    return (
        <View style={{ ...styles.infoContent, backgroundColor: color }}>
            <View style={styles.infoIcon}>
                {Component}
            </View>
            <View style={styles.infoTextArea}>
                <Text style={styles.infoText}>{props.text}</Text>
            </View>
        </View>
    )
}

