import { StyleSheet , View, Text, KeyboardAvoidingView , SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import {Button, Input , Image, Avatar} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';
import CustomListenItem from '../components/CustomListenItem';
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
	const signOut = () => {
		auth.signOut().then(() => navigation.replace("Login"));
	};

	const [chats, setChats] = useState([]);

	useEffect(() => {
		const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
			setChats(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			)
		);
		return unsubscribe;
	}, []);

	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Signal",
			headerStyle: { backgroundColor: "white" },
			headerTitleStyle: { color: "black" },
			headerTintColor: "black",
			headerLeft: () => (
				<View style={{ marginLeft: 20 }}>
					<TouchableOpacity activeOpacity={0.5} onPress={signOut}>
						<Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
					</TouchableOpacity>
				</View>
			),
			headerRight: () => (
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						width: 80,
						marginRight: 20,
					}}
				>
					<TouchableOpacity activeOpacity={0.5}>
						<AntDesign name="camerao" size={24} color="black" />
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.5}
						onPress={() => navigation.navigate("AddChat")}
					>
						<SimpleLineIcons name="pencil" size={24} color="black" />
					</TouchableOpacity>
				</View>
			),
		});
	}, [navigation]);

	const enterChat = (id, chatName) => {
		navigation.navigate("Chat", { id, chatName });
	};

	return (
    <SafeAreaView>
    <ScrollView style={styles.container}>
        {chats.map(({ id, data: {chatName} }) => (
            <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat}/>
        ))}     
    </ScrollView>
</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%'
    }
})