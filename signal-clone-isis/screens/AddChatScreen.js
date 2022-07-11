import { StyleSheet , View, Text, KeyboardAvoidingView } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button, Input , Image, Icon} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';


const AddChatScreen = ({navigation}) => {

    useLayoutEffect(() => {
     navigation.setOptions({
        title: "Add a new chat Screen",
        headerBackTitle: "Chats",
     });
    }, [navigation])

  return (
    <View>
      <Input>
      placeholder='Enter a chat name',
      value={Input}
        onChangeText={(text) => setInput(text)}
        leftIcon={
        <Icon />
        }
       </Input>
    </View>
  );
};

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
      },
  });
  