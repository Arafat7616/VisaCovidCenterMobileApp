import React from 'react';
import {Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import appUrl from "../../RestApi/AppUrl";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Vaccination = ({navigation}) => {
    return (
       <ScrollView>
           <View style={styles.container}>
               <View>
                   <TouchableOpacity onPress={()=>{
                       navigation.navigate("Vaccine first list")
                   }} style={styles.buttonView}>
                       <Text style={styles.otpButtonView}>    Vaccination first dose    </Text>
                   </TouchableOpacity>
               </View>

               <View>
                   <TouchableOpacity onPress={()=>{
                       navigation.navigate("Vaccine second list")
                   }} style={styles.buttonView}>
                       <Text style={styles.otpButtonView}>  Vaccination second dose </Text>
                   </TouchableOpacity>
               </View>
           </View>
       </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'50%',

    },
    buttonView:{
        backgroundColor:'#0055A1',
        padding:12,
        borderRadius:6,
        margin:10,
    },
    otpButtonView:{
        color: "white",
        fontSize: 14,
        fontWeight:"bold",
    },
});

export default Vaccination;