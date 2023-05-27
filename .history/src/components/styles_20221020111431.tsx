
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
})

export default styles;