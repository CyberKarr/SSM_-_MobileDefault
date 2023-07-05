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
        paddingHorizontal: RFValue(20),
        backgroundColor: COLORS.WHITE,
        justifyContent: 'space-around'
    },

    card: {
        marginHorizontal: RFValue(0),
        width: '100%',
        justifyContent: 'center',
        alignContent: 'stretch',
        alignItems: 'center'
    },

    date: {
        color: COLORS.BLACK,
        fontSize: RFValue(40)
    },

    lastText: {
        color: COLORS.BLACK,
        fontSize: RFValue(20)
    },

    buttonGroup: {
        marginHorizontal: RFValue(0),
        width: '100%',
        alignItems: 'center'
    },

    footer: {
        backgroundColor: COLORS.MAIN,
        flex: 0.5
    }

})

export default styles;