import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  FlatList, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  TextInput,
  KeyboardAvoidingView,
  TabBarIOS
} from 'react-native';

class History extends Component {


  static navigationOptions = {
    tabBarLabel: 'History'
  }

  render() {
    let data = [
    {
      value: 'Entree',
    }, 
    {
      value: 'Pizza',
    }, 
    {
      value: 'Soup',
    },
    {
      value: 'Sandwich',
    },
    {
      value: 'Special',
    }
    ];
    return (
    <ScrollView style={styles.container}>
        <View style={styles.menu}>
          <View style={styles.foodTypeContainer}>
            <Text style={styles.foodTypeText}>Entree: </Text>
            <Text style={styles.foodTypeText}>Pizza: </Text>
            <Text style={styles.foodTypeText}>Soup: </Text>
            <Text style={styles.foodTypeText}>Sandwich: </Text>
            <Text style={styles.foodTypeText}>Special: </Text>
          </View>
          <View style={styles.foodContainer}>
            <Text style={styles.foodText}>Orange Sesame Chicken</Text>
            <Text style={styles.foodText}>Four Cheese</Text>
            <Text style={styles.foodText}>Creamy Tomato & Rice</Text>
            <Text style={styles.foodText}>Pancakes w/ Bacon</Text>
            <Text style={styles.foodText}>Chefs Choice</Text>
          </View> 
        </View>
    </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor:'whitesmoke',
  },
  
  menu:{
    
    height: 200,
    flexDirection: 'row',
    backgroundColor:'white',
    margin: 5,
    borderWidth: 2

    
  },
  menuContainer:{
    height: 300,
    top: 10,
    justifyContent:'center'
    
  },
  foodTypeContainer:{
    justifyContent:'space-between',
    left: 25,

  },

  foodContainer:{
    justifyContent:'space-between',
    left:35,
    
    
  },

  foodTypeText:{
    fontSize: 17,
    textAlign: 'left',
    fontWeight: 'bold',
    fontFamily: 'Chalkboard SE',
    color: 'black',
    backgroundColor:'transparent'
  },
  foodText:{
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'Chalkboard SE',
    color: 'black',
    backgroundColor:'transparent'

  },
  
  


});




module.exports = History;