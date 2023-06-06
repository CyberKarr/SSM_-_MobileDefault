import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { Spartan_300Light, Spartan_100Thin, useFonts } from '@expo-google-fonts/spartan'
import { Feather as Icon } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import React, { useState } from "react";
import { Text, View, KeyboardAvoidingView, Platform, TouchableHighlight } from "react-native";
import { Button } from './../../components/button'
import { Input } from '../../components/input';

import styles from './styles'

const Login = () => {

    const [forgotPaswordPess, setForgotPaswordPess] = useState(false)

    const handleForgotPress = () => {

    }

    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Ubuntu_700Bold,
        Pacifico_400Regular,
        Spartan_300Light,
        Spartan_100Thin
    });



    if (!fontsLoaded) {
        <AppLoading />
    }

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Saúde {'\n'}da Mulher</Text>

            </View>
            <View style={styles.body}>
                <View style={styles.logo}>
                    <Icon name='github' size={38} style={styles.logoIcon}></Icon>
                    <Text style={styles.logotext}>Logo</Text>
                </View>

                <View style={styles.bottonForm}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                        <Input onChange={() => ""} type="default" placeholder="Login" />
                        <Input onChange={() => ""} type="password" placeholder="Senha" />
                        <TouchableHighlight
                            onPress={handleForgotPress}
                            underlayColor="trasparent"
                            onHideUnderlay={() => setForgotPaswordPess(false)}
                            onShowUnderlay={() => setForgotPaswordPess(true)}
                            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        >
                            <Text
                                onPress={() => console.log('PRESS 2')}
                                style={[styles.forgotPassword, forgotPaswordPess && styles.forgotPasswordPress]}>
                                Esqueci minha senha
                            </Text>
                        </TouchableHighlight>
                        <Button text={"Entrar"} action={() => ""} type={"primary"} />

                        <Button text={"Criar conta"} action={() => ""} type={"secondary"} />

                    </KeyboardAvoidingView>
                </View>
            </View>
            <View style={styles.footer} />
        </View >
    )
};

export default Login;