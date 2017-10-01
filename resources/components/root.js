import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import {Icon} from 'react-native-elements';


import Home from './Home/Home';
import More from './More/More';
import History from './History/History';


export const HomeStack = StackNavigator({
	Home:{
		screen: Home,
		navigationOptions: {
			title: 'Sneq',
		},
	},

});



export const HistoryStack = StackNavigator({
	History:{
		screen: History,
		navigationOptions: {
			title: 'Menu History',
		},
	},

	});

export const MoreStack = StackNavigator({
	More:{
		screen: More,
		navigationOptions: {
			title: 'More',
		},
	},
	});


export const Tabs = TabNavigator({
  

	History: {
	    screen: HistoryStack,
	    navigationOptions: {
	    	tabBarLabel: 'History',
	    	tabBarIcon:({tintColor }) => <Icon name="history" size = {35} color={tintColor}/> 
	    }
	    
	  },
	Home: {
	    screen: HomeStack,
	    navigationOptions: {
	    	tabBarLabel: 'Home',
	    	tabBarIcon:({tintColor }) => <Icon name="home" size = {35} color={tintColor}/>
	    	}
	      
	    },
	  
	  More: {
	    screen: MoreStack,
	    navigationOptions: {
	    	tabBarLabel: 'More',
	    	tabBarIcon:({tintColor }) => <Icon name="list" size = {35} color={tintColor}/> 
	    }
	    
	  },

});