import React, { useState } from "react";
import { View, Text } from "react-native";
import { COLORS } from "../../assets/COLORS";
import { AntDesign } from '@expo/vector-icons/';

import styles from "./styles";
import { CardButton } from "../../components/cardButton";

const Home = ({ navigation }) => {

    const [user, setUser] = useState("Juliana");

    function handleAgendar() {

    }
    function handleAnamnese() {
        navigation.navigate('Anamnese')

    }
    function handleResultados() {

    }
    function handleSobre() {

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
            <CardButton action={handleAnamnese} icon={"check"} text={"Anamnese"} type={"third"} />
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