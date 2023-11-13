import { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button } from '../../components/button';
import { ExamCard } from '../../components/examCard';
import { exam } from '../../components/_interfaces';

import styles from './styles';

const ExamsAndResults = ({ navigation }) => {

    const mockExams: exam[] = [
        { id: 1, Date: new Date('2020-08-19T00:00:00'), name: 'Papanicolau', downloadable: true, Responsible: 'Dr. Eduardo Silva' },
        { id: 2, Date: new Date('2021-10-27T00:00:00'), name: 'Papanicolau', downloadable: true, Responsible: 'Dr. Daniel Reinaldo' },
        { id: 3, Date: new Date('2022-06-10T00:00:00'), name: 'Papanicolau', downloadable: true, Responsible: 'Dra. Kátia Patrícia' },
        { id: 4, Date: new Date('2023-06-12T00:00:00'), name: 'Papanicolau', downloadable: false }
    ]

    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Exames e Resultados</Text>
        </View>
        <View style={styles.body}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.textBody}>Selecione o exame que deseja saber dos detalhes ou baixe o resultado de um exame caso esteja disponível</Text>
                <ExamCard exams={mockExams} />
            </ScrollView>

        </View>
        <View style={styles.footer} />
    </View>

}

export default ExamsAndResults;