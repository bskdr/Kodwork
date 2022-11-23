import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BaseNavigator from './navigations/BaseNavigator';
import MyProvider from './context/Provider';

const App = () => {
  return (
    <MyProvider>
      <NavigationContainer>
        <BaseNavigator />
      </NavigationContainer>
    </MyProvider>
  );
};

export default App;
