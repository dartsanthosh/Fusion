import React, {useState, useCallback, useContext} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import AuthContext from '../../AuthContext/AuthContext';
import styles from './LoginPage.style';
import CustomLoader from '../../components/CustomLoader';

const LoginPage = () => {
  const {login} = useContext(AuthContext);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorFaced, setErrorFaced] = useState(null);

  const signInWithPhoneNumber = useCallback(async () => {
    setLoading(true);
    try {
      const data = await auth().signInWithPhoneNumber(
        `+91 ${phoneNumber}`,
        true,
      );
      setConfirm(data);
    } catch (error) {
      console.log('error', error);
      setErrorFaced(`${error}`);
    }
    setLoading(false);
  }, [phoneNumber]);

  const confirmCode = useCallback(async () => {
    setLoading(true);
    try {
      const response = await confirm.confirm(code);
      login(response);
    } catch (error) {
      console.log('Invalid code.', error);
    }
    setLoading(false);
  }, [confirm, code]);

  return (
    <View style={styles.container}>
      {loading && <CustomLoader />}
      <View style={{margin: 20}}>
        <View style={{paddingBottom: 15}}>
          <Text style={styles.text}>Log in using Phone Number</Text>
        </View>
        <View style={styles.phWrapper}>
          <View style={styles.counCode}>
            <Text style={{color: '#000'}}>+91</Text>
          </View>
          <TextInput
            placeholder="Enter mobile number"
            placeholderTextColor="#000"
            maxLength={10}
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            keyboardType="number-pad"
            style={styles.textInput}
          />
        </View>
        {confirm && (
          <View style={{marginTop: 20}}>
            <TextInput
              placeholder="Enter otp"
              placeholderTextColor="#000"
              maxLength={6}
              onChangeText={setCode}
              value={code}
              keyboardType="number-pad"
              style={styles.otpInput}
            />
          </View>
        )}
        {errorFaced && (
          <View style={{paddingTop: 15}}>
            <Text style={styles.error}>{errorFaced}</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.btn}
          onPress={confirm ? confirmCode : signInWithPhoneNumber}>
          <Text style={{color: '#fff'}}>
            {confirm ? 'Verify OTP' : 'Get OTP'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => login('dummyresponse')}>
          <Text style={{color: '#fff'}}>Login Without OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
