import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
  const [user, setuser] = useState(null);
  const [id, setId] = useState(0);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadToken = async () => {
      let userDetails = await AsyncStorage.getItem('@user');
      setuser(JSON.parse(userDetails));
      setLoading(false);
    };

    loadToken();
  }, []);

  useEffect(() => {
    const loadCart = async () => {
      let cartDetails = await AsyncStorage.getItem('@cart');

      setCart(JSON.parse(cartDetails));
    };

    loadCart();
  }, []);

  useEffect(() => {
    const getID = async () => {
      let ID = await AsyncStorage.getItem('@ID');
      setId(JSON.parse(ID));
    };

    getID();
  }, []);

  const login = async userInfo => {
    await AsyncStorage.setItem('@user', JSON.stringify(userInfo));
    setuser(userInfo);
  };

  const handleCart = async cartItems => {
    await AsyncStorage.setItem('@cart', JSON.stringify(cartItems));
    setCart(cartItems);
  };

  const handleID = async idUsed => {
    await AsyncStorage.setItem('@ID', JSON.stringify(idUsed));
    setId(idUsed);
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        login,
        cart,
        handleCart,
        id,
        handleID,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
