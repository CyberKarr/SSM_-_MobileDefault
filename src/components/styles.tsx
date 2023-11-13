
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../assets/COLORS';

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

    yearInput: {
        height: RFValue(40),
        backgroundColor: COLORS.WHITE,
        marginBottom: RFValue(5),
        paddingHorizontal: RFValue(12),
        fontSize: RFValue(13),
        borderBottomWidth: .5,
        width: '33%',
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
    },

    infoContent: {
        flexDirection: 'row',
        alignItems: 'center',
        height: RFValue(36),
        width: '100%',
        borderRadius: RFValue(36)
    },

    infoIcon: {
        backgroundColor: COLORS.BACKGROUND,
        height: RFValue(28),
        width: RFValue(28),
        borderRadius: RFValue(30),
        marginHorizontal: RFValue(4),
        alignItems: 'center',
        justifyContent: 'center'
    },

    infoTextArea: {
        justifyContent: 'center',
        alignItems: 'flex-start'

    },

    infoText: {
        color: COLORS.WHITE,
        paddingStart: RFValue(10),
        fontSize: RFValue(18)
    },

    textItem: {
        color: COLORS.BLACK,
        fontSize: RFValue(14)
    },

    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '33%'
    },

    radioItemText: {
        color: COLORS.BLACK,
        fontSize: RFValue(12)
    },

    radioButtonGroup: {
        width: '90%',
        alignItems: 'stretch',
        paddingTop: RFValue(20)
    },

    radioButtonOptionGroup: {
        paddingTop: RFValue(5),
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    examCardGenericView: {
        width: '100%',
        marginTop: RFValue(10),
        alignItems: 'center',
        justifyContent: 'center',

    },

    examCardButton: {
        marginBottom: RFValue(8),
        width: '100%',
        height: RFValue(70), //70
        backgroundColor: COLORS.THIRD,
        borderRadius: RFValue(10),
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexDirection: 'row',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: COLORS.BLACK
    },

    examCardInternViewText: {
        width: '80%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingStart: RFValue(15),
        alignItems: 'center',
        borderRadius: RFValue(10)
    },

    examCardInternViewIcon: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.WHITE,
        backgroundColor: COLORS.SECOND,
        borderRadius: RFValue(10),
    },

    examCardButtonText: {
        fontSize: RFValue(16),
        color: COLORS.WHITE
    },

    modalPai: {
        flex: 1
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

    modalText: {
        color: COLORS.BLACK,
        fontSize: RFValue(16)
    }

})

export default styles;