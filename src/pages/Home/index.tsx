import React, { useState } from "react";
import { Text, View } from "react-native";

import { CardButton } from "../../components/cardButton";
import styles from "./styles";

const Home = ({ navigation }) => {

    const [user, setUser] = useState("Juliana");

    function handleAgendar() {
        navigation.navigate('Schedule')
    }
    function handleAnamnesis() {
        navigation.navigate('Anamnesis')

    }
    function handleResultados() {
        navigation.navigate('ExamsAndResults')

    }
    function handleSobre() {
        navigation.navigate('About')
    }

    return <View style={styles.container} >
        <View style={styles.header}>
            <Text style={styles.textHeader}> Saúde da Mulher </Text>
        </View>
        <View style={styles.greeting}>
            <Text style={styles.greetingText}>Olá, {user}!</Text>
        </View>

        <View style={styles.body}>

            <CardButton action={handleAgendar} icon={"calendar"} text={"Agendar Exame"} type={"second"} />
            <CardButton action={handleAnamnesis} icon={"check"} text={"Anamnese"} type={"third"} />
            <CardButton action={handleResultados} icon={"history"} text={"Resultados e Exames"} type={"fourth"} />
            <CardButton action={handleSobre} icon={"info"} text={"Sobre"} type={"fifth"} />

            <View style={styles.effect01} />
            <View style={styles.effect02} />
            <View style={styles.effect03} />
        </View>

        <View style={styles.footer}>

        </View>


    </View>
};

export default Home;