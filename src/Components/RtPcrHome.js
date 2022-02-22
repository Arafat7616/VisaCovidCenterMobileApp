import React, {useEffect, useState} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PCR from '../../assets/images/pcr_success_image.png';
import Vaccination from '../../assets/images/vaccine_success_image.png';
import Booster from '../../assets/images/booster_success_image.png';

const RtPcrHome = ({navigation}) => {

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

    if (status == '0')
    {
        navigation.navigate("AccountEntry")
    }

    return (
        <ScrollView>
            <View style={styles.mainCard}>
                <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate("Rt Pcr list")
                    }}
                >
                    <Image  style={styles.mainCardContent} source={PCR} />
                </TouchableOpacity>
            </View>

            <View style={styles.logOutButton}>
                <TouchableOpacity
                    onPress={()=>{
                        AsyncStorage.setItem('loginStatus', "");
                        AsyncStorage.setItem('centerType', "");
                        navigation.navigate("AccountEntry")
                    }}
                >
                    <Text style={styles.logOutButtonText}>Log out</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainCard: {
        backgroundColor: '#ddd',
        padding:10,
        margin:15,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    mainCardContent:{
        width:100,
        height:130,

    },
    logOutButton:{
        backgroundColor: "#f63d3d",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: "95%",
        borderRadius: 8,
        margin:10,
    },
    logOutButtonText:{
        color:'white',
        fontWeight:"bold",
    }
});

export default RtPcrHome;