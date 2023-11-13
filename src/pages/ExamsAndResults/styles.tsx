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
        alignItems: 'stretch',
        marginHorizontal: RFValue(20),
        backgroundColor: COLORS.WHITE,
        justifyContent: 'space-around'
    },

    textBody: {
        fontSize: RFValue(15),
        color: COLORS.BLACK
    },

    footer: {
        backgroundColor: COLORS.MAIN,
        flex: 0.5
    },

    scroll: {
        paddingTop: RFValue(20),
        width: '100%',
        alignItems: 'center',
    },



})

export default styles;