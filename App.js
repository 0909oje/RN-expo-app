import { StatusBar } from 'expo-status-bar';
import React, {useRef}from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Signature from "react-native-signature-canvas";
import SignatureScreen from "react-native-signature-canvas";

import * as FileSystem from "expo-file-system";

import Sign from './components/Sign'

export default function App() {
  const handleOK = (signature) => {

    if(signature.nativeEvent){
      let newX = signature.nativeEvent.offsetX;
      let newY = signature.nativeEvent.offsetY;
      console.log(newX);
      console.log(newY);
    }

    const path = FileSystem.cacheDirectory + "sign.png";

    FileSystem.writeAsStringAsync(
      path,
      signature.replace("data:image/png;base64,", ""),
      { encoding: FileSystem.EncodingType.Base64 }
    )
      .then(() => FileSystem.getInfoAsync(path))
      .then(console.log)
      .catch(console.error);
  };
  return (
    <Sign onOk={handleOK}/>
  );
}
