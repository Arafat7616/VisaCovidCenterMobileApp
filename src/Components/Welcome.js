import React, {useEffect, useState} from 'react';
import logo from '../../assets/images/logo.png';
import qrCodeScanner from "../../assets/images/qrcode.png";

import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Welcome = ({navigation}) => {
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("");

    useEffect(()=>{
        AsyncStorage.getItem('phone').then(value =>{
            setPhone(value)
        });

        AsyncStorage.getItem('loginStatus').then(value =>{
            setStatus(value)
        });

    }, [])

    var path = '';

    if (status == '1')
    {
        path = 'Home'
    }else {
        path = 'AccountEntry';
    }

    return (
        <View style={styles.container}>
            <View style={styles.upperBlock}>
                <Image style={styles.logo} source={logo}/>
                <Text style={{textAlign: "center", marginLeft: 77, marginTop: -16}}>A Trusted Service !</Text>
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
        height:  150,
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
