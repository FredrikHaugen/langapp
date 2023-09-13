// AppTabs.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import UnifiedChatScreen from '../screens/UnifiedChatScreen';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Learn" component={UnifiedChatScreen} />
    </Tab.Navigator>
  );
};

export default AppTabs;
