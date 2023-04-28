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
  },
});
