import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import styles from './styles';



const ResetPassword = ({ navigation }) => {

    function handleResetPassword() {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Redefinir Senha</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.info}>
                    <Text style={styles.text}>Se os dados estiverem corretos, você receberá um email com as informações para redefinir sua senha.</Text>
                </View>
                <View style={styles.forms}>
                    <Input placeholder={'CPF'} onChange={() => ""} type={'default'} />
                    <Input placeholder={'E-mail'} onChange={() => ""} type={'default'} />
                    <Button text={'Redefinir'} type={'primary'} action={handleResetPassword} />
                </View>
            </View>
            <View style={styles.footer} />
        </View>
    )

}

export default ResetPassword;