import { StyleSheet } from 'react-native';
import { COLOR } from '../constants/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.background
    },
    content: {
        flex: 1,
        backgroundColor: COLOR.background
    },
    logo: {
        width: 140,
        height: 30,
        marginTop: 50,
        marginLeft: 30
    },
    
    scoreboard: {
        flex: 0,
        backgroundColor: COLOR.gray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 20,
        height: '30%',
        marginBottom: '80%',
    }
});