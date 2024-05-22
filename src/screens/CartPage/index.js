import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import AuthContext from '../../AuthContext/AuthContext';
import {useIsFocused} from '@react-navigation/native';
import styles from './CartPage.style';

const CartPage = () => {
  const {cart, handleCart} = useContext(AuthContext);
  const isFocused = useIsFocused();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cart ? cart : []);
  }, [isFocused]);

  useEffect(() => {
    handleCart(cartItems);
  }, [cartItems, increaseQuantity, decreaseQuantity]);

  const increaseQuantity = id => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };

  const decreaseQuantity = id => {
    setCartItems(prevItems => {
      return prevItems
        .map(item =>
          item.id === id ? {...item, quantity: item.quantity - 1} : item,
        )
        .filter(item => item.quantity > 0);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <Text style={styles.cartTxt}>Cart</Text>
        {cart.length > 0 && (
          <TouchableOpacity
            onPress={() => handleCart([])}
            style={styles.clrCart}>
            <View>
              <Text style={styles.txt}>clear cart</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      {cart.length > 0 ? (
        <>
          <ScrollView>
            {cart.map((item, index) => (
              <View key={index} style={styles.list}>
                <View style={{width: '40%'}}>
                  <Text style={styles.food}>{item.food}</Text>
                </View>

                <View style={styles.qty}>
                  <Text style={styles.qtyTxt}>{item.quantity}</Text>
                </View>

                <View style={styles.btnWrap}>
                  <TouchableOpacity
                    onPress={() => increaseQuantity(item.id)}
                    style={styles.btn}>
                    <Text style={styles.btnTxt}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => decreaseQuantity(item.id)}
                    style={styles.btn}>
                    <Text style={styles.btnTxt}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </>
      ) : (
        <View style={styles.noItm}>
          <Text style={styles.btnTxt}>No Items in Cart</Text>
        </View>
      )}
    </View>
  );
};

export default CartPage;
