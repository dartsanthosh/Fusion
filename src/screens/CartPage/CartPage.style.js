import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    margin: 20,
  },
  cart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cartTxt: {
    color: '#000',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  clrCart: {
    borderWidth: 1,
    borderColor: '#d2d2d4',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#d95351',
  },
  txt: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 5,
    backgroundColor: '#d2d2d4',
  },
  food: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  qty: {
    backgroundColor: '#000',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyTxt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnWrap: {
    padding: 3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 5,
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  btnTxt: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  noItm: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
