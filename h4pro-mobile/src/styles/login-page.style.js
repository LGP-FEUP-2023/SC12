import { StyleSheet } from 'react-native';
import { COLOR } from '../constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background
  },
  logoBig: {
    width: 270,
    height: 60,
  },
  formTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: COLOR.gray,
    color: COLOR.lightGray,
    padding: 10,
    width: 272,
    height: 40,
    borderRadius: 23,
    fontSize: 16,
    fontWeight: '600',
  },
  formTextContainerError: {
    borderWidth: 2,
    borderColor: COLOR.orange
  },
  formTextInput: {
    color: COLOR.white,
    width: '100%',
    height: '100%'
  },
  linkBlue: {
    color: COLOR.blue,
    textDecorationLine: 'underline',
  },
  linkWhite: {
    color: COLOR.white,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: COLOR.gray,
    width: 163,
    height: 47,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLOR.white,
    fontSize: 18,
    fontWeight: '600'
  },
  error: {
    color: COLOR.orange,
  }
});
