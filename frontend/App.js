import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AppTabs from './components/AppTabs';
import { ImageBackground } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load fonts and check authentication state
  useEffect(() => {
    const loadFontAndCheckAuth = async () => {
      try {
        await Font.loadAsync({
          'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
          'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
          'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
          'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
        });

        const token = await AsyncStorage.getItem('@auth_token');
        if (token) {
          setIsAuthenticated(true);
        }
      } catch (e) {
        console.error("Error loading fonts or checking authentication", e);
      } finally {
        setFontLoaded(true);
      }
    };

    loadFontAndCheckAuth();
  }, []);

  if (!fontLoaded) {
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <ImageBackground source={require('./assets/bg.jpg')} style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isAuthenticated ? "AppTabs" : "Login"}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="AppTabs" component={AppTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}
