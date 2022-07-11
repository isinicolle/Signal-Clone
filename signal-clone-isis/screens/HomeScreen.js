import { StyleSheet , View, Text, KeyboardAvoidingView , SafeAreaView, ScrollView, Touchable, TouchableOpacity} from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import {Button, Input , Image, Avatar} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';
import CustomListenItem from '../components/CustomListenItem';



const HomeScreen = ({navigation}) => {

  const signOutUser = () => {
    Auth.signOut()
      .then(() => {
        navigation.replace("Login");
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: "backgroundColor: '#ffffff'",
      headerTitleStyle: {color: "black"},
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{marginLeft: 20}}>
            <TouchableOpacity 
            onPress={signOutUser}
            activeOpacity={0.5}>
          <Avatar rounded source={{uri: auth?.currentUser?.photoURL}} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <SafeAreaView> 
        <ScrollView>
        <View style={styles.container}>
           <CustomListenItem />
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
  
  