import { StatusBar, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from '../../assets/COLORS';

const styles = StyleSheet.create({

    container: {
        padding: 0,
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
        zIndex: 1
    },

    header: {
        backgroundColor: COLORS.MAIN,
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
    },

    textHeader: {
        fontSize: RFValue(20),
        color: COLORS.WHITE
    },

    body: {
        flex: 10.5,
        justifyContent: 'flex-start',
        backgroundColor: COLORS.BACKGROUND,
        alignItems: 'center',
        paddingHorizontal: RFValue(10),
        zIndex: -1
    },

    greeting: {
        flex: 1.5,
        paddingLeft: RFValue(20),
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    greetingText: {
        color: COLORS.BLACK,
        fontSize: RFValue(20),
        fontWeight: '500'
    },

    footer: {
        backgroundColor: COLORS.MAIN,
        flex: 0.5,
    },

    effect01: {
        backgroundColor: COLORS.MAIN,
        width: 1000,
        height: 300,
        borderWidth: 1,
        transform: [{ rotate: '-70deg' }],
        position: 'absolute',
        top: 280,
        left: 180,
        zIndex: -1,
        opacity: 0.3,
        borderRadius: 300,
        borderColor: COLORS.WHITE
    },

    effect02: {
        backgroundColor: COLORS.MAIN,
        width: 1000,
        height: 300,
        borderWidth: 1,
        transform: [{ rotate: '-70deg' }],
        position: 'absolute',
        top: 280,
        left: 140,
        zIndex: -2,
        opacity: 0.2,
        borderRadius: 300,
        borderColor: COLORS.WHITE
    },

    effect03: {
        backgroundColor: COLORS.MAIN,
        width: 1000,
        height: 300,
        borderWidth: 1,
        transform: [{ rotate: '-70deg' }],
        position: 'absolute',
        top: 280,
        left: 100,
        zIndex: -3,
        opacity: 0.1,
        borderRadius: 300,
        borderColor: COLORS.WHITE
    },
})

export default styles;