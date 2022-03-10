import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const QRCodeScanner = (props) => {
    return (
        <View style={{flex:1, flexDirection:"column", justifyContent:"center", width: "100%"}}>
            <Text style={{textAlign: "center", margin: 50, fontSize: 25}} >This is QR Code Scanner Pages!</Text>
           <TouchableOpacity style={{width: "90%", backgroundColor: "blue", height: 50, margin:15, borderRadius: 10}} onPress={() =>{
                        props.navigation.navigate("NIDScanner")
                }}>
                    <Text style={{width: "90%", textAlign: "center", justifyContent: "center", alignItems: 'center', fontSize: 30}}> Next</Text>
           </TouchableOpacity>
        </View>
    )
}

export default QRCodeScanner;
