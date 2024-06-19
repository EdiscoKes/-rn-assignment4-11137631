import React from 'react';
import {Text,StyleSheet } from 'react-native'



 export default function Apptext({children}) {
    return (
      <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:100,
        fontFamily:'Avenir',

    }
})
// since text cannot be easily modified in the developement a componnt is created for it to inherit styles from
//which makes it easier to modify
// this component is platform specificsince it only takes care of android staffs