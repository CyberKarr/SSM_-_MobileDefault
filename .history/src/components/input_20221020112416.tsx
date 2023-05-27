import React from "react";
import { TextInput } from 'react-native'
import styles from './styles'

export function Input(props: { placeholder: String, onChange: () => {}, type: String }) {
    return (
        <TextInput
            style={styles.input}
            onChange={props.onChange}
            placeholder={props.placeholder.toString()}
            secureTextEntry={props.type === "pass" ? true : false  )
            }
/>
    )
}

