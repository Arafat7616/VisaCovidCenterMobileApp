import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './src/Components/Welcome';

import QRScanner from './src/Components/QRCodeScanner';
import MobileOTP from './src/Components/MobileOTP';
import Home from './src/Components/Home';
import RtPcrHome from './src/Components/RtPcrHome';
import NIDScanner from "./src/Components/Sample/index.android";
import AccountEntry from "./src/Components/AccountEntry";

//pcr
import UserOtp from './src/Components/pcr/UserOtp';
import VolunteerOtp from './src/Components/pcr/VolunteerOtp';
import PcrFrom from './src/Components/pcr/PcrFrom';
import PcrList from './src/Components/pcr/PcrList';

//rtPcr
import RtPcrUserOtp from './src/Components/rtPcr/RtPcrUserOtp';
import RtPcrVolunteerOtp from './src/Components/rtPcr/RtPcrVolunteerOtp';
import RtPcrPcrFrom from './src/Components/rtPcr/RtPcrPcrFrom';
import RtPcrPcrList from './src/Components/rtPcr/RtPcrPcrList';

//booster
import BoosterFrom from "./src/Components/booster/BoosterFrom";
import BoosterList from "./src/Components/booster/BoosterList";
import BoosterUserOtp from "./src/Components/booster/UserOtp";
import BoosterVolunteerOtp from "./src/Components/booster/VolunteerOtp";


//vaccine
import VaccineFrom from "./src/Components/vaccination/VaccineFrom";
import VaccineFirstList from "./src/Components/vaccination/VaccineFirstList";
import VaccineSecondList from "./src/Components/vaccination/VaccineSecondList";
import Vaccination from "./src/Components/vaccination/Vaccination";
import VaccineUserOtp from "./src/Components/vaccination/UserOtp";
import VaccineVolunteerOtp from "./src/Components/vaccination/VolunteerOtp";



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
            name="RtPcrHome"
            component={RtPcrHome}
            options={{ title: 'Home', style: {backgroundColor: 'gray'} }}
        />

        {/* pcr related natigation start here */}
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
            name="Pcr from"
            component={PcrFrom}
            options={{ title: 'Pcr test', style: {backgroundColor: 'gray'} }}
        />

        <Stack.Screen
          name="Pcr list"
          component={PcrList}
          options={{ title: 'Pcr registration list', style: {backgroundColor: 'gray'} }}
        />

        {/* pcr related natigation end here */}

        {/* RT-PCR related natigation start here */}
        <Stack.Screen
            name="Rt Pcr User otp"
            component={RtPcrUserOtp}
            options={{ title: 'RT-PCR User otp', style: {backgroundColor: 'gray'} }}
        />

        <Stack.Screen
            name="Rt Pcr Volunteer otp"
            component={RtPcrVolunteerOtp}
            options={{ title: 'RT-PCR Volunteer otp', style: {backgroundColor: 'gray'} }}
        />


        <Stack.Screen
            name="Rt Pcr from"
            component={RtPcrPcrFrom}
            options={{ title: 'RT-PCR test', style: {backgroundColor: 'gray'} }}
        />

        <Stack.Screen
          name="Rt Pcr list"
          component={RtPcrPcrList}
          options={{ title: 'RT-PCR registration list', style: {backgroundColor: 'gray'} }}
        />

        {/* RT-PCR related natigation end here */}

        <Stack.Screen
            name="Booster User otp"
            component={BoosterUserOtp}
            options={{ title: 'User otp', style: {backgroundColor: 'gray'} }}
        />

        <Stack.Screen
            name="Booster Volunteer otp"
            component={BoosterVolunteerOtp}
            options={{ title: 'Volunteer otp', style: {backgroundColor: 'gray'} }}
        />


        <Stack.Screen
            name="Booster from"
            component={BoosterFrom}
            options={{ title: 'Booster dose', style: {backgroundColor: 'gray'} }}
        />

        <Stack.Screen
            name="Booster list"
            component={BoosterList}
            options={{ title: 'Booster registration list', style: {backgroundColor: 'gray'} }}
        />


        <Stack.Screen
            name="Vaccine User otp"
            component={VaccineUserOtp}
            options={{ title: 'User otp', style: {backgroundColor: 'gray'} }}
        />

        <Stack.Screen
            name="Vaccine Volunteer otp"
            component={VaccineVolunteerOtp}
            options={{ title: 'Volunteer otp', style: {backgroundColor: 'gray'} }}
        />


        <Stack.Screen
            name="Vaccine from"
            component={VaccineFrom}
            options={{ title: 'Vaccination', style: {backgroundColor: 'gray'} }}
        />

        <Stack.Screen
            name="Vaccine first list"
            component={VaccineFirstList}
            options={{ title: 'First dose registration list', style: {backgroundColor: 'gray'} }}
        />

        <Stack.Screen
            name="Vaccine second list"
            component={VaccineSecondList}
            options={{ title: 'Second dose registration list', style: {backgroundColor: 'gray'} }}
        />

        <Stack.Screen
            name="Vaccination"
            component={Vaccination}
            options={{ title: 'Vaccination', style: {backgroundColor: 'gray'} }}
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
