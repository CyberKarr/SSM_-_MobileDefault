import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Select } from '../../components/select';
import styles from './styles';

const SignUp = ({ navigation }) => {

    const [nome, setNome] = useState();
    const [apelido, setApelido] = useState();
    const [numeroSus, setNumeroSus] = useState();
    const [CPF, setCPF] = useState();
    const [naturalidade, setNaturalidade] = useState();
    const [nascimento, setNascimento] = useState();
    const [nomeMae, setNomeMae] = useState();
    const [selectedRaca, setSelectedRaca] = useState();
    const [telefone, setTelefone] = useState();
    const [selectedEscolaridade, setSelectedEscolaridade] = useState();
    const [selectedEstado, setSelectedEstado] = useState();
    const [selectedCidade, setSelectedCidade] = useState();
    const [logradouro, setLogradouro] = useState();
    const [complemento, setComplemento] = useState();

    const moockedSelect = [{ value: 'value_test', label: 'label_test' }];

    const [racas, setRacas] = useState(moockedSelect);
    const [escolaridades, setEscolaridades] = useState(moockedSelect);
    const [estados, setEstados] = useState(moockedSelect);
    const [cidades, setCidades] = useState(moockedSelect);

    function buttonAvailble() {

    }

    function handleCheckfields() {
        //call endpoint
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}> Cadastrar </Text>
            </View>
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    <Input value={nome} onChange={setNome} type={'default'} placeholder={'Nome Completo'} ></Input>
                    <Input value={apelido} onChange={setApelido} type={'default'} placeholder={'Apelido'} ></Input>
                    <Input value={numeroSus} onChange={setNumeroSus} type={'default'} placeholder={'Número do cartão do SUS'} ></Input>
                    <Input value={CPF} onChange={setCPF} type={'cpf'} placeholder={'CPF'} mask></Input>
                    <Input value={naturalidade} onChange={setNaturalidade} type={'default'} placeholder={'Naturalidade'} ></Input>
                    <Input value={nascimento} onChange={setNascimento} type={'datetime'} placeholder={'Data de Nascimento'} mask></Input>
                    <Input value={nomeMae} onChange={setNomeMae} type={'default'} placeholder={'Nome da Mãe'} ></Input>
                    <Select items={racas} selectedItem={selectedRaca} setSelectedItem={setSelectedRaca} defaultText={"Raça/Cor"} />
                    <Input value={telefone} onChange={setTelefone} type={'cel-phone'} placeholder={'Telefone'} mask></Input>
                    <Select items={escolaridades} selectedItem={selectedEscolaridade} setSelectedItem={setSelectedEscolaridade} defaultText={"Escolaridade"} />
                    <Select items={estados} selectedItem={selectedEstado} setSelectedItem={setSelectedEstado} defaultText={"Estado"} />
                    <Select on={selectedEstado} items={cidades} selectedItem={selectedCidade} setSelectedItem={setSelectedCidade} defaultText={"Município"} isDisabled={selectedEstado === undefined ? true : false} />
                    <Input value={logradouro} onChange={setLogradouro} type={'default'} placeholder={'Logradouro'} ></Input>
                    <Input value={complemento} onChange={setComplemento} type={'default'} placeholder={'Complemento'} ></Input>
                    <Button text={"Cadastrar"} action={handleCheckfields} type={"primary"} isDisabled={true}></Button>
                </ScrollView>
            </View>
            <View style={styles.footer} />
        </View>
    )

}

export default SignUp;