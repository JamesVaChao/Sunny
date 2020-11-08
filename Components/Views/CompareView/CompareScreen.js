import React, { useState, useEffect } from "react";
import {Button, View, Text,StyleSheet,Image } from "react-native";
import { useFonts, Nunito_400Regular} from '@expo-google-fonts/nunito';
import { AppLoading} from 'expo';
import * as Font from 'expo-font'
import serverInfo from './../../Common/ServerInfo.js';

export default function CompareScreen({ route, navigation }) {
  let { products } = route.params;
  let n = products.length
  let productInfo = []

  for (var i =0; i<n; i++){
    let t = JSON.parse(products[i])
    productInfo.push(t)
  }
  const [fontsLoaded, setFontLoaded] = useState(false);
  Font.loadAsync({  
    'Nunito': require('../../../assets/fonts/Nunito-Regular.ttf')
  }).then(() => setFontLoaded(true));

 if (!fontsLoaded) {
    return <AppLoading / >
  }
    return (
      <View style={styles.container}>
      <Text style={styles.textTitle}>Compare Screen</Text>
        <Image
          source={require('../../../assets/sun_blob.png')}
          style={styles.productImage}
        />
      <Text>
        Number of products: {n} 
      </Text>
      <Text>
        Product 1: {productInfo[0].item} 
        Product 2: {productInfo[1].item}
      </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9BF9F',
    flex: 1,
    alignItems: "center", 
    justifyContent: "center",
    padding: 20,
  },
  productImage: {
    height: 350,
    width: 250,
    resizeMode: 'cover',
    borderRadius:10
  },
  textTitle: {
    fontSize: 38,
    color: '#FFFFFF',
    marginTop: -100,
    fontFamily: 'Nunito'
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
});