import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect} from "react";
import { View, Button, TouchableOpacity,Image, Text, StyleSheet, Modal } from "react-native";
import PreferenceButton from "./PreferenceButton"
import { useFonts, Nunito_400Regular} from '@expo-google-fonts/nunito';
import { useSelector, useDispatch  } from 'react-redux'
import { constants } from "redux-firestore";
import Icon from 'react-native-vector-icons/FontAwesome';
import {MaterialIcons} from "@expo/vector-icons"
import serverInfo from '../../Common/ServerInfo.js';
import commonFunctions from '../../Common/commonFunctions.js';
import {windowHeight, windowWidth} from '../../../utils/Dimensions';

const ThemeContext = React.createContext("light");
const selectPreferences = state => state.preferences

const PreferencesScreen = ({navigation}) => {
  const dispatchPreferences = useDispatch()
  const selectAccount = state => state.account;
  const accountRedux = useSelector(selectAccount);
  const updatePreferenceFromServerResponse = (response) => {
    debugger;
    dispatchPreferences({ type: 'preferences/update', preference: "Vegetarian", payload: response.preference.isAVegetarian })
    dispatchPreferences({ type: 'preferences/update', preference: "Vegan", payload: response.preference.isAVegan })

  }
  const updatePreference = (preference, isTracking) => {
    debugger;
    serverInfo.callServer("POST", "toggleUserIsA" + preference, {userID:  accountRedux.userID, passwordHash: accountRedux.passwordHash }, (response)=>updatePreferenceFromServerResponse(response))

  }

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
  });

  const preferences = useSelector(selectPreferences);

  let imagePath = require('../../../assets/fair_trade.png');


  return (

    <View style={styles.container}>

      <Modal visible={modalOpen} animationType = "slide">
      <View style={styles.modalContent}>
        <Icon name="remove" style={styles.removeIcon}
            onPress={() => setModalOpen(false)} />
            <View style={{ flexDirection: 'row', margin: 10, }}>
              <Image source={require('../../../assets/vegetarian.png')} style={styles.susIcon} />
              <View style={{ flexDirection: 'column', margin: 10, }}>
                <Text style={styles.modalTextTitle}>Vegetarian</Text>
                <Text style={styles.modalText}>Foods that don't contain dairy or meat produce</Text>
               </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 10, }}>
              <Image source={require('../../../assets/vegan.png')} style={styles.susIcon} />
              <View style={{ flexDirection: 'column', margin: 10, }}>
                <Text style={styles.modalTextTitle}>Vegan</Text>
                <Text style={styles.modalText}>Foods that don't contain any ingredients produced by animals</Text>
               </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 10, }}>
              <Image source={require('../../../assets/fair_trade.png')} style={styles.susIcon} />
              <View style={{ flexDirection: 'column', margin: 10, }}>
                <Text style={styles.modalTextTitle}>Fair Trade</Text>
                <Text style={styles.modalText}>Products made under good working conditions with employees paid living wages</Text>
               </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 10, }}>
              <Image source={require('../../../assets/sustainable.png')} style={styles.susIcon} />
              <View style={{ flexDirection: 'column', margin: 10, }}>
                <Text style={styles.modalTextTitle}>Sustainable</Text>
                <Text style={styles.modalText}>This company is in the list of top 100 sustainable companies</Text>
               </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 10, }}>
                    <TouchableOpacity style={styles.greenEmission}>
                    <Text style={styles.textEmission}> 3.4 </Text>
                    </TouchableOpacity>
              <View style={{ flexDirection: 'column', margin: 10, }}>
                <Text style={styles.modalTextTitle}>GHG Emission</Text>
                <Text style={styles.modalText}>Represents the amount of green house gas per kg (average is 3.4)</Text>
               </View>
            </View>
               


      </View>
      </Modal>
     
      
      <View style={{ flexDirection: 'row', margin: 10, }}>
      <Text style={styles.text}>Set Your Preferences</Text>
      <Icon name="info-circle" style={styles.infoIcon}
            onPress={() => setModalOpen(true)} />
      </View>
      <Text style={styles.textSmall}>select the items you would like to track</Text>


      <View style={{ flexDirection: 'row', margin: 10, }}>
      
       <PreferenceButton
        buttonTitle="Vegetarian" buttonImage = {require('../../../assets/vegetarian.png')} isToggled={()=>preferences.isTrackingVegetarian} onClickCallback={(isTracking) => updatePreference("Vegetarian", isTracking)}
      />
       <PreferenceButton
        buttonTitle="Vegan" buttonImage = {require('../../../assets/vegan.png')} isToggled= {()=>preferences.isTrackingVegan} onClickCallback={(isTracking) => updatePreference("Vegan", isTracking)}
      />
      </View>
      {/*
       <PreferenceButton
        buttonTitle="Peanut Allergy" initialToggle= {preferences.isTrackingPeanutAllergy} onClickCallback={(isTracking) => updatePreference("PeanutAllergy", isTracking)}
      />
      */}

      <View style={{ flexDirection: 'row', margin: 10, }}>
      <TouchableOpacity style={{backgroundColor: "white", margin: 10, width: '50%',height: windowHeight / 7,padding: 10,alignItems: 'center',justifyContent: 'center',
    borderRadius: 10,} } onPress={() => navigation.navigate('BlackListScreen')}>
      <Image
        source= {require('../../../assets/blacklist.png')}
        style={styles.logo}
      />
      <Text style={styles.buttonText}>Blacklist</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor: "white", margin: 10, width: '50%',height: windowHeight / 7,padding: 10,alignItems: 'center',justifyContent: 'center',
    borderRadius: 10,}} onPress={() => navigation.navigate('IngredientListScreen')}>
      <Image
        source= {require('../../../assets/avoid_food.png')}
        style={styles.logo}
      />
      <Text style={styles.buttonText}>Avoid an Ingredient</Text>
    </TouchableOpacity>
      </View>
      
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fab919',
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
  textSmall:{
    height: -10,
    margin:5,
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
  modalDisplay: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    height: 150,
    width: 150,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 0,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  infoIcon:{
    color: 'black',
    fontSize: 20, 
    textAlign: 'center',
  },
  removeIcon:{
    color: 'black',
    fontSize: 20, 
    marginBottom: 20
  }, 
  susIcon: {
    height: 60,
    width: 60,
    marginTop: 10,
    marginLeft: -10,
    
  },
  modalTextTitle: {
    fontSize: 25,
   
    color: 'black',
    fontFamily: 'Nunito_400Regular'
  },
  modalText: {
    fontSize: 14,
    marginBottom: 10,
    color: 'black',
    fontFamily: 'Nunito_400Regular'
  },
  greenEmission: {
    height: 50,
    width: 50,
    color: '#2e64e5',
    borderWidth:5,
    borderColor  : "#f19820",
    borderRadius: 50,
    alignItems : "center" ,
    
  },
  textEmission: {
    fontSize: 17,
    color: "black",
    
    textAlign: 'left',
    paddingTop:10,
  },
  logo: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
  },
});

export default PreferencesScreen;