import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2CZrkE8BCwvk49aTVb5F5a175Tmc7-Ig",
  authDomain: "lang-app-b5569.firebaseapp.com",
  projectId: "lang-app-b5569",
  storageBucket: "lang-app-b5569.appspot.com",
  messagingSenderId: "347585383782",
  appId: "1:347585383782:web:49cf5fb44cc9f58e864ca7",
  measurementId: "G-97HYQQC2WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };
