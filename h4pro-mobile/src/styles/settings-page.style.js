
import { StyleSheet } from 'react-native';
import { COLOR } from '../constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
  },
  logo: {
    width: 141,
    height: 30,
  },
  headerText: {
    color: COLOR.white,
    fontSize: 36,
    fontWeight: '600',
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    gap: 5,
  },
  entry: {
    borderBottomWidth: 1,
    borderColor: COLOR.midGray,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  entryText: {
    color: COLOR.white,
    fontSize: 16,
    fontWeight: '600',
  },
  aboutText: {
    color: COLOR.white,
    fontSize: 14,
    fontWeight: "600",
    width: 300
  }
});
