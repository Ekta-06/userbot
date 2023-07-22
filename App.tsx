import React, {createContext, useContext, useState} from 'react';
import {Button, Text, View} from 'react-native';

export const demoContext = createContext();
const App = () => {
  const [theme, setTheme] = useState(false);
  return (
    <demoContext.Provider value={{theme, setTheme}}>
      <ShowTheme />
    </demoContext.Provider>
  );
};

const ShowTheme = () => {
  const {theme, setTheme} = useContext(demoContext);
  console.log(theme);
  return (
    <View>
      <Text>hiii</Text>
      <Button onPress={() => setTheme(val => !val)} title="clcik me" />
      {theme ? <Text>jlmjl,mhnkjhbkhnbijkn</Text> : <Text>{'kjhjhj'}</Text>}
    </View>
  );
};

export default App;
