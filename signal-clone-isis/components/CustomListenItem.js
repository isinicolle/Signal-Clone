import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, ListItem } from 'react-native-elements'

const CustomListenItem = ({id , chatName, enterChat}) => {
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
            <ListItem.Title 
            style={{fontWeight: '800'}}>
                Isis Zapata
            </ListItem.Title>
            <ListItem.Subtitle
            numberOfLines={1}
            ellipsizeMode="tail">
            Full Stack Developer
            </ListItem.Subtitle>
         </ListItem.Content>   
    </ListItem>
  )
}

export default CustomListenItem
