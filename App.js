import { StatusBar } from 'expo-status-bar';
import React, {useRef}from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Signature from "react-native-signature-canvas";
import SignatureScreen from "react-native-signature-canvas";

import Sign from './components/Sign'

export default function App() {
  const handleOK = (signature) => {
    console.log(signature);
    onOK(signature); // Callback from Component props
  };
  return (
    <Sign onOk={handleOK}/>
  );
}
