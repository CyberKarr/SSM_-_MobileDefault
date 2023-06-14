
import { StyleSheet } from 'react-native'
import { COLORS } from '../../assets/COLORS';

const styles = StyleSheet.create({

    container: {
        padding: 0,
        flex: 1
    },

    header: {
        flex: 5,
        justifyContent: 'center',
        backgroundColor: COLORS.MAIN,
        alignItems: 'center',
    },

    body: {
        flex: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'stretch',
    },

    footer: {
        flex: 1,
        backgroundColor: COLORS.MAIN,
        // maxHeight: '1rem'
    },

    bottonForm: {
        // maxHeight: '100%',
        // flex: 3
    },

    logo: {
        padding: 30,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    logoIcon: {
        color: COLORS.MAIN,
        marginTop: 10
    },

    logotext: {
        fontFamily: 'Spartan_100Thin',
        color: COLORS.MAIN,
        fontSize: 42
    },

    text: {
        fontSize: 48,
        color: 'white',
        textAlign: 'center'
    },

    forgotPassword: {
        alignContent: 'flex-start',
        fontSize: 16,
        color: COLORS.MAIN,
        textDecorationLine: 'underline',
        marginVertical: 6
    },

    forgotPasswordPress: {
        alignContent: 'flex-start',
        fontSize: 16,
        color: COLORS.EFFECT,
        textDecorationLine: 'underline',
        marginVertical: 6,
    },

})

export default styles;