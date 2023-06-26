import { StyleSheet, StatusBar } from 'react-native'
import { COLORS } from '../../assets/COLORS';
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({

    container: {
        padding: 0,
        flex: 1,
        backgroundColor: COLORS.GREY
    },

    header: {
        backgroundColor: COLORS.MAIN,
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight
    },

    textHeader: {
        fontSize: RFValue(20),
        color: COLORS.WHITE
    },

    body: {
        flex: 12,
        alignItems: 'stretch',
        margin: RFValue(6),
        backgroundColor: COLORS.WHITE,
        borderRadius: RFValue(10)

    },

    scroll: {
        paddingTop: RFValue(20),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingBottom: RFValue(20)
    },


    footer: {
        backgroundColor: COLORS.MAIN,
        flex: 1
    }

})

export default styles;