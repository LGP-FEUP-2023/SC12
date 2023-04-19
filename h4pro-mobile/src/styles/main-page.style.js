import { StyleSheet } from 'react-native';
import { COLOR } from '../constants/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.background
    },
    logo: {
        width: 140,
        height: 30,
        marginTop: 50,
        marginLeft: 20
    },

    connected: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 14
    },
    swIcon: {
        width: 17,
        height: 28,
        marginRight: 8
    },
    swText: {
        color: COLOR.white,
        fontSize: 14
    },
    
    scoreboard: {
        height: '30%',
        marginTop: '12%'
    },

    basicButton: {
        flex: 0,
        backgroundColor: COLOR.gray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 20
    },

    courtButton: {
        height: '16%',
        marginTop: '6%',
        flexDirection: 'row',
        alignItems: 'stretch'
    },  
    buttonText: {
        color: COLOR.white,
        width: '70%',
        fontSize: 28,
        textTransform: 'uppercase',
        fontWeight: '600',
        textAlign: 'right'
    },
    buttonIcon: {
        width: 60,
        height: 65
    }
});