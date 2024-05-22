import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import AuthContext from '../../AuthContext/AuthContext';
import {useIsFocused} from '@react-navigation/native';
import {ToastMessage} from '../../utils/GeneralFunctions';
import styles from './HotelPage.style';

const HotelPage = ({navigation, route}) => {
  const cusine = route?.params?.cusine;
  const [selectedCusine, setSelectedCusine] = useState([]);
  const {cart, handleCart} = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    setCartItems(cart ? cart : []);
  }, [isFocused]);

  useEffect(() => {
    handleCart(cartItems);
  }, [cartItems]);

  const addToCart = newItem => {
    const exists = cartItems.some(item => item.id === newItem.id);

    if (!exists) {
      setCartItems([...cartItems, newItem]);
      ToastMessage('success', 'bottom', 'Item added to cart');
    } else {
      ToastMessage('error', 'bottom', 'Item alredy in cart');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.selCus}>select Cusines:</Text>
      <View style={styles.cusWrap}>
        {cusine?.cusine?.map((e, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.selCusine,
              selectedCusine?.cusineType == e.cusineType && {
                backgroundColor: 'orange',
              },
            ]}
            onPress={() => setSelectedCusine(e)}>
            <Text style={styles.txt}>{e.cusineType}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View>
        {selectedCusine?.cusineType && (
          <View style={styles.margin}>
            <Text style={styles.txt}>
              showing results of {selectedCusine?.cusineType} cusine :
            </Text>
          </View>
        )}

        {selectedCusine?.dishes?.map((item, index) => (
          <ScrollView key={index}>
            <TouchableOpacity
              onPress={() => addToCart(item)}
              style={styles.food}>
              <View>
                <Text style={styles.foodTxt}>{item.food}</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        ))}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('CartPage')}
        style={styles.cart}>
        <View>
          <Text style={styles.cartTxt}>cart</Text>
        </View>
      </TouchableOpacity>
      {cart?.length > 0 && (
        <View style={styles.count}>
          <Text style={styles.countTxt}>{cart?.length}</Text>
        </View>
      )}
    </View>
  );
};

export default HotelPage;
