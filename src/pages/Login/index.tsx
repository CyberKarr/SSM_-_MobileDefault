import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Spartan_100Thin, Spartan_300Light, useFonts } from '@expo-google-fonts/spartan';
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { Feather as Icon } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Text, TouchableHighlight, View } from "react-native";
import { Input } from '../../components/input';
import { Button } from './../../components/button';

import styles from './styles';


const Login = ({ navigation }) => {

    const [forgotPaswordPess, setForgotPaswordPess] = useState(false)

    function handleNavigateForgotPassword() {
        navigation.navigate('ResetPassword')
    }

    function handleLogin() {
        navigation.navigate('Home')
    }

    function handleSignUp() {
        navigation.navigate('SignUp')
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
                            onPress={handleNavigateForgotPassword}
                            underlayColor="trasparent"
                            onHideUnderlay={() => setForgotPaswordPess(false)}
                            onShowUnderlay={() => setForgotPaswordPess(true)}
                            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        >
                            <Text
                                style={[styles.forgotPassword, forgotPaswordPess && styles.forgotPasswordPress]}>
                                Esqueci minha senha
                            </Text>
                        </TouchableHighlight>
                        <Button text={"Entrar"} action={handleLogin} type={"primary"} />

                        <Button text={"Criar conta"} action={handleSignUp} type={"secondary"} />

                    </KeyboardAvoidingView>
                </View>
            </View>
            <View style={styles.footer} />
        </View >
    )
};

export default Login;