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
        marginTop: 55,
        marginLeft: 25
    },
    
    help: {
        width: 45,
        height: 45,
        marginTop: 0,
        marginRight: 20,
        marginLeft: 'auto'
    },
    
    scoreboard: {
        height: '30%',
        marginTop: '20%'
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
        height: '14%',
        marginTop: '6%',
        flexDirection: 'row',
        alignItems: 'stretch'
    },  
    buttonText: {
        color: COLOR.white,
        width: '70%',
        fontSize: 26,
        textTransform: 'uppercase',
        fontWeight: '600',
        textAlign: 'right'
    },
    buttonIcon: {
        width: 60,
        height: 65
    },

    scoreboardText:{
        color: COLOR.white,
        fontSize: 18,
        top: '-5%',
        textTransform: 'uppercase',
        fontWeight: '600',
        textAlign: 'left',
        alignItems: 'flex-start'
    
    },
    scoreboardScores:{
        color: COLOR.white,
        fontSize: 60,
        textTransform: 'uppercase',
        fontWeight: '800',
    },
    scoreboardSetScore:{
        color: COLOR.white,
        fontSize: 35,
        textTransform: 'uppercase',
        fontWeight: '800',
    }
});