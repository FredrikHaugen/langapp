import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatRoomScreen from './ChatRoomScreen';
import LanguageRoomsScreen from './LanguageRoomsScreen';
import AIChatScreen from './AIChatScreen';
import { ImageBackground } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const UnifiedChatScreen = () => {
  return (
    <ImageBackground source={require('./../assets/bg.jpg')} style={{ flex: 1 }}>
    <Tab.Navigator
      initialRouteName="LanguageRooms"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle: { fontSize: 16 },
        tabBarStyle: { backgroundColor: 'rgba(255, 255, 255, 0.1)', paddingTop: 5, paddingBottom: 10, },
      }}
    >
      <Tab.Screen
        name="Friends"
        component={ChatRoomScreen}
        options={{ tabBarLabel: 'Friends' }}
      />
      <Tab.Screen
        name="LanguageRooms"
        component={LanguageRoomsScreen}
        options={{ tabBarLabel: 'Servers' }}
      />
      <Tab.Screen
        name="AIChat"
        component={AIChatScreen}
        options={{ tabBarLabel: 'AI Chat' }}
      />
    </Tab.Navigator>
    </ImageBackground>
  );
};

export default UnifiedChatScreen;
