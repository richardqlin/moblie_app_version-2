import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
//import Entry from './src/components/Entry'
import HomeScreen from './src/screens/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import FontAwesome from "react-native-vector-icons/FontAwesome";


import styles from './src/styles/style'
class App extends Component{
render(){
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    <Text> Hello World! </Text>
      <StatusBar style="auto" />

    </View>
  );
}
}


const MainScreenNavigator = createAppContainer(createBottomTabNavigator ({

Home: {
screen: App,

navigationOptions: {

tabBarIcon: ( {focused, tintColor} ) => (
    <FontAwesome name= 'windows' color = {tintColor} size = {25} />
),
},
},


Post: {
screen: HomeScreen,
navigationOptions: {

tabBarIcon: ( { focused , tintColor} ) => (
    <FontAwesome name = 'apple' color = {tintColor} size = {25}  />
),

},
},

}));

export default MainScreenNavigator;