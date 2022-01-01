import React, {useEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import appUrl from "../../RestApi/AppUrl";
import axios from "axios";
import {Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {addLog} from "react-native/Libraries/LogBox/Data/LogBoxData";

const PcrList = ({navigation}) => {

    const [phone, setPhone] = useState("");
    const [registeredList, setRegisteredList] = useState([]);


    useEffect(()=>{
        AsyncStorage.getItem('phone').then(value =>{
            setPhone(value)

            const url = appUrl.PcrRegisteredList;
            let jsonObject = {phone:value};
            let config = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded', }
            };
            axios.post(url, JSON.stringify(jsonObject), config)
                .then(function (response) {
                    if (response.data.status == '1')
                    {
                        setRegisteredList(response.data.myData)
                        setPhone(value);
                    }else if (response.data.status == '0')
                    {
                        Alert.alert(response.data.message)
                    }

                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    }, [])

    return (
        <ScrollView>
            {
                registeredList.length > 0 && registeredList.map((single)=>{
                    return (<TouchableOpacity
                        onPress={()=>{
                            AsyncStorage.setItem('user_phone', single.user_phone);
                            AsyncStorage.setItem('service_type', "pcr");
                            AsyncStorage.setItem('application_id', single.application_id);

                            const url = appUrl.OtpSend;
                            let jsonObject = {phone:phone};
                            let config = {
                                headers: { 'Content-Type': 'application/x-www-form-urlencoded', }
                            };
                            axios.post(url, JSON.stringify(jsonObject), config)
                                .then(function (response) {
                                    if (response.data.status == '1')
                                    {
                                        navigation.navigate("Volunteer otp")
                                    }else if (response.data.status == '0')
                                    {
                                        Alert.alert(response.data.message)
                                    }

                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                        }}
                    >
                        <View style={styles.mainCard}>
                            <Text style={styles.mainCardName}>{single.user_name}</Text>
                            <Text style={styles.mainCardPhone}>{single.user_phone}</Text>
                        </View>
                    </TouchableOpacity>);
                })
            }

            {
                registeredList.length == 0 && ( <Text style={styles.mainCardError}>No Data !</Text>)
            }

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainCard: {
        backgroundColor: '#ddd',
        padding:10,
        margin:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    mainCardName:{

    },

    mainCardPhone:{

    },
    mainCardError:{

    },
});


export default PcrList;