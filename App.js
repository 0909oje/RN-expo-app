import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Sign from './components/Sign'

export default function App() {
  const handleOK = (signature) => {
    if(signature.nativeEvent){
      let newX = signature.nativeEvent.offsetX;
      let newY = signature.nativeEvent.offsetY;
      console.log(newX);
      console.log(newY);
    }
  };

  return (
    <Sign onOk={handleOK}/>
  );
}
