import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { globalStyles } from '../utils/globalStyles';
import { ImageBackground } from 'react-native';
import { SvgUri } from 'react-native-svg';




const ProfileScreen = () => {
  
  // Mock data for progress bars, time spent, etc.
  const [progressBars] = useState({
    English: 70,
    Spanish: 40,
    French: 20
  });

  const [timeSpent] = useState({
    English: '15 hours',
    Spanish: '8 hours',
    French: '3 hours'
  });

  // Validation schema
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });
  
  const s = require('../utils/globalStyles');

  // Initialize Formik
  const formik = useFormik({
    initialValues: { 
      username: '',
      email: ''
      // Add more fields if needed
    },
    onSubmit: (values) => {
      // Mock API call
      setTimeout(() => {
        Alert.alert('Profile Updated', `Username: ${values.username}\nEmail: ${values.email}`);
      }, 1000);
    },
    validationSchema
  });

  return (
    
    <ImageBackground source={require('./../assets/bg.jpg')} style={s.background}>
    <ScrollView>
      <View style={[s.title, s.container]}>
        <Text style={[s.title]}>username</Text>
        
        <Image
          source={{ uri: 'your_avatar_url_here' }}
          style={{ width: 100, height: 100 }}
        />
        
        <TouchableOpacity onPress={() => { /* Handle avatar upload */ }}>
          <Text>Upload Avatar</Text>
        </TouchableOpacity>

        <TextInput
          placeholder="Username"
          onChangeText={formik.handleChange('username')}
          onBlur={formik.handleBlur('username')}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? <Text>{formik.errors.username}</Text> : null}

        <TextInput
          placeholder="Email"
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <Text>{formik.errors.email}</Text> : null}

        {/* Language Progress Bars */}
        <Text>Language Progress</Text>
        {Object.keys(progressBars).map((lang, index) => (
          <View key={index}>
            <Text>{lang}: {progressBars[lang]}%</Text>
            {/* Implement a visual progress bar here */}
          </View>
        ))}

        {/* Time Spent */}
        <Text>Time Spent Learning</Text>
        {Object.keys(timeSpent).map((lang, index) => (
          <View key={index}>
            <Text>{lang}: {timeSpent[lang]}</Text>
          </View>
        ))}

        {/* Top 3 Languages */}
        <Text>Top 3 Languages</Text>
        <Text>1. English</Text>
        <Text>2. Spanish</Text>
        <Text>3. French</Text>

        {/* Daily Streak */}
        <Text>Daily Streak: 5 days</Text>

        {/* Achievements */}
        <Text>Achievements: Beginner, Intermediate</Text>

        {/* Learning Goals */}
        <Text>Learning Goals: Learn 50 new words this week</Text>

        {/* Community Engagement */}
        <Text>Community Engagement: 20 posts, 15 likes</Text>

        {/* Friends List */}
        <Text>Friends: Alice, Bob</Text>

        {/* Leaderboard Position */}
        <Text>Leaderboard Position: #10</Text>

        {/* Scheduled Sessions */}
        <Text>Scheduled Sessions: None</Text>

        {/* Notification Settings */}
        <Button title="Notification Settings" onPress={() => { /* Navigate to Notification Settings */ }} />

        {/* Payment Settings */}
        <Button title="Payment Settings" onPress={() => { /* Navigate to Payment Settings */ }} />

        {/* Help & Support */}
        <Button title="Help & Support" onPress={() => { /* Navigate to Help & Support */ }} />

        <Button title="Save Changes" onPress={formik.handleSubmit} />
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

export default ProfileScreen;
