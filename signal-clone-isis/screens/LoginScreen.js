import { StyleSheet , View, Text, KeyboardAvoidingView } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button, Input , Image} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';


const LoginScreen = ({navigation}) => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    useEffect(() => {
      
      const unsuscribe = auth.onAuthStateChanged((authUser) => {
        if(authUser) {
          
          navigation.replace("Home");
        }
      })

      return unsuscribe;
    }, [])

    const signIn = () => {
      auth.signInWithCredential(email, password)
      .catch((error) => alert(error));
    };

  return (
    <KeyboardAvoidingView 
    behavior="padding"
    style={styles.container}>
      <StatusBar style={"Light"} />
      <Image 
      source={{
        uri: "https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_Signal..png",
      }} 
      style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input 
        placeholder="Email" 
        autoFocus
        type="email" 
        value={email} 
        onChangeText={(text) => setEmail(text)}
        />
        <Input 
        placeholder="password"
         secureTextEntry 
         type="Password"
         value={password}
         onChangeText={(text) => setPassword(text)}
         onSubmitEditing={signIn}
         />
         
      </View>

         <Button
         containerStyle={styles.button} 
         onPress={signIn}
         title="Login" />

        <Button
        onPress={() => navigation.navigate("Register")}
         containerStyle={styles.button} 
         type="outline"
         title="Register" />
        
        <View style={{height:100}} />

    </KeyboardAvoidingView>
  );
};


export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      },
    inputContainer: {
        width: 300,

    },
    button: {
       marginTop: 10,
       width: 200,
    },
  });
  
  