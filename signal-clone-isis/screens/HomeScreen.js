import { StyleSheet , View, Text, KeyboardAvoidingView , SafeAreaView, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button, Input , Image} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';
import CustomListenItem from '../components/CustomListenItem';



const HomeScreen = () => {
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
  
  