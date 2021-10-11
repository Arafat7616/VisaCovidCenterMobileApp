import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './src/Components/Welcome';
import QRScanner from './src/Components/QRCodeScanner';
import NIDScanner from "./src/Components/Sample/index.android";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: 'Welcome', style: {backgroundColor: 'gray'} }}
        />

      <Stack.Screen
          name="Scanner"
          component={QRScanner}
          options={{ title: 'QR Code Scanner', style: {backgroundColor: 'gray'} }}
        />
        
        <Stack.Screen
          name="NIDScanner"
          component={NIDScanner}
          options={{ title: 'NID Scanner', style: {backgroundColor: 'gray'} }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
