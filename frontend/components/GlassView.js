
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

const GlassView = ({ children }) => (
  <BlurView style={styles.glass} blurType="light" blurAmount={10}>
    {children}
  </BlurView>
);

const styles = StyleSheet.create({
  glass: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 20,
    backdropFilter: 'blur(10px) saturate(100%)',
  },
});

export default GlassView;
