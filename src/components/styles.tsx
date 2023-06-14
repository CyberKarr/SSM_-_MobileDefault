
import { StyleSheet } from 'react-native';
import { COLORS } from '../assets/COLORS';
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    button: {
        // backgroundColor: COLORS.SUCCESS,
        height: RFValue(38),
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
        fontSize: RFValue(14),
        maxWidth: RFValue(220)
    },

    buttonIcon: {

    },

    input: {
        height: RFValue(40),
        backgroundColor: COLORS.WHITE,
        marginBottom: RFValue(5),
        paddingHorizontal: RFValue(12),
        fontSize: RFValue(13),
        borderBottomWidth: .5,
        width: RFValue(200),
        maxWidth: RFValue(220),
    },
})

export default styles;