import { StyleSheet, StatusBar } from 'react-native'
import { COLORS } from '../../assets/COLORS';
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({

    container: {
        padding: 0,
        flex: 1,
        backgroundColor: COLORS.GREY,
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
        flex: 12,
        ustifyContent: 'flex-start',
        backgroundColor: COLORS.BACKGROUND,
        alignItems: 'center',
        padding: RFValue(10),
        zIndex: -1
    },

    floatingButton: {
        bottom: 16,
        right: 16,
        backgroundColor: 'red',
        borderRadius: 25,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
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
        top: 300,
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
        top: 300,
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
        top: 300,
        left: 100,
        zIndex: -3,
        opacity: 0.1,
        borderRadius: 300,
        borderColor: COLORS.WHITE
    },
})

export default styles;