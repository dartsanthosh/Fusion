import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {data} from '../../components/data';

const MainPage = ({navigation}) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [dropdownEnabled, setDropdownEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setDropdownEnabled(true)}>
          <Text
            style={
              selectedCity
                ? {color: '#000', fontSize: 20, fontWeight: 'bold'}
                : {color: '#7a8e99', fontSize: 20}
            }>
            {selectedCity ? selectedCity.city : 'select location...'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cart}
          onPress={() => navigation.navigate('CartPage')}>
          <Text style={styles.car}>cart</Text>
        </TouchableOpacity>
      </View>

      {dropdownEnabled && (
        <>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedCity(item);
                setDropdownEnabled(false);
              }}
              style={styles.cityTxt}>
              <Text style={{color: '#000', fontSize: 16}}>{item.city}</Text>
            </TouchableOpacity>
          ))}
        </>
      )}

      {selectedCity && (
        <View style={{marginVertical: 15}}>
          <Text style={{color: '#000', fontSize: 12}}>
            Restaurants in
            <Text style={styles.selCity}>&nbsp;&nbsp;{selectedCity?.city}</Text>
            .,
          </Text>
        </View>
      )}

      {selectedCity?.hotel?.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate('HotelPage', {
              cusine: item,
              city: selectedCity?.city,
            });
          }}
          style={styles.touchables}>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.city}>{selectedCity?.city}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#eeeeee',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  touchables: {
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 5,
    marginTop: 5,
  },
  name: {
    color: '#000',
    fontSize: 25,
  },
  city: {
    color: '#000',
    fontSize: 16,
  },
  cart: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  cityTxt: {
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 5,
    marginTop: 5,
  },
  selCity: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  car: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MainPage;
