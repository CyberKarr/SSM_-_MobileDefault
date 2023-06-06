
import { StyleSheet } from 'react-native'
import { COLORS } from '../assets/COLORS';

const styles = StyleSheet.create({
    button: {
        // backgroundColor: COLORS.SUCCESS,
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
        color: COLORS.WHITE,
        fontSize: 20
    },

    buttonIcon: {

    },

    input: {
        height: 60,
        backgroundColor: COLORS.WHITE,
        marginBottom: 8,
        paddingHorizontal: 16,
        fontSize: 20,
        borderBottomWidth: .5,
        width: 250,
        maxWidth: 350,
    },
})

export default styles;