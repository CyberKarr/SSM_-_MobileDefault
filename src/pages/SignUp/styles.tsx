import { StyleSheet, StatusBar } from 'react-native'
import { COLORS } from '../../assets/COLORS';
import { RFValue } from 'react-native-responsive-fontsize'

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
        marginVertical: RFValue(0),
        backgroundColor: COLORS.WHITE,
        // borderWidth: RFValue(1),
        // borderRadius: RFValue(6)

    },

    scroll: {
        padding: RFValue(20),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },


    footer: {
        backgroundColor: COLORS.MAIN,
        flex: 0.5
    }

})

export default styles;