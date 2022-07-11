import { StyleSheet , View, Text, KeyboardAvoidingView , SafeAreaView, ScrollView, Touchable, TouchableOpacity} from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import {Button, Input , Image, Avatar} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';
import CustomListenItem from '../components/CustomListenItem';
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons';


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
      headerRight: () => (
        <View 
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 80,
          marginRight: 20,
        }}>
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => navigation.navigate("AddChat")}
          activeOpacity={0.5}>
            <SimpleLineIcons name="pencil" size={24} color="black"/>
          </TouchableOpacity>
        </View>
      ),

    });
  }, [navigation]);

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
  });
  
  