import React from "react";
import { TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles';

export function Input(props: { value?, placeholder: String, onChange, type?, mask?: boolean, isDisabled?: boolean }) {

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
    let type = props.type;

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
        case 'year':
            type = 'datetime'
            maskOptions = {
                format: 'YYYY'
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
                style={props.type === 'year' ? styles.yearInput : styles.input}
                onChange={handleTextChange}
                placeholder={props.placeholder.toString()}
                type={type}
                options={maskOptions}
                selectTextOnFocus={!props.isDisabled}
                editable={!props.isDisabled}
            />
        );
    } else if (props.mask) {
        return (
            <TextInputMask
                value={props.value}
                style={styles.input}
                onChange={handleTextChange}
                placeholder={props.placeholder.toString()}
                type={type}
                selectTextOnFocus={!props.isDisabled}
                editable={!props.isDisabled}
            />
        )
    } else {
        return (
            <TextInput
                value={props.value}
                style={styles.input}
                onChange={handleTextChange}
                placeholder={props.placeholder.toString()}
                secureTextEntry={type === "password" ? true : false}
                selectTextOnFocus={!props.isDisabled}
                editable={!props.isDisabled}
            />
        )
    }
}

