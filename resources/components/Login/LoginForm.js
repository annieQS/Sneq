import React, { Component } from 'react';
import {
 
  StyleSheet,
  View,
  TextInput, 
  Text
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
       <TextInput 
       placeholder="Email"
       placeholderTextColor="#E4F1FE"
       returnKeyType="next"
       onSubmitEditing={() => this.passwordInput.focus()}
       keyboardType="email-address"
       style={styles.input}/>

       <TextInput 
       placeholder="Password"
       returnKeyType="go"
       placeholderTextColor="#E4F1FE"
       secureTextEntry
       style={styles.input}
       ref={(input)=>this.passwordInput= input}/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 40
  },

  input: {
    height: 40,
    backgroundColor: '#89C4F4',
    marginBottom: 15,
    color: '#FFF',
    paddingHorizontal: 10
  }


});
  