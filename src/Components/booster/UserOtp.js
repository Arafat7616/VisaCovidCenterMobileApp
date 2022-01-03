import React, {useState, useEffect} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import {View, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Text, ScrollView, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import appUrl from "../../RestApi/AppUrl";
import axios from "axios";

const UserOtp = ({navigation, route}) => {

    const [userPhone, setUserPhone] = useState(route.params.userPhone);
    const [otp, setOtp] = useState(0);


    const goForword=(message)=>{
        Alert.alert(message);
        navigation.navigate("Booster from")
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.titleStyle}>OTP Code is sent to <Text style={styles.titleNumberStyle}>{userPhone}</Text> number</Text>
                </View>
                <OTPInputView
                    style={styles.containerInput}
                    pinCount={6}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled = {(code) => {
                        setOtp(code)
                    }}
                />
            </View>

            <View style={styles.SubmitBtn}>
                <TouchableOpacity onPress={()=>{
                    const url = appUrl.OtpCheck;
                    let jsonObject = {phone:userPhone, otp:otp};
                    let config = {
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                    };

                    axios.post(url, JSON.stringify(jsonObject), config)
                        .then(function (response) {
                            console.log(response.data)
                            if (response.data.status == '1')
                            {
                                goForword(response.data.message);
                            }else if (response.data.status == '0')
                            {
                                Alert.alert(response.data.message);
                            }

                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }}  style={styles.otpButton}
                >
                    <Text style={styles.otpButtonView}>Verify & Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        display:"flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop:'50%'
    },
    titleStyle: {
        fontSize: 15,
        textAlign: 'center',
        color: "#0f0f0f"

    },
    titleNumberStyle: {
        fontSize: 15,
        textAlign: 'center',
        color: "#0055A1",

    },
    bottomView:{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        marginTop: 30,
        paddingTop: 20,
        alignItems: 'center'
    },
    textChange:{
        color: '#0055A1',
        alignItems: 'center',
        fontSize: 17

    },
    SubmitBtn:{
        textAlign:"center",
        marginLeft:"15%",
        marginTop:20
    },
    btnResend: {
        width: 200,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnChangeNumber:{
        width: 150,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',

    },
    textResend: {
        alignItems: 'center',
        fontSize: 15,
        color: "#0f0f0f"
    },
    containerInput:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width:"70%",
        marginTop:"5%",

    },
    otpButton:{
        backgroundColor: "#0055A1",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: "70%",
        borderRadius: 8,
        margin: 20,
    },
    otpButtonView:{
        color: "white",
        fontSize: 16
    },

    borderStyleHighLighted: {
        borderColor: "#10a547",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        color:"#000"
    },

    underlineStyleHighLighted: {
        borderColor: "#0055A1",
    },
});


export default UserOtp;