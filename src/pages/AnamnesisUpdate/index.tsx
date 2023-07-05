import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { RadioGroup } from '../../components/radioGroup';

import styles from './styles';

const AnamnesisUpdate = ({ navigation }) => {

    const [reasonForExame, setReasonForExame] = useState();
    const [isPreventiveTest, setIsPreventiveTest] = useState("Sim");
    const [isPregnant, setIsPregnant] = useState("Sim");
    const [isUsingIUD, setIsUsingIUD] = useState("Sim");
    const [isUsingContraceptivePills, setIsUsingContraceptivePills] = useState("Sim");
    const [hasUndergoneRadio, setHasUndergoneRadio] = useState("Sim");
    const [hasBleedingAfterSex, setHasBleedingAfterSex] = useState("Sim");
    const [hasBleedingAfterMenopause, setHasBleedingAfterMenopause] = useState("Sim");
    const [lastPeriod, setLastPeriod] = useState();
    const [lastExameYear, setLastExameYear] = useState();

    function handleUpdate() {

    }

    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Atualizar Anamnese</Text>
        </View>
        <View style={styles.body}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <Input onChange={setReasonForExame} placeholder={"Motivo do Exame"} />
                <RadioGroup text='Fez exame preventivo?' options={['Sim', 'Não']} controllers={setIsPreventiveTest} hasInput={true} inputChange={setLastExameYear} />
                <RadioGroup text='Está grávida?' options={['Sim', 'Não', 'Não sei']} controllers={setIsPregnant} />
                <RadioGroup text='Está usando DIU?' options={['Sim', 'Não', 'Não sei']} controllers={setIsUsingIUD} />
                <RadioGroup text='Está tomando anticoncepcional?' options={['Sim', 'Não', 'Não sei']} controllers={setIsUsingContraceptivePills} />
                <RadioGroup text='Já fez tratamento por radioterapia?' options={['Sim', 'Não', 'Não sei']} controllers={setHasUndergoneRadio} />
                <RadioGroup text='Tem ou já teve algum sangramento após relações sexuais? (Desconsiderar a primeira relação sexual de sua vida)' options={['Sim', 'Não', 'Não sei']} controllers={setHasBleedingAfterSex} />
                <RadioGroup text='Tem ou já teve algum sangramento após a menopausa? (Desconsiderar a vigência de reposição hormonal)' options={['Sim', 'Não', 'Não sei']} controllers={setHasBleedingAfterMenopause} />
                <Input placeholder={'Data da última menstruação'} mask={true} type={'datetime'} value={lastPeriod} onChange={setLastPeriod}></Input>
                <Button text={'Atualizar'} type={'primary'} action={handleUpdate}></Button>
            </ScrollView>
        </View>
        <View style={styles.footer} />
    </View>

}

export default AnamnesisUpdate;