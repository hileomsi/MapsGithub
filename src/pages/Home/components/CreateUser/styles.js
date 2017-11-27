import { StyleSheet } from 'react-native';
import { colors } from 'assets/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center'
  },
  content: {
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: colors.white
  },
  containerHeader: {
    alignItems: 'center'
  },
  header: {
    color: colors.text.dark,
    fontWeight: 'bold',
    fontSize: 18
  },
  containerActions: {
    flexDirection: 'row'
  },
  btnCancel: {
    backgroundColor: '#CCC',
    flex: 1,
    borderRadius: 5,
    height: 42,
    marginRight: 7
  },
  btnSave: {
    backgroundColor: '#85C47C',
    flex: 1,
    borderRadius: 5,
    height: 42,
    marginLeft: 7
  },
  text: {
    color: colors.white,
    fontWeight: 'bold'
  },
  input: {
    borderColor: '#DDD',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 10
  }
});
