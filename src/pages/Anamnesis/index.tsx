import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../components/button';
import { Information } from '../../components/info';

import styles from './styles';

const Anamnesis = ({ navigation }) => {

    const [date, setDate] = useState("25/05/2022");
    const [infoText, setInfoText] = useState("Anamnese Desatualizada");
    const [infoType, setInfoType] = useState("error");

    function handleUpdate() {
        navigation.navigate("AnamnesisUpdate")
    }

    function handleCheck() {
        navigation.navigate("AnamnesisCheck")
    }

    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Anamnese</Text>
        </View>
        <View style={styles.body}>
            <View >
                <Information text={infoText} type={infoType} />
            </View>
            <View style={styles.card}>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.lastText}>Última Anamnese</Text>

            </View>

            <View style={styles.buttonGroup}>
                <Button text={"Atualizar Anamnese"} action={handleUpdate} type={"primary"} />
                <Button text={"Vizualizar Anamnese"} action={handleCheck} type={"secondary"} />
            </View>
        </View>
        <View style={styles.footer} />
    </View>

}

export default Anamnesis;