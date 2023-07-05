import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { RadioGroup } from '../../components/radioGroup';

import styles from './styles';

const AnamnesisCheck = ({ navigation }) => {

    const [reasonForExame, setReasonForExame] = useState('Rotina');
    const [isPreventiveTest, setIsPreventiveTest] = useState('Sim');
    const [isPregnant, setIsPregnant] = useState('Não');
    const [isUsingIUD, setIsUsingIUD] = useState('Não');
    const [isUsingContraceptivePills, setIsUsingContraceptivePills] = useState('Sim');
    const [hasUndergoneRadio, setHasUndergoneRadio] = useState('Não');
    const [hasBleedingAfterSex, setHasBleedingAfterSex] = useState('Não');
    const [hasBleedingAfterMenopause, setHasBleedingAfterMenopause] = useState('Não sei');
    const [lastPeriod, setLastPeriod] = useState('22/04/2018');
    const [lastAnamnesis, setLastAnamnesis] = useState('Data: 25/05/2022');
    const [lastExameYear, setLastExameYear] = useState('2019');

    function handleUpdate() {
        navigation.navigate('AnamnesisUpdate')

    }

    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Última Anamnese</Text>
        </View>
        <View style={styles.body}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <Input placeholder={'Data da última anamnese'} value={lastAnamnesis} onChange={setLastAnamnesis} isDisabled={true}></Input>
                <Input value={"Motivo do exame: " + reasonForExame} onChange={setReasonForExame} placeholder={'Motivo do Exame'} isDisabled={true} />
                <RadioGroup selected={isPreventiveTest} text='Fez exame preventivo?' options={['Sim', 'Não']} controllers={setIsPreventiveTest} hasInput={true} inputChange={setLastExameYear} inputValue={lastExameYear} isDisable={true} />
                <RadioGroup selected={isPregnant} text='Está grávida?' options={['Sim', 'Não', 'Não sei']} controllers={setIsPregnant} isDisable={true} />
                <RadioGroup selected={isUsingIUD} text='Está usando DIU?' options={['Sim', 'Não', 'Não sei']} controllers={setIsUsingIUD} isDisable={true} />
                <RadioGroup selected={isUsingContraceptivePills} text='Está tomando anticoncepcional?' options={['Sim', 'Não', 'Não sei']} controllers={setIsUsingContraceptivePills} isDisable={true} />
                <RadioGroup selected={hasUndergoneRadio} text='Já fez tratamento por radioterapia?' options={['Sim', 'Não', 'Não sei']} controllers={setHasUndergoneRadio} isDisable={true} />
                <RadioGroup selected={hasBleedingAfterSex} text='Tem ou já teve algum sangramento após relações sexuais? (Desconsiderar a primeira relação sexual de sua vida)' options={['Sim', 'Não', 'Não sei']} controllers={setHasBleedingAfterSex} isDisable={true} />
                <RadioGroup selected={hasBleedingAfterMenopause} text='Tem ou já teve algum sangramento após a menopausa? (Desconsiderar a vigência de reposição hormonal)' options={['Sim', 'Não', 'Não sei']} controllers={setHasBleedingAfterMenopause} isDisable={true} />
                <Input placeholder={'Data da última menstruação'} mask={true} type={'datetime'} value={lastPeriod} onChange={setLastPeriod} isDisabled={true}></Input>
                <Button text={'Atualizar Anamnese'} type={'second'} action={handleUpdate}></Button>
            </ScrollView>
        </View>
        <View style={styles.footer} />
    </View>

}

export default AnamnesisCheck;