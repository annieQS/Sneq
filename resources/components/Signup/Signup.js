import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import LoginForm from '../Login/LoginForm';

class Signup extends Component {
	render(){
		return(
	<KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
           style={styles.logo}
           source={require('../../images/appIcon.png')} />
           <Text style={styles.subtitle}>NDA x NexDine</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm/ >
        
        <TouchableOpacity style={styles.startButtonContainer}>
          <Text style={styles.startButtonText}>Start Now!</Text>
        </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
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

  startButtonContainer: {
    backgroundColor: '#2980B9',
    paddingVertical: 15,
    bottom: 20,
    marginLeft: 100,
    marginRight: 100,
 
  },

  startButtonText: { 
    textAlign: 'center',
    color: '#E4F1FE',
    fontWeight: 'bold',
    fontSize: 20

  }


  });


module.exports = Signup;