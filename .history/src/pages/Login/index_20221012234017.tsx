import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
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
                    <TextInput style={styles.input} placeholder="Login"></TextInput>

                </View>
            </View>
            <View style={styles.footer} />
        </View >
    )


};

const styles = StyleSheet.create({

    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
        borderBottomWidth: .5,
        width: 300,


    },

    bottonForm: {
        flex: 3
    },

    logo: {
        padding: 30,
        flex: 1,
        alignItems: 'center',
    },

    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#9F3156',
    },

    logoIcon: {
        color: '#9F3156',
    },

    logotext: {
        fontFamily: 'Roboto_500Medium',
        color: '#9F3156',
        fontSize: 30
    },

    header: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        // maxHeight: 260
    },

    body: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // maxHeight: 400,
        backgroundColor: 'white'
    },

    footer: {
        flex: 1,
    },

    text: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 48,
        color: 'white',
        textAlign: 'center'
    }

})

export default Login;