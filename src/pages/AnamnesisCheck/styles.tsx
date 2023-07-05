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
        backgroundColor: COLORS.WHITE,
        justifyContent: 'flex-start',
        width: '100%'
    },

    scroll: {
        alignItems: 'center',
        padding: RFValue(20),
        backgroundColor: COLORS.WHITE,
        justifyContent: 'flex-start',
        width: '100%'

    },

    footer: {
        backgroundColor: COLORS.MAIN,
        flex: 0.5
    },

})

export default styles;