import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico'
import AppLoading from 'expo-app-loading';
import { Feather as Icon } from '@expo/vector-icons'

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

                </View>
            </View>
            <View style={styles.footer} />
        </View >
    )


};


export default Login;