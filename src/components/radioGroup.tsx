import React, { useState } from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { COLORS } from "../assets/COLORS";
import { Input } from "./input";
import styles from './styles';

export function RadioGroup(props: { text: string, options: string[], controllers: (selected) => void, hasInput?: boolean, inputChange?}) {

    const [isChecked, setIsChecked] = useState(props.options[0]);
    const [inputValue, setInputValue] = useState();

    function handlePress(item) {
        setIsChecked(item)
        props.controllers(item)
    }

    function handleSetInputValue(e) {
        setInputValue(e);

    }


    return (
        <View style={styles.radioButtonGroup}>
            <Text style={styles.textItem}>{props.text}</Text>
            <View style={styles.radioButtonOptionGroup}>
                {
                    props.options.map((item) => {
                        return (<TouchableOpacity style={styles.radioButton} onPress={() => handlePress(item)}>
                            <RadioButton color={COLORS.MAIN} value={item} status={isChecked === item ? 'checked' : 'unchecked'} onPress={() => handlePress(item)} />
                            <Text style={styles.radioItemText}> {item} </Text>
                        </TouchableOpacity>)
                    })
                }
                {
                    props.hasInput
                        ? <Input value={inputValue} onChange={(e) => handleSetInputValue(e)} placeholder={"Ano"} isDisabled={isChecked === "Sim" ? false : true} mask={true} type={"year"}></Input>
                        : <View />
                }
            </View>
        </View>
    )
}