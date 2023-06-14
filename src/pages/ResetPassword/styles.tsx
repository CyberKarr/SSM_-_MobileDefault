import { StyleSheet, StatusBar } from 'react-native';
import { COLORS } from '../../assets/COLORS';
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({

    container: {
        padding: 0,
        flex: 1
    },

    header: {
        flex: 4,
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        backgroundColor: COLORS.MAIN,
        alignItems: 'center'
    },

    textHeader: {
        fontSize: RFValue(20),
        color: COLORS.WHITE,
        textAlign: 'center',
        paddingBottom: 25
    },

    body: {
        flex: 12,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: RFValue(60),
        marginVertical: RFValue(60)
    },

    footer: {
        flex: 1,
        backgroundColor: COLORS.MAIN
    },

    forms: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: RFValue(2)
    },

    info: {
        justifyContent: 'center',
        // marginBottom: RFValue(30),

    },

    text: {
        fontSize: RFValue(15),
        color: COLORS.BLACK,
        textAlign: 'center',
    },

})

export default styles;