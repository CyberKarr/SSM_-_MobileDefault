import React from "react";
import Picker from "react-native-picker-select";
import styles from './styles';
import { SelectItem } from './_interfaces';

export function Select(props: { items: SelectItem[], selectedItem: SelectItem, setSelectedItem: (SelectItem) => void, defaultText: String, isDisabled?: boolean, on?}) {

    return (
        <Picker
            disabled={props.isDisabled}
            items={props.items}
            placeholder={{ value: null, label: props.defaultText }}
            style={{
                viewContainer: styles.picker
            }}
            onValueChange={(item) => {
                props.setSelectedItem(item)
            }}
        />
    )
}

