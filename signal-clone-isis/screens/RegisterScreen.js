import { StyleSheet , View,KeyboardAvoidingView } from 'react-native'
import React, { useLayoutEffect , useState } from 'react'
import {Button, Input , Text} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import {auth} from '../firebase'

const RegisterScreen = ({navigation}) => {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [imageUrl, setImageUrl] = React.useState("")
    
    useLayoutEffect(() => {
     
        navigation.setOptions({
          headerTitleAlign: 'center',
           headerBackTitle: "Back to Login",
        });
    
    }, [navigation])


    const register = () => {
      auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.update({
          displayName: name,
          photoURL: imageUrl ||
          "https://connectingcouples.us/wp-content/uploads/2019/07/avatar-placeholder.png"
        });
      
      }).catch((error) => alert(error.message));
    };

  return (
    <KeyboardAvoidingView
    behavior="padding"
    style={styles.container}>
    <StatusBar style="Light" />

      <Text h3 style={{ marginBottom: 50}}>
      Create a Signal account
        </Text>

        <View style={styles.inputContainer}>
            <Input
                placeholder="Full Name"
                autoFocus
                type="text"
                value={name}
                onChangeText={text => setName(text)}
            />

             <Input
                placeholder="Email"
                type="email"
                value={email}
                onChangeText={text => setEmail(text)}

     
            />


             <Input
                placeholder="Password"
                type="password"
                secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
              
            />

             <Input
                placeholder="Profile Picture URL (optional)"
                type="text"
                value={imageUrl}
                onChangeText={text => setImageUrl(text)}
                onSubmitEditing={register}
            />
        </View>

        <Button 
        containerStyle={styles.button}
        raised
        onPress={register} 
        title="Register"
        />
  <View style={{ height: 100}} />
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen;


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
  
  