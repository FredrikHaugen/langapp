// screens/ChatRoomScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Button, Alert } from 'react-native';
import { ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';
import globalStyles from './../utils/globalStyles.js';

const ChatRoomScreen = () => {
  const [messages, setMessages] = useState([]); // To hold the chat messages
  const [newMessage, setNewMessage] = useState(''); // To hold the new message from TextInput
  
  const sendMessage = () => {
    if (newMessage.length > 0) {
      setMessages([...messages, { text: newMessage, sender: 'me' }]);
      setNewMessage('');
    }
  };

  const s = require('./../utils/globalStyles.js');

  return (
    <ImageBackground source={require('./../assets/bg.jpg')} style={{ flex: 1 }}>
    <View style = { s.container }>
      <Text style={s.title}>Chat Room</Text>
      
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text>{item.sender}: {item.text}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      
      <TextInput
        placeholder="Type your message"
        value={newMessage}
        onChangeText={setNewMessage}
        onSubmitEditing={sendMessage}
        style={s.chat}
      />
      
      <Button title="Send" onPress={sendMessage} />
    </View>
    </ImageBackground>
  );
};

export default ChatRoomScreen;
