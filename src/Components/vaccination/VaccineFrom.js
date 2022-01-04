import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import appUrl from "../../RestApi/AppUrl";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const VaccineFrom = ({navigation}) => {

    const [phone, setPhone] = useState(null);
    const [userPhone, setUserPhone] = useState(null);
    const [applicationId, setApplicationId] = useState(null);
    const [serviceType, setServiceType] = useState('');


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

        AsyncStorage.getItem('service_type').then(value =>{
            setServiceType(value)
        });


    }, [])

    return (
        <View style={styles.SubmitBtn}>
            <TouchableOpacity onPress={()=>{
                const url = appUrl.VaccinationFrom;
                let jsonObject = {phone:phone, applicationId:applicationId, serviceType:serviceType};
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
                {
                    serviceType === 'vaccineFirst' ? (<Text style={styles.otpButtonView}>Complete first dose ?</Text>) : (<Text style={styles.otpButtonView}>Complete second dose ?</Text>)
                }
            </TouchableOpacity>
        </View>
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

export default VaccineFrom;