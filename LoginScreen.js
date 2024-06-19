// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet,SafeAreaView,ScrollView } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <ScrollView> 
    
     <SafeAreaView style={styles.safe}>
 <View style={styles.container}>
    <View style={styles.titles}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.subtitle}>Welcome back! 👋</Text>
      <Text style={styles.smallTitle}>Lets login. Apply to jobs!</Text>
      </View>
      <TextInput
        style={styles.input} 
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email" 
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
     

      <Text style={styles.orContinueWith} > 
  
    ----
  or continue with------ </Text>
    

      <View style={styles.socialLogos}>
        <Image source={require('./assets/apple1.png')} style={styles.logo} />
        <Image source={require('./assets/google.png')} style={styles.logo} />
        <Image source={require('./assets/fb.png')} style={styles.logo} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
      <View style={styles.cont}>
     <Text  style={styles.regText}>Haven't an account? <Text style={styles.registerText}> Register</Text> </Text>  
     </View>
      </TouchableOpacity>
    </View>

    </SafeAreaView>
   
    
    </ScrollView>
   
  );
};

const styles = StyleSheet.create({

  safe: {
    
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },



  titles:{
    margin:40,
    padding:20,
    marginLeft:-19,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: '',
    margin:10,
    color: '#356899'
   
    
  },
  subtitle: {
    fontSize: 20,
    fontWeight:'bold',
    textAlign: '',
     margin:10,
    
    
    
    
  },
  smallTitle: {
    fontSize: 16,
    textAlign: '',
    marginBottom: 20,
     margin:10,
     color:"grey"
    
  },
  input: {
    height: 70,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:10,
    marginBottom: 20,
    paddingHorizontal: 10,
    padding:20,
    
   
  },
  loginButton: {
    backgroundColor: '#356899',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius:5,
    height:60
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
 
  },
  orContinueWith: {
    textAlign: 'center',
    marginBottom: 10,
     marginTop: 40,
     fontSize:20,
     color:"grey"
  },
  socialLogos: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
    
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius:100,
    marginTop: 40,
  },
  registerText: {
    textAlign: 'center',
    color: 'blue',
    
  },
  regText:{

    textAlign: 'center',

  },
  cont:{
    margin:50
  }




});

export default LoginScreen;