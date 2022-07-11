import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { db } from '../firebase'

const CustomListenItem = ({id , chatName, enterChat}) => {

  const [chatMessages, setChatMessages] = useState([])

  useEffect(() => {
      const unsubscribe = db
      .collection('chats')
      .doc(id)
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => 
          setChatMessages(snapshot.docs.map((doc) => doc.data()))
      )
      return unsubscribe;
  },[])


  return (
   <ListItem >
        <Avatar
        rounded
        source={{
            uri: 
           // chatMessages?.[0].photoURL || 
            "https://connectingcouples.us/wp-content/uploads/2019/07/avatar-placeholder.png",
        }}
        />
      <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800"}}>
                   {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    {chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
  )
}

export default CustomListenItem

const styles = StyleSheet.create({})