import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './src/Components/Welcome';

import QRScanner from './src/Components/QRCodeScanner';
import MobileOTP from './src/Components/MobileOTP';
import Home from './src/Components/Home';
import NIDScanner from "./src/Components/Sample/index.android";
import AccountEntry from "./src/Components/AccountEntry";


//pcr
import PcrFrom from './src/Components/pcr/PcrFrom';
import PcrList from './src/Components/pcr/PcrList';
import UserOtp from './src/Components/pcr/UserOtp';
import VolunteerOtp from './src/Components/pcr/VolunteerOtp';


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
              name="AccountEntry"
              component={AccountEntry}
              options={{ title: 'Login', style: {backgroundColor: 'gray'} }}
          />

          <Stack.Screen
              name="Mobile Otp"
              component={MobileOTP}
              options={{ title: 'Mobile Otp', style: {backgroundColor: 'gray'} }}
          />

          <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'Home', style: {backgroundColor: 'gray'} }}
          />


        <Stack.Screen
            name="Pcr from"
            component={PcrFrom}
            options={{ title: 'Pcr test', style: {backgroundColor: 'gray'} }}
        />

        <Stack.Screen
          name="Pcr list"
          component={PcrList}
          options={{ title: 'Pcr registration list', style: {backgroundColor: 'gray'} }}
        />

        <Stack.Screen
          name="User otp"
          component={UserOtp}
          options={{ title: 'User otp', style: {backgroundColor: 'gray'} }}
        />

        <Stack.Screen
          name="Volunteer otp"
          component={VolunteerOtp}
          options={{ title: 'Volunteer otp', style: {backgroundColor: 'gray'} }}
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
