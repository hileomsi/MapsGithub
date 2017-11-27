import { StyleSheet } from 'react-native';
import { colors } from 'assets/styles';

export default StyleSheet.create({
  buttonContainer: {
    height: 42,
    borderRadius: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  'button-color-primary': {
    backgroundColor: colors.primary.base
  },
  'button-color-secundary': {
    backgroundColor: colors.primary.base
  },
  'button-color-success': {
    backgroundColor: colors.success
  },
  'button-color-danger': {
    backgroundColor: colors.danger
  },
  'button-color-warning': {
    backgroundColor: colors.warning
  },
  'button-color-info': {
    backgroundColor: colors.info
  },
  'button-color-black': {
    backgroundColor: colors.black
  },
  'button-color-white': {
    backgroundColor: colors.white
  },
  'button-color-default': {
    backgroundColor: colors.default
  },
  text: {
    color: colors.white,
    fontWeight: 'bold'
  }
});