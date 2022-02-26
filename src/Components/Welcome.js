import React, {useEffect, useState} from 'react';
import logo from '../../assets/images/logo.png';
import qrCodeScanner from "../../assets/images/qrcode.png";

import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Welcome = ({navigation}) => {
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("");
    const [centerType, setCenterType] = useState("");

    useEffect(()=>{
        AsyncStorage.getItem('phone').then(value =>{
            setPhone(value)
        });

        AsyncStorage.getItem('loginStatus').then(value =>{
            setStatus(value)
        });
        AsyncStorage.getItem('centerType').then(value =>{
            setCenterType(value)
        });
    }, [])

    var path = '';

    if (status == '1')
    {
        // check if this user is rtpcr center trusted medical assistent or normal center 
        if (centerType == "normal"){
            path = 'Home'
        }
        if(centerType == "rtpcr"){
            path = 'RtPcrHome'
        }
    }else {
        path = 'AccountEntry';
    }

    return (
        <View style={styles.container}>
            <View style={styles.upperBlock}>
                <Image style={styles.logo} source={logo}/>
           </View>
            <View style={{marginTop: 150}}>
                <TouchableOpacity onPress={() =>{
                        navigation.navigate(path)
                }}>
                    <Image style={styles.qrCodeScanner} source={qrCodeScanner}/>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    upperBlock:{
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        height:  300,
        width: 230,
    },
    qrCodeScanner:{
        justifyContent: 'center',
        alignItems: 'center',
        height:  90,
        width: 90,
    }
})
export default Welcome;
