import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../../assets/COLORS";
import { AntDesign } from '@expo/vector-icons/';

import styles from "./styles";
import { CardButton } from "../../components/cardButton";

const Home = ({ navigation }) => {

    function handleAgendar() {

    }
    function handleAnamnese() {

    }
    function handleResultados() {

    }
    function handleSobre() {

    }

    return <View style={styles.container} >
        <View style={styles.header}>
            <Text style={styles.textHeader}> Sistema Saúde da Mulher </Text>
        </View>

        <View style={styles.body}>
            <View style={styles.effect01} />
            <View style={styles.effect02} />
            <View style={styles.effect03} />

            <CardButton action={handleAgendar} icon={"calendar"} text={"Agendar Exame"} type={"second"} />
            <CardButton action={handleAnamnese} icon={"check"} text={"Anamnese"} type={"third"} />
            <CardButton action={handleResultados} icon={"history"} text={"Resultados e Exames"} type={"fourth"} />
            <CardButton action={handleSobre} icon={"info"} text={"Sobre"} type={"fifth"} />
        </View>

        <View style={styles.footer}>

        </View>


    </View>
};

export default Home;