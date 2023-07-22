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

export const VerifyOtp = ({navigation, route}: any) => {
  const [otp, setOtp] = useState('');
  const originalOtp = route.params.otp;
  const verifyOtp = () => {
    if (otp == originalOtp) {
      navigation.replace(screenNames.mainPage);
    } else {
      ToastAndroid.show('Otp did not match', ToastAndroid.SHORT);
    }
  };
  return (
    <View>
      <TextInput
        value={otp}
        onChangeText={val => setOtp(val)}
        style={styles.textInput}
        keyboardType={'numeric'}
        placeholder={'Enter Otp'}
      />
      <View style={styles.cenetrView}>
        <TouchableOpacity onPress={verifyOtp}>
          <Text>{'Verify Otp'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
