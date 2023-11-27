import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    Dimensions,
    TouchableOpacity,
    ImageBackground
  } from "react-native";

 

  const imageDoor = require("../assets/Door.png")

export default class EntranceScreen extends React.Component {

    render () {
        return(
            <ImageBackground source={imageDoor} style={styles.DoorImage}>
            <View><Text style={styles.DoorTitle}>Storyteller's Library</Text></View>
            <View>
                <TouchableOpacity style= {styles.EntrarButton}>
                    <Text style={styles.EntrarButtonFont}>Entrar</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    EntrarButton:{
        backgroundColor: "#693825",
        width: 100,
        height: 50,
        alignItems:"center",
        marginTop:100 ,
        justifyContent:"center",
        borderRadius: 50
        
    },
    EntrarButtonFont:{
        fontSize: 20,
        color: "white"
    },
    DoorImage:{
        flex: 1,
        width:400 ,
        resizeMode:"contain",
        justifyContent:"center" ,
        alignItems:"center",
    },
    DoorTitle:{
        marginTop:-135,
        fontSize: 25,
        color: "white"
    },
})

