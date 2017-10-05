import React from 'react';
import { TabNavigator, StackNavigator, StyleSheet} from 'react-navigation';
import {Icon} from 'react-native-elements';


import Home from './Home/Home';
import More from './More/More';
import History from './History/History';
import Notifications from './Notifications/Notifications';
import Poll from './Poll/Poll';



export const HomeStack = StackNavigator({
	Home:{
		screen: Home,
		navigationOptions: {
			title: 'Sneq',
			headerTitleStyle: {fontWeight: 'bold',fontSize: 20,color:'#E4F1FE'},
			headerStyle: {backgroundColor: "#4169E1"},
			headerTintColor: "white"
		},
	},

});

export const NotificationsStack = StackNavigator({
	Notifications:{
		screen: Notifications,
		navigationOptions: {
			title: 'Notifications',
			headerTitleStyle: {fontWeight: 'bold',fontSize: 20,color:'#E4F1FE'},
			headerStyle: {backgroundColor: "#4169E1"},
			headerTintColor: "white"
		},
	},

	});

export const HistoryStack = StackNavigator({
	History:{
		screen: History,
		navigationOptions: {
			title: 'History',
			headerTitleStyle: {fontWeight: 'bold',fontSize: 20,color:'#E4F1FE'},
			headerStyle: {backgroundColor: "#4169E1"},
			headerTintColor: "white"

		},
	},

	});

export const MoreStack = StackNavigator({
	More:{
		screen: More,
		navigationOptions: {
			title: 'More',
			headerTitleStyle: {fontWeight: 'bold',fontSize: 20,color:'#E4F1FE'},
			headerStyle: {backgroundColor: "#4169E1"},
			headerTintColor: "white"
		},
	},
	});

export const PollStack = StackNavigator({
	More:{
		screen: Poll,
		navigationOptions: {
			title: 'Poll',
			headerTitleStyle: {fontWeight: 'bold',fontSize: 20,color:'#E4F1FE'},
			headerStyle: {backgroundColor: "#4169E1"},
			headerTintColor: "white"
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
	

	Poll: {
	    screen: PollStack,
	    navigationOptions: {
	    	tabBarLabel: 'Poll',
	    	tabBarIcon:({tintColor }) => <Icon name="poll" size = {35} color={tintColor}/>
	    	
	      
	    },
    
	  },
	Home: {
	    screen: HomeStack,
	    navigationOptions: {
	    	tabBarLabel: 'Home',
	    	tabBarIcon:({tintColor }) => <Icon name="home" size = {35} color={tintColor}/>
	    	}
	      
	    },

	
	Notifications: {
	    screen: NotificationsStack,
	    navigationOptions: {
	    	tabBarLabel: 'Notifications',
	    	tabBarIcon:({tintColor }) => <Icon name="notifications" size = {35} color={tintColor}/>
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


