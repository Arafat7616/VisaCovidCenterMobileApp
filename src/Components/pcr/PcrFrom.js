import React, {useState, useEffect} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import {View, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Text, ScrollView, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import appUrl from "../../RestApi/AppUrl";
import axios from "axios";

const PcrFrom = ({navigation}) => {

    const [phone, setPhone] = useState(null);
    const [userPhone, setUserPhone] = useState(null);
    const [applicationId, setApplicationId] = useState(null);


    useEffect(()=>{
        AsyncStorage.getItem('phone').then(value =>{
            setPhone(value)
        });

        AsyncStorage.getItem('user_phone').then(value =>{
            setUserPhone(value)
        });

        AsyncStorage.getItem('application_id').then(value =>{
            setApplicationId(value)
        });


    }, [])

    return (
        <>
            <View style={styles.SubmitBtn}>
                <TouchableOpacity onPress={()=>{
                    const url = appUrl.PcrFrom;
                    let jsonObject = {phone:phone, applicationId:applicationId};
                    let config = {
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                    };

                    axios.post(url, JSON.stringify(jsonObject), config)
                        .then(function (response) {
                            if (response.data.status == '1')
                            {
                                Alert.alert(response.data.message)
                                AsyncStorage.setItem('user_phone', "");
                                AsyncStorage.setItem('service_type', "");
                                AsyncStorage.setItem('application_id', "");
                                navigation.navigate("Home")
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
                    <Text style={styles.otpButtonView}>Complete sample collection ?</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        fontSize: 15,
        textAlign: 'center',
        color: "#0f0f0f"

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
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
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
});

export default PcrFrom;