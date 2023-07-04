
import { StyleSheet } from 'react-native';
import { COLORS } from '../assets/COLORS';
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.GREY,
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

    picker: {
        fontSize: RFValue(40),
        height: RFValue(40),
        marginBottom: RFValue(5),
        paddingHorizontal: RFValue(12),
        borderBottomWidth: .5,
        width: RFValue(200),
        maxWidth: RFValue(220),
        alignSelf: 'center'
    },

    cardButton: {
        marginBottom: RFValue(6),
        width: '100%',
        height: RFValue(75), //70
        padding: RFValue(12),
        borderRadius: RFValue(10),
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },

    cardInternViewText: {
        width: '70%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingStart: RFValue(15),
        alignItems: 'center',
    },

    cardInternViewIcon: {
        width: '20%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: COLORS.WHITE
    },

    cardButtonText: {
        fontSize: RFValue(18),
        color: COLORS.WHITE
    }
})

export default styles;