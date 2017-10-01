import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements';
class More extends Component {

static navigationOptions = {
    tabBarLabel: 'More'
  }

  render() {
    return (
    <View style={{height: 400}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.list}>
          <Icon name="account-circle" size = {35} color={'#1E90FF'} marginLeft={20}/>
          <Text style={styles.item}>Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.list}>
          <Icon name="help" size = {35} color={'#1E90FF'} marginLeft={20}/>
          <Text style={styles.item}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.list}>
          <Icon name="feedback" size = {35} color={'#1E90FF'} marginLeft={20}/>
          <Text style={styles.item}>Feedback</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.list}>
          <Icon name="info" size = {35} color={'#1E90FF'} marginLeft={20}/>
          <Text style={styles.item}>About</Text>
        </TouchableOpacity>

      </View>
      
      <TouchableOpacity style={styles.LogOutButtonContainer}>
          <Text style={styles.LogOutText}>Log out</Text>
      </TouchableOpacity>



    </View>

    
    


   
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  item: {
    padding: 15,
    left: 15,
    fontSize: 20,
    height: 50,
  },

  list:{
    flexDirection: 'row',
    marginBottom: 6,
    backgroundColor: 'white'
  },

  LogOutButtonContainer:{
    backgroundColor: '#2980B9',
    paddingVertical: 15,
    bottom: 20,
    marginLeft: 100,
    marginRight: 100,
  },

  LogOutText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color:'#E4F1FE'
  },
  
});

module.exports = More;