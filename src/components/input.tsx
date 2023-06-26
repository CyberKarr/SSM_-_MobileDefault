import React, { useEffect, useState } from "react";
import { TextInput } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import styles from './styles'

export function Input(props: { value?, placeholder: String, onChange, type, mask?: boolean }) {

    /*
    * Types must be:
    * 'cel-phone',
    * 'cpf',
    * 'cnpj',
    * 'datetime',
    * 'custom',
    * 'only-numbers',
    * 'zip-code'
    * for more info, check react-native-masked-text documentation
    */

    let maskOptions = {};
    let optionsNeeded = false;

    switch (props.type) {
        case 'cel-phone':
            maskOptions = {
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
            }
            optionsNeeded = true;
            break;
        case 'datetime':
            maskOptions = {
                format: 'DD/MM/YYYY'
            }
            optionsNeeded = true;
            break;
        default:
            optionsNeeded = false;
            break;
    }

    const handleTextChange = (value) => {
        props.onChange(value.nativeEvent.text);
    }

    if (props.mask && optionsNeeded) {
        return (
            <TextInputMask
                value={props.value}
                style={styles.input}
                onChange={handleTextChange}
                placeholder={props.placeholder.toString()}
                type={props.type}

                options={maskOptions}
            />
        );
    } else if (props.mask) {
        return (
            <TextInputMask
                value={props.value}
                style={styles.input}
                onChange={handleTextChange}
                placeholder={props.placeholder.toString()}
                type={props.type}
            />
        )
    } else {
        return (
            <TextInput
                value={props.value}
                style={styles.input}
                onChange={handleTextChange}
                placeholder={props.placeholder.toString()}
                secureTextEntry={props.type === "password" ? true : false}
            />
        )
    }
}

