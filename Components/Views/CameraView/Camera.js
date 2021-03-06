import React, { Fragment, useState, useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

function Camera({ scanned, setScanned, onScan, navigation }) {
  const handleBarCodeScanned = ({ type, data }) => {
    onScan(type, data);
  }
 
  return (
    <Fragment>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button
          title={"Tap to Scan Again"}
          onPress={() => {
            setScanned(false);
            ExpoCamera.resumePreview();
          }}
        />
      )}
    </Fragment>
  );
}

export default Camera;
