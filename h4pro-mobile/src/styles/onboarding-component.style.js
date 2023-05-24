import { StyleSheet } from 'react-native';
import { COLOR } from '../constants/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.background
    },
    onBoardingComp:{
        flex:1, 
        backgroundColor: COLOR.background,
        zIndex: -100,
    },
    slideContainer:{
        alignItems: 'center', 
        flex: 1, 
        flexDirection: 'column',
        width: '100%',
    },
    slideImage:{
        height: '50%', 
        width: '100%', 
        resizeMode: 'contain', 
        marginTop: 50,
    },
    slideText:{
        height: '25%',
        alignItems: 'center',
    },
    itemTitle:{
        color: COLOR.orange,
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 50,
        textAlign: 'center',
    },
    itemSubtitle:{
        color: COLOR.white,
        fontSize: 22,
        marginTop: 10,
        marginHorizontal: 20,
        textAlign: 'center',
    },
    footerContainer:{
        height: '20%', 
        justifyContent: 'space-between', 
        paddingHorizontal: 20
    },
    footerIndicatorContainer:{
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginTop: 20
    },
    indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: COLOR.lightGray,
        marginHorizontal: 3,
        borderRadius: 2,
    },
    currentIndicator: {
        height: 2.5,
        width: 25,
        backgroundColor: COLOR.white,
        marginHorizontal: 3,
        borderRadius: 2,
    },
    nextButton:{
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: COLOR.orange,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButtonText:{
        fontWeight: 'bold', 
        fontSize: 15, 
        color: COLOR.white
    },
    getStartedButton:{
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: COLOR.orange,
        justifyContent: 'center',
        alignItems: 'center',
    },
    getStartedButtonText:{
        fontWeight: 'bold', 
        fontSize: 15, 
        color: COLOR.white
    },
    skipButton:{
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: COLOR.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    skipButtonText:{
        fontWeight: 'bold', 
        fontSize: 15
    }
});