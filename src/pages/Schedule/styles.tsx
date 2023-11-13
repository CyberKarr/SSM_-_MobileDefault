import { StatusBar, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from '../../assets/COLORS';

const styles = StyleSheet.create({

    container: {
        padding: 0,
        flex: 1,
    },

    header: {
        flex: 2,
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.MAIN,

    },

    textHeader: {
        fontSize: RFValue(20),
        color: COLORS.WHITE
    },

    body: {
        flex: 12,
        alignItems: 'center',
        marginHorizontal: RFValue(20),
        backgroundColor: COLORS.WHITE,
        justifyContent: 'center',
        height: '100%',
    },

    textBody: {
        fontSize: RFValue(16),
        color: COLORS.BLACK,
        textAlign: 'center'
    },

    footer: {
        backgroundColor: COLORS.MAIN,
        flex: 0.5
    },

    scroll: {
        paddingTop: RFValue(20),
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    calendar: {
        width: RFValue(300),
    },

    modalShadow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.SHADOW
    },

    modal: {
        backgroundColor: COLORS.WHITE,
        padding: RFValue(20),
        borderRadius: RFValue(10),
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: 'center'
    },

    modalTime: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },

    modalText: {
        color: COLORS.BLACK,
        fontSize: RFValue(16)
    }

})

export default styles;