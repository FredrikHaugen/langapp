import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Button } from 'react-native';
import { getAIResponse } from './../components/OpenAiChat'; // Import from OpenAiChat.js
import { ImageBackground } from 'react-native';

const AIChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = async () => {
    if (newMessage.length > 0) {
      const updatedMessages = [...messages, { text: newMessage, sender: 'me' }];
      setMessages(updatedMessages);
      setNewMessage('');

      const aiResponse = await getAIResponse(newMessage);
      setMessages([...updatedMessages, { text: aiResponse, sender: 'AI' }]);
    }
  };

  return (
    <ImageBackground source={require('./../assets/bg.jpg')} style={{ flex: 1 }}>
    <View style={{backgroundColor: 'transparent'}}>
      <Text>AI Chat Room</Text>
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
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
    </ImageBackground>
  );
};

export default AIChatScreen;
