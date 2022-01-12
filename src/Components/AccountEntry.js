import React, { useState } from "react";
import {ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from "react-native";
import appUrl from "../RestApi/AppUrl";
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


export default function App({navigation}) {

    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={require("../../assets/images/logo.png")} />

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Phone Number"
                        placeholderTextColor="#003f5c"
                        onChangeText={(phone) => setPhone(phone)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password."
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <TouchableOpacity style={styles.loginBtn} onPress={() =>{
                    const url = appUrl.VolunteerLogin
                    let jsonObject = {phone:phone, password:password};
                    let config = {
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded', }
                    };
                    axios.post(url, JSON.stringify(jsonObject), config)
                        .then(function (response) {
                            if (response.data.status == '1')
                            {
                                AsyncStorage.setItem('phone', response.data.phone);
                                navigation.navigate("Mobile Otp")
                            }else if (response.data.status == '0')
                            {
                                Alert.alert(response.data.message)
                            }

                        })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        });

                }}>
                    <Text style={styles.textLogin}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    accountsForm:{
        flexDirection: "row",
        justifyContent: 'space-between',
        width: "100%",
        padding: 5,
        marginBottom: 10,
        marginLeft: 30

    },
    accountsText:{
        color: "#050505"
    },
    loginSign:{
        width: "50%"
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        height:  280,
        width: 230,
        marginBottom:30,
        marginTop:30,
    },

    inputView: {
        backgroundColor: "#ffffff",
        borderColor: "#0f0f0f",
        borderWidth:1,
        borderRadius: 8,
        width: "90%",
        height: 40,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        textAlign:"center",
        borderTopWidth:0
    },

    forgot_button: {
        height: 30,
        marginBottom: 10,
    },
    loginSignBtn2:{
        width: "85%",
        borderRadius: 8,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#f5f0f0",
    },
    loginSignBtn1:{
        width: "85%",
        borderRadius: 8,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#c4c3e8",
    },

    loginBtn: {
        width: "90%",
        borderRadius: 8,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#0055A1",
    },
    textLogin:{
        color: "#ffffff"
    }
});
