// screens/LanguageRoomsScreen.js

import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput } from 'react-native';
import { ImageBackground } from 'react-native';

const LanguageRoomsScreen = () => {
  const [rooms, setRooms] = useState(['Spanish', 'French', 'German']); // Mock room names
  
  return (
    <ImageBackground source={require('./../assets/bg.jpg')} style={{ flex: 1 }}>
    <View>
      <Text>Language Rooms</Text>
      
      <TextInput
        placeholder="Create a new room"
        onSubmitEditing={(event) => {
          const newRoom = event.nativeEvent.text;
          setRooms([...rooms, newRoom]);
        }}
      />
      
      <FlatList
        data={rooms}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      
      {/* Add a button to join a room */}
      <Button title="Join Room" onPress={() => {/* Implement Join Room Logic */alert("Sucess")}} />
    </View>
    </ImageBackground>
  );
};

export default LanguageRoomsScreen;
