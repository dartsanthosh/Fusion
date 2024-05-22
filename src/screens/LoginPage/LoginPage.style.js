import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  phWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
  },
  counCode: {
    backgroundColor: '#fff',
    borderWidth: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textInput: {
    backgroundColor: 'white',
    flex: 1,
    color: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    padding: 10,
  },
  otpInput: {
    backgroundColor: 'white',
    color: '#000',
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
  btn: {
    backgroundColor: '#1e8a61',
    width: 300,
    alignItems: 'center',
    padding: 10,
    margin: 15,
    borderRadius: 10,
  },
  error: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
