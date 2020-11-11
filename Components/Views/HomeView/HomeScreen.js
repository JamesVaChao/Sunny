import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import ThemedButton from "../../Common/ThemedButton";
import LoginButton from "./LoginButton"
import { createStackNavigator } from "@react-navigation/stack";
const ThemeContext = React.createContext("light");
import { windowHeight, windowWidth } from '../../../utils/Dimensions';

const Stack = createStackNavigator();
export default function HomeScreen({ navigation }) {
  const selectAccount = state => state.account;
  const account = useSelector(selectAccount);

  return (
    <View style={styles.container}>

        <Image
          source={require('../../../assets/shoppers_icon.png')}
          style={styles.bigGraph}
        />

      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        <Image
          source={require('../../../assets/barcodefancy_icon.png')}
          style={styles.bigLogo}/>
        </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("PreferencesScreen")}>
        <Image
          source={require('../../../assets/orange_preferences.png')}
          style={styles.logo}/>
        </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("DataScreen")}>
        <Image
          source={require('../../../assets/orange_data.png')}
          style={styles.logo}/>
        </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ListScreen")}>
        <Image
          source={require('../../../assets/orange_item.png')}
          style={styles.logo}/>
        </TouchableOpacity>

        {/*
        <TouchableOpacity  onPress={() => navigation.navigate("LoginScreen")}>
        <Image
          source={require('../../../assets/login.png')}
          style={styles.logo}/>
        </TouchableOpacity>
        
        <TouchableOpacity  onPress={() => {
            const { type } = "";
            const { data } = "";
            navigation.navigate("ProductSingleScreen", { type, data });
          }}>
        <Image
          source={require('../../../assets/login.png')}
          style={styles.logo}/>
        </TouchableOpacity>
        */}



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    height: 90,
    width: 100,
    resizeMode: 'cover',
    margin: 7,
    borderRadius:10,
  },
  bigLogo: {
    height: 90,
    width: 300,
    resizeMode: 'cover',
    margin: 7,
    borderRadius: 10,
  },
  bigGraph: {
    height: 350,
    width: 500,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 90,
  },
});


