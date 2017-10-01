import React, { Component } from 'react';
import {
 
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm';

class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
           style={styles.logo}
           source={require('../../images/appIcon.png')} />
           <Text style={styles.subtitle}>NDA x NexDine</Text>
        </View>
        <KeyboardAvoidingView behavior="padding" style={{height:200}}>
        <View style={styles.formContainer}>
          <LoginForm/ >
        </View>
        </KeyboardAvoidingView>

        <TouchableOpacity style={styles.forgetPasswordContainer}>
          <Text style={styles.forgetPasswordText}>forget your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButtonContainer}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButtonContainer}>
          <Text 
           style={styles.signupButtonText}>Sign Up First</Text>
        </TouchableOpacity>

      </View>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4F1FE' 
 
  },

  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    bottom: 30
    
  },

  subtitle: {
    color: '#89C4F4',
    bottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',

  },

  logo: {
    width: 200,
    height: 200,
    
  },

  formContainer: {
    flex: 1,
    bottom:140
 
  },

  loginButtonContainer: {
    backgroundColor: '#2980B9',
    paddingVertical: 15,
    bottom: 120,
    marginLeft: 100,
    marginRight: 100,
 
  },

  loginButtonText: { 
    textAlign: 'center',
    color: '#E4F1FE',
    fontWeight: 'bold',
    fontSize: 20

  },

  forgetPasswordContainer: {
    bottom:160,
    right: 40
    },

  forgetPasswordText: {
    textAlign: 'right',
    color: '#2980B9',
    fontSize: 12,
    fontWeight: 'bold'
  },

  signupButtonContainer: {
    bottom:100
 
  },

  signupButtonText: {
    textAlign: 'center',
    color: '#2980B9',
    fontSize: 14,
    fontWeight: 'bold'

  }

});

module.exports = Login;

  