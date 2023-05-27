import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import { Feather as Icon } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import React from "react";
import { Text, TextInput, View, KeyboardAvoidingView, Platform } from "react-native";
import { RectButton } from 'react-native-gesture-handler'
import styles from './styles'

const Login = () => {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Ubuntu_700Bold,
        Pacifico_400Regular
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
                    {/* <Image source={require('../../assets/logo.png')}></Image> */}
                    <Icon name='github' size={38} style={styles.logoIcon}></Icon>
                    <Text style={styles.logotext}>Logo</Text>
                </View>

                <View style={styles.bottonForm}>
                    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                        <TextInput style={styles.input} placeholder="Login" />
                        <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" />
                        <RectButton style={styles.button} onPress={() => { }}>
                            <View style={styles.buttonIcon}></View>
                            <Text style={styles.buttonText}>
                                Entrar
                            </Text>
                        </RectButton>
                    </KeyboardAvoidingView>
                </View>
            </View>
            <View style={styles.footer} />
        </View >
    )
};

export default Login;