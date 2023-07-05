import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Text, View } from 'react-native';
import { COLORS } from "../assets/COLORS";
import styles from './styles';

export function Information(props: { text: string, type: string }) {

    let color;
    let Component;

    switch (props.type) {
        case "success":
            color = COLORS.SUCCESS;
            Component = <Entypo name="check" size={40} color={COLORS.SUCCESS} />
            break;
        case "error":
            color = COLORS.RED;
            Component = <Entypo name="cross" size={40} color={COLORS.RED} />
            break;
        case "alert":
            color = COLORS.YELLOW;
            Component = <Entypo name="info" size={30} color={COLORS.YELLOW} />
            break;
        default:
            color = COLORS.MAIN;
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

