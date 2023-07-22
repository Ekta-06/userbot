import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Login} from './src/screens/Login';
import {screenNames} from './src/contants/Constants';
import {VerifyOtp} from './src/screens/VerifyOtp';
import {MainScreen} from './src/screens/MainScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={screenNames.loginScreen} component={Login} />
        <Stack.Screen name={screenNames.verifyOtp} component={VerifyOtp} />
        <Stack.Screen name={screenNames.mainPage} component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
