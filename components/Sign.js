import React, { useRef } from "react";
import { StyleSheet, View, Button } from "react-native";
import SignatureScreen from "react-native-signature-canvas";

import * as FileSystem from "expo-file-system";

const Sign = ({ onOK }) => {
  const ref = useRef();

  const handleOK = (signature) => {
    // console.log(signature);
    // onOK(signature);

    //사용자 데이터 파일이 아닌 파일에 대한 애플리케이션의 최상위 디렉터리를 가져옵니다
    const path = "FileSystem.cacheDirectory" + "sign.png";
    
    FileSystem.writeAsStringAsync(
        path,
        signature.replace("data:image/png;base64,", ""),
        { encoding: FileSystem.EncodingType.Base64 }
    )
        // 해당 파일이 파일시스템안에 존재하는지 콘솔로그
        .then(() => FileSystem.getInfoAsync(path))
        .then(console.log)
        .catch(console.error);
  };

  const handleClear = () => {
    ref.current.clearSignature();
  };

  const handleUndo = () => {
    ref.current.undo();
  };
  const handleRedo = () => {
    ref.current.redo();
  };
  const handleDraw = () => {
    ref.current.draw();
  };
  const handleErase = () => {
    ref.current.erase();
  };

  const style = `.m-signature-pad { border: none; 
    margin-left: 10px; margin-right: 20px;
    margin-top: 10px;
    height: 800px;} 
  .m-signature-pad--footer {display: none; margin: 0px;}`;

  return (
    <View style={styles.container}>
        <View style={styles.row}>
        <Button title="Draw" onPress={handleDraw} />
        <Button title="Erase" onPress={handleErase} />
        <Button title="Undo" onPress={handleUndo} />
        <Button title="Redo" onPress={handleRedo} />
        <Button title="Clear" onPress={handleClear} />
      </View>
      <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
    </View>
  );
};

export default Sign;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    // padding: 10,
  },
  row: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    alignItems: "center",
  },
});
