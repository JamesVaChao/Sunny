import React, {useState} from 'react';
import { StyleSheet, Text,  View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({title, addItem}) => {
  
  const [text,setText] = useState('');  
  const onChange = (textValue) => setText(textValue);
  return (
      <View>
          <TextInput placeholder = "Add Item..." style = {styles.input} onChangeText={onChange}/>
          <TouchableOpacity styles={styles.btn} onPress={() => 
          addItem(text)}>
            <Text style = {styles.btnText}> <Icon name = "plus-circle" size = {20}/> Add Item</Text>
          </TouchableOpacity>
      </View>
  );
};


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8, 
        fontSize: 16,
        borderWidth:5,
        borderColor  : "#f19820",
        borderRadius: 10,
        margin: 7
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