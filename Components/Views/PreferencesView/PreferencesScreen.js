import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Button, TouchableOpacity,Image, Text, StyleSheet } from "react-native";
import PreferenceButton from "./PreferenceButton"
import { useFonts, Nunito_400Regular} from '@expo-google-fonts/nunito';

const ThemeContext = React.createContext("light");

const PreferencesScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
  });


  return (

    <View style={styles.container}>

      <Text style={styles.text}>Set Your Preferences</Text>


      <PreferenceButton
        buttonTitle="Vegetarian"
      />
       <PreferenceButton
        buttonTitle="Vegan"
      />
       <PreferenceButton
        buttonTitle="Peanut Allergy"
      />
       <PreferenceButton
        buttonTitle="Plastic Content"
      />
       <PreferenceButton
        buttonTitle="Water Consumption"
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9BF9F',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#FFFFFF',
    fontFamily: 'Nunito_400Regular'
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

export default PreferencesScreen;
