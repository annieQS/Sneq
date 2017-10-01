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
import { Dropdown } from 'react-native-material-dropdown';


 
class Home extends Component {


  static navigationOptions = {
    tabBarLabel: 'Home'
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
    <View style={styles.part1}>
      <Text style={styles.subHeader}>---Check out Tomorrows Menu---</Text>
      <Image
        source={require('../../images/chalkBoard.jpg')}
        style={styles.chalkBoard}>
        
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
      </Image>
    </View>

    <View style={styles.part2}>
      <Text style={styles.subHeader}>---Any Goodies in Your Mind?---</Text>
      

      <KeyboardAvoidingView behavior="padding" style={{height:200}}>
      <TextInput
        style={styles.textInput}
        placeholder='  Type in what you want'/>
      
      <Dropdown
        label='Choose the category'
        containerStyle={styles.dropdown}
        data={data}/>
      
      </KeyboardAvoidingView>
            

       <TouchableOpacity style={styles.submitButtonContainer}>
          <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>

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
  part1: {
    height: 300,
    backgroundColor:'white'
  },
  
  
  menuContainer:{
    height: 300,
    top: 10,
    justifyContent:'center'
    
  },

  subHeader:{
    top: 20,
    fontSize: 20,
    height: 45,
    textAlign: 'center',
    
    
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
    color: 'white',
    backgroundColor:'transparent'
  },
  foodText:{
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'Chalkboard SE',
    color: 'white',
    backgroundColor:'transparent'

  },
  menu:{
    marginTop: 20,
    marginBottom: 30,
    height: 150,
    flexDirection: 'row',

    
  },
  chalkBoard:{
    
    width:350, 
    height: 200, 
    margin: 10,
    alignSelf:'center'
    
  },

part2:{
  top: 10,
  backgroundColor:'white',
  height: undefined 
},
textInput:{
  margin: 20,
  height: 40, 
  borderColor: '#808080', 
  borderWidth: 1
},
dropdown:{
  margin: 20,
  bottom: 40

  
},
submitButtonContainer:{
    backgroundColor: '#2980B9',
    paddingVertical: 15,
    bottom: 30,
    marginLeft: 100,
    marginRight: 100,
  },

submitText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color:'#E4F1FE'
  },


});




module.exports = Home;