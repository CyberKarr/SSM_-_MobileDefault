import React from "react"
import { TextInputMask } from 'react-native-masked-text'
import styles from './styles'

export function maskedInput(props:
    { placeholder: String, onChange: () => {}, type: String }) {
    return (

        <TextInputMask
            type={props.type.toString()}
            style={styles.input}
            onChange={props.onChange}
            placeholder={props.placeholder.toString()}
        />
    )
}

