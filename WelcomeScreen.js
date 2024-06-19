



import { ImageBackground, StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';

export default function WelcomeScreen() {
  return (
    <ImageBackground 
      style={styles.background}
      source={require('./assets/bg.png')}
    >
      <View style={styles.logoContainer}>

         <Image style={styles.logo} source={require("./assets/logo-red.png")} />  
        <Text style={{color:"red",fontSize:20}}>Sell what you dont need</Text>

      </View>
      {/* <Text style={styles.login}>Hello </Text> */}
      <Text style={styles.register}> </Text>
    </ImageBackground> 
  );

  
}
const styles = StyleSheet.create({
    background: {
      flex: 1,//takes the entire screen
      justifyContent:"flex-end",//it is use to  bring the button down to the page
       alignItems:"center", // align items to the secondarily part of the screen
     
    },
    logo:{
width:100,
height:100,



    },
    login:{
      width:'100%',
      height:70,
      backgroundColor:'#fc5c65'

  },
    register:{
        width:'100%',
        height:70,
        backgroundColor:'#4ecdc4',
    },
    // this container is carring the logo and its text and hence makes align both easy
    logoContainer:{
      position:"absolute", // set the image to its default position
      top:70,
      alignItems:"center", //align the whole items to the center
  },
});

