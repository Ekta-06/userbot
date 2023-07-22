import axios from 'axios';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {screenNames} from '../contants/Constants';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    marginHorizontal: 8,
    marginVertical: 16,
    borderRadius: 10,
    paddingLeft: 8,
  },
  cenetrView: {
    margin: 8,
    alignItems: 'center',
  },
});

export const Login = ({navigation}: any) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const onpressLogin = () => {
    if (mobileNumber.length !== 10) {
      ToastAndroid.show('Enter Valid mobile Number', ToastAndroid.SHORT);
    } else {
      axios
        .post('https://flutter.magadh.co/api/v1/users/login-request', {
          phone: mobileNumber,
        })
        .then(response => {
          console.log(response.data);
          navigation.navigate(screenNames.verifyOtp, {otp: response.data.otp});
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <View>
      <TextInput
        value={mobileNumber}
        onChangeText={number => setMobileNumber(number)}
        keyboardType={'numeric'}
        maxLength={10}
        placeholder="Enter your number"
        style={styles.textInput}
      />
      <View style={styles.cenetrView}>
        <TouchableOpacity onPress={onpressLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
