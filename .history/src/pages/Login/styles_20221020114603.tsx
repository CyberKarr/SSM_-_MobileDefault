
import { StyleSheet } from 'react-native'
import { COLORS } from '../../assets/COLORS';

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.success,
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: 8
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20
    },

    buttonIcon: {

    },

    bottonForm: {
        // flex: 3
    },

    logo: {
        padding: 30,
        // flex: 2,
        alignItems: 'center',
    },

    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#9F3156',
    },

    logoIcon: {
        color: '#9F3156',
        marginTop: 10
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
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        alignContent: 'stretch'
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

export default styles;