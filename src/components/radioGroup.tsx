import React, { useState } from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { COLORS } from "../assets/COLORS";
import { Input } from "./input";
import styles from './styles';

export function RadioGroup(props: { text: string, options: string[], selected?, controllers: (selected) => void, hasInput?: boolean, inputChange?, inputValue?, isDisable?: boolean }) {


    const [isChecked, setIsChecked] = useState(props.selected);
    const [inputValue, setInputValue] = useState(props.inputValue);

    function handlePress(item) {
        if (!props.isDisable) {
            setIsChecked(item)
            props.controllers(item)
        }
    }

    function handleSetInputValue(e) {
        setInputValue(e);
        props.inputChange(e);

    }


    return (
        <View style={styles.radioButtonGroup}>
            <Text style={styles.textItem}>{props.text}</Text>
            <View style={styles.radioButtonOptionGroup}>
                {
                    props.options.map((item) => {
                        return (<TouchableOpacity style={styles.radioButton} onPress={() => { handlePress(item) }} >
                            <RadioButton color={COLORS.MAIN} value={item} status={isChecked === item ? 'checked' : 'unchecked'} onPress={() => handlePress(item)} disabled={props.isDisable} />
                            <Text style={styles.radioItemText}> {item} </Text>
                        </TouchableOpacity>)
                    })
                }
                {
                    props.hasInput
                        ? <Input value={inputValue} onChange={(e) => handleSetInputValue(e)} placeholder={"Ano"} isDisabled={isChecked !== "Sim" || props.isDisable ? true : false} mask={true} type={"year"}></Input>
                        : <View />
                }
            </View>
        </View>
    )
}