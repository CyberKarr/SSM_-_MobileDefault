import { StatusBar, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from '../../assets/COLORS';

const styles = StyleSheet.create({

    container: {
        padding: 0,
        flex: 1
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
        color: COLORS.WHITE,
    },

    body: {
        flex: 12,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // margin: RFValue(60),
        // marginVertical: RFValue(60)
    },

    footer: {
        flex: 0.5,
        backgroundColor: COLORS.MAIN
    },

    forms: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: RFValue(2),
        marginBottom: RFValue(60)
    },

    info: {
        justifyContent: 'center',
        marginHorizontal: RFValue(60),
        marginTop: RFValue(60)
    },

    text: {
        fontSize: RFValue(15),
        color: COLORS.BLACK,
        textAlign: 'center',
    },

})

export default styles;