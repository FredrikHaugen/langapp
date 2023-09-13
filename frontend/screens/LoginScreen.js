import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

import { auth } from '../firebaseConfig';

const db = getFirestore();

const SignupScreen = () => {
  // Validation schema with Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    confirmPassword: Yup.string()
       .oneOf([Yup.ref('password'), null], 'Passwords must match')
       .required('Required'),
    username: Yup.string().required('Username is required'),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: { email: '', password: '', confirmPassword: '', username: '' },
    onSubmit: async (values) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        
        // User created successfully, now save username in Firestore
        const user = userCredential.user;
        await setDoc(doc(db, 'users', user.uid), {
          username: values.username,
          email: values.email,
        });

        Alert.alert('Signup Successful', `Welcome, ${values.username}`);
        // Here, you can also navigate to the main app interface or any other screen
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Signup Failed', errorMessage);
      }
    },
    validationSchema: validationSchema,
  });

  return (
    <View>
      <Text>Sign Up</Text>
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
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? <Text>{formik.errors.password}</Text> : null}
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={formik.handleChange('confirmPassword')}
        onBlur={formik.handleBlur('confirmPassword')}
        value={formik.values.confirmPassword}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? <Text>{formik.errors.confirmPassword}</Text> : null}
      <Button title="Sign Up" onPress={formik.handleSubmit} />
    </View>
  );
};

export default SignupScreen;
