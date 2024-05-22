import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
    flex: 1,
    margin: 20,
  },
  selCus: {
    color: '#000',
    fontSize: 25,
  },
  cusWrap: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selCusine: {
    width: '45%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#d2d2d4',
  },
  txt: {
    color: '#000',
    fontSize: 20,
  },
  food: {
    borderWidth: 1,
    padding: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    borderRadius: 10,
  },
  foodTxt: {
    color: '#000',
    fontSize: 16,
  },
  cart: {
    borderWidth: 1,
    padding: 10,
    position: 'absolute',
    bottom: 20,
    width: '100%',
    borderRadius: 10,
  },
  cartTxt: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  count: {
    position: 'absolute',
    backgroundColor: '#000',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 27,
    right: 20,
  },
  countTxt: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  margin: {marginVertical: 10},
});

export default styles;
