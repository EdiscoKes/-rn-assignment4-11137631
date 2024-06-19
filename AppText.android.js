import React from 'react';
import {Text,StyleSheet } from 'react-native'



 export default function Apptext({children}) {
    return (
      <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:10,
        fontFamily:'Roboto',

    }
})
// since text cannot be easily modified in the developement a componnt is created for it to inherit styles from
//which makes it easier to modify