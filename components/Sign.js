import React, { useRef } from "react";
import { StyleSheet, View, Button } from "react-native";
import SignatureScreen from "react-native-signature-canvas";

const Sign = ({ onOK }) => {
  const ref = useRef();

  const handleOK = (signature) => {
    console.log(signature);
    onOK(signature);
  };

  const handleClear = () => {
    ref.current.clearSignature();
  };

  const handleConfirm = () => {
    console.log("end");
    ref.current.readSignature();
  };
  //
  const handleUndo = () => {
    // console.log("end");
    ref.current.undo();
  };
  const handleRedo = () => {
    //console.log("end");
    ref.current.redo();
  };
  const handleDraw = () => {
    //console.log("end");
    ref.current.draw();
  };
  const handleErase = () => {
    //console.log("end");
    ref.current.erase();
  };

  const style = `.m-signature-pad--footer {display: none; margin: 0px;}`;

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
    padding: 10,
  },
  row: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
});
