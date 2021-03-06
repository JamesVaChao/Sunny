import React, {useState} from 'react';
import { StyleSheet, Text,  View, TextInput, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({title, addItem}) => {
  //const [text,setText] = useState('');  

  //const onChange = (textValue) => setText(textValue);
  return (
      <View>
          <TouchableOpacity styles={styles.btn} onPress={() => 
          addItem("temp")}>
            <Text style = {styles.btnText}> <Icon name = "plus" size = {20}/> Add Item</Text>
          </TouchableOpacity>
      </View>
  );
};


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8, 
        fontSize: 16,
      },
      btn: {
        color: '#c2bad8',
        padding: 9, 
        margin: 5,
      },
      btnText: {
        color: 'black',
        fontSize: 20, 
        textAlign: 'center',
      },
});

export default AddItem;