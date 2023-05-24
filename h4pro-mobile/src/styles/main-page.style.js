import { StyleSheet } from 'react-native';
import { COLOR } from '../constants/colors'

export const BUTTON_SIZE = 50
export const ICON_SIZE = 40
const BORDER_WIDTH = 1

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
  settingsIcon: {
    marginRight: 25
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

  snackbar: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
  },

  snackbartext: {
      color: COLOR.white,
      padding: 10
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

  scoreboardText: {
      color: COLOR.white,
      fontSize: 18,
      top: '-5%',
      textTransform: 'uppercase',
      fontWeight: '600',
      textAlign: 'center',
      alignItems: 'flex-start',
      paddingHorizontal: '5%'
  },
  scoreboardScores: {
      color: COLOR.white,
      fontSize: 60,
      textTransform: 'uppercase',
      fontWeight: '800',
  },
  scoreboardSetScore: {
      color: COLOR.white,
      fontSize: 35,
      textTransform: 'uppercase',
      fontWeight: '800',
  },


  // SessionScanner
  container_scanner: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  resultText_scanner: {
      fontSize: 18,
      marginVertical: 10,
  },
  cancelButton_scanner: {
      marginLeft: 10,
      alignItems: 'center',
      justifyContent: 'center',
  },
  cancelButtonText_scanner: {
      color: 'rgba(255,255,255,0.8)',
      fontSize: 18,
  },
  overlayContainer_scanner: {
      top: 100,
      backgroundColor: COLOR.gray,
      borderRadius: 20,
      paddingHorizontal: 25,
      paddingVertical: 20,
      position: 'absolute',
  },
  overlayText_scanner: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
  },
  closeButton_scanner: {
      justifyContent: 'center',
      alignItems: 'center',
      width: BUTTON_SIZE + BORDER_WIDTH,
      height: BUTTON_SIZE + BORDER_WIDTH,
      borderWidth: BORDER_WIDTH,
      borderRadius: BUTTON_SIZE / 2,
      backgroundColor: COLOR.gray,
      borderColor: COLOR.gray,
      position: 'absolute',
  }
});

