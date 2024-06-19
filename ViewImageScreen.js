import React from 'react';
import {Image,StyleSheet, View ,Text} from 'react-native';

export default function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <Text  style={styles.closeIcon}>Close </Text>
            <Text  style={styles.deleteIcon}>Delete </Text>
          <Image
        resizeMode='contain'
         style={styles.image}  source={require("./assets/chair.jpg")} />

        </View>
         
    );
  
}
const styles = StyleSheet.create({
    closeIcon:{
        width: 50,
        height:50,
        backgroundColor:"#fc5c65",
        position:"absolute",
        top:40,
        left:30,
    }, 
    deleteIcon:{

        width: 50,
        height:50,
        backgroundColor:"blue",
        position:"absolute",
        top:40,
        right:30,
    },

    image: {
width: "100%",
height: "100%",
    },
    container:{
backgroundColor: "black",
flex: 1,

    }
})

