
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#34CB79',
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

    input: {
        height: 60,
        backgroundColor: '#FFF',
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 20,
        borderBottomWidth: .5,
        width: 250,
        maxWidth: 250,
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
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        alignContent: 'stretch',
        alignSelf: 'stretch',
        flexWrap: 'wrap'
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