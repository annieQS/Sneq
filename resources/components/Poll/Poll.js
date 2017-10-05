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
import AnimatedBar from "react-native-animated-bar";
 

class Poll extends Component {


  state = {
    progress: 0,
  };
 
  componentDidMount() {
    const interval = setInterval(() => {
      
      this.setState(state => {
        return {
          progress: state.progress + 0.01,
        };
      });
    }, 1000);
  }


  static navigationOptions = {
    tabBarLabel: 'Poll'
  }

  render() {
    
    return (
    <ScrollView style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.type}>Entree</Text>
        
          <View style={styles.foodContainer}>
            <View style={styles.bar}>
              <TouchableOpacity>
              <AnimatedBar
                progress={this.state.progress+0.01}
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Orange Sesame Chicken
                  </Text>
                </View>
              </AnimatedBar>
              </TouchableOpacity>
            </View>


            <View style={styles.bar}>
              <TouchableOpacity>
              <AnimatedBar
                progress={this.state.progress+0.03} // make up data
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Four Cheesse
                  </Text>
                </View>
              </AnimatedBar>
              </TouchableOpacity>
            </View>

            <View style={styles.bar}>
            <TouchableOpacity>
              <AnimatedBar
                progress={this.state.progress+0.09} // make up data
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Creamy Tomato & Rice
                  </Text>
                </View>
              </AnimatedBar>
              </TouchableOpacity>
            </View>

            <View style={styles.bar}>
              <TouchableOpacity>
              <AnimatedBar
                progress={this.state.progress+0.05} // make up data
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Pancakes w/ Bacon
                  </Text>
                </View>
              </AnimatedBar>
              </TouchableOpacity>
            </View>

            <View style={styles.bar}>
              <TouchableOpacity>
              <AnimatedBar
                progress={this.state.progress+0.03} // make up data
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Chefs Choice
                  </Text>
                </View>
              </AnimatedBar>
              </TouchableOpacity>
            </View>


       

      </View>
      </View>

      <View style={styles.menu}>
        <Text style={styles.type}>Pizza</Text>
        
          <View style={styles.foodContainer}>
            <View style={styles.bar}>
              <TouchableOpacity>
              <AnimatedBar
                progress={this.state.progress+0.01}
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Orange Sesame Chicken
                  </Text>
                </View>
              </AnimatedBar>
              </TouchableOpacity>
            </View>


            <View style={styles.bar}>
              <TouchableOpacity>
              <AnimatedBar
                progress={this.state.progress+0.03} // make up data
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Four Cheesse
                  </Text>
                </View>
              </AnimatedBar>
              </TouchableOpacity>
            </View>

            <View style={styles.bar}>
            <TouchableOpacity>
              <AnimatedBar
                progress={this.state.progress+0.09} // make up data
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Creamy Tomato & Rice
                  </Text>
                </View>
              </AnimatedBar>
              </TouchableOpacity>
            </View>

            <View style={styles.bar}>
              <TouchableOpacity>
              <AnimatedBar
                progress={this.state.progress+0.05} // make up data
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Pancakes w/ Bacon
                  </Text>
                </View>
              </AnimatedBar>
              </TouchableOpacity>
            </View>

            <View style={styles.bar}>
              <TouchableOpacity>
              <AnimatedBar
                progress={this.state.progress+0.03} // make up data
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Chefs Choice
                  </Text>
                </View>
              </AnimatedBar>
              </TouchableOpacity>
            </View>


       

      </View>
      </View>

      <View style={styles.menu}>
        <Text style={styles.type}>Soup</Text>
        
          <View style={styles.foodContainer}>
            <View style={styles.bar}>
              <TouchableOpacity>
              <AnimatedBar
                progress={this.state.progress+0.01}
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Orange Sesame Chicken
                  </Text>
                </View>
              </AnimatedBar>
              </TouchableOpacity>
            </View>


            <View style={styles.bar}>
              <TouchableOpacity>
              <AnimatedBar
                progress={this.state.progress+0.03} // make up data
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Four Cheesse
                  </Text>
                </View>
              </AnimatedBar>
              </TouchableOpacity>
            </View>

            <View style={styles.bar}>
            <TouchableOpacity>
              <AnimatedBar
                progress={this.state.progress+0.09} // make up data
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Creamy Tomato & Rice
                  </Text>
                </View>
              </AnimatedBar>
              </TouchableOpacity>
            </View>

            <View style={styles.bar}>
              <TouchableOpacity>
              <AnimatedBar
                progress={this.state.progress+0.05} // make up data
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Pancakes w/ Bacon
                  </Text>
                </View>
              </AnimatedBar>
              </TouchableOpacity>
            </View>

            <View style={styles.bar}>
              <TouchableOpacity>
              <AnimatedBar
                progress={this.state.progress+0.03} // make up data
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Chefs Choice
                  </Text>
                </View>
              </AnimatedBar>
              </TouchableOpacity>
            </View>


       

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
    

    backgroundColor:'white',
    margin: 10,
  
    

    
  },

type:{
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
    height: 35,
    textAlign: 'left',

    
},

 

  foodContainer:{
    justifyContent:'space-between',
    marginLeft:10,
    marginRight:10,
    marginBottom:10
    
  },

  row: {
    flexDirection: "row",

  },
  center: {
    justifyContent: "center",
    alignItems: "center",

  },
  barText: {
    backgroundColor: "transparent",
    color: "#FFF",
  },
  bar:{
    width: 250,
    alignSelf: 'center',
    marginTop: 8

  },

});




module.exports = Poll;