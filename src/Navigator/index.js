import React, {useContext} from 'react';

// Navigator
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Screens
import LoginPage from '../screens/LoginPage';
import MainPage from '../screens/MainPage';
import HotelPage from '../screens/HotelPage';
import CartPage from '../screens/CartPage';

import AuthContext from '../AuthContext/AuthContext';
import CustomLoader from '../components/CustomLoader';

const Navigator = () => {
  const {user, loading} = useContext(AuthContext);

  if (loading) {
    return <CustomLoader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user == null ? (
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="HotelPage"
              component={HotelPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CartPage"
              component={CartPage}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
