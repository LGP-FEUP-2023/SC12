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
  formTextInput: {
    backgroundColor: COLOR.gray,
    color: COLOR.lightGray,
    padding: 10,
    width: 272,
    height: 40,
    borderRadius: 23,
    fontSize: 16,
    fontWeight: '600',
  },
});
