import { StyleSheet } from 'react-native';
import { COLOR } from '../constants/colors'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        backgroundColor: COLOR.background
    },
    logo: {
        width: 140,
        height: 30,
        marginTop: 55,
        marginLeft: 25
    }
});