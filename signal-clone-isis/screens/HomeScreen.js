import { StyleSheet , View, Text, KeyboardAvoidingView , SafeAreaView, ScrollView} from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import {Button, Input , Image, Avatar} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';
import CustomListenItem from '../components/CustomListenItem';



const HomeScreen = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: "backgroundColor: '#ffffff'",
      headerTitleStyle: {color: "black"},
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{marginLeft: 20}}>
          <Avatar rounded source={{uri: auth?.currentUser?.photoURL}} />
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
  
  