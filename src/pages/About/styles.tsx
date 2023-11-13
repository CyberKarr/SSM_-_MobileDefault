import { StatusBar, StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
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
        justifyContent: 'space-around',
        backgroundColor: COLORS.BACKGROUND,
        alignItems: 'flex-start',
        paddingHorizontal: RFValue(10),
        zIndex: -1
    },

    version: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    versionText: {
        color: COLORS.BLACK,
        fontSize: RFValue(15),
        fontWeight: '500',
        textAlign: 'center'
    },

    infoText: {
        color: COLORS.BLACK,
        fontSize: RFValue(13),
        fontWeight: '500',
    },

    footer: {
        backgroundColor: COLORS.MAIN,
        flex: 0.5,
    },

    logo: {
        flex: 0.5,
        width: null,
        height: null,
        resizeMode: 'contain'
    },

    logoView: {
        flexDirection: 'row',
        height: RFValue(150),
        alignItems: 'stretch',
        justifyContent: 'space-around',
        width: '100%'
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