import React, { useState } from "react";
import { Text, View, Image } from "react-native";

import { CardButton } from "../../components/cardButton";
import styles from "./styles";

const About = ({ navigation }) => {



    return <View style={styles.container} >
        <View style={styles.header}>
            <Text style={styles.textHeader}> Sobre </Text>
        </View>
        <View style={styles.version}>
            <Text style={styles.versionText}>Sistema Saúde da Mulher: Agendamentos</Text>
            <Text style={styles.versionText}>v.0.10.1</Text>
        </View>

        <View style={styles.body}>
            <Text style={styles.infoText}>Esse é um projeto colaborativo entre a Universidade Federal de São joão del-Rei e a Universidade Federal de Ouro Preto.</Text>

            <Text style={styles.infoText}>Alunos Responsáveis: {'\n'}José Vinícus de Moraes{'\n'}Israel Nicolau de Souza Chagas{'\n'}Orientador: Rone Ilídio</Text>
            <Text style={styles.infoText}></Text>

            {/* <CardButton action={handleAgendar} icon={"calendar"} text={"Agendar Exame"} type={"second"} />
            <CardButton action={handleAnamnesis} icon={"check"} text={"Anamnese"} type={"third"} />
            <CardButton action={handleResultados} icon={"history"} text={"Resultados e Exames"} type={"fourth"} />
            <CardButton action={handleSobre} icon={"info"} text={"Sobre"} type={"fifth"} /> */}

            <View style={styles.logoView}>
                <Image source={require('../../assets/IMG/ufsj.png')} style={styles.logo} />
                <Image source={require('../../assets/IMG/ufop.png')} style={styles.logo} />
            </View>

            <View style={styles.effect01} />
            <View style={styles.effect02} />
            <View style={styles.effect03} />
        </View>

        <View style={styles.footer}>

        </View>


    </View>
};

export default About;