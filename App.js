import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import Entry from './src/components/Entry'
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
//import { Ionicons } from '@expo/vector-icons';
import styles from './src/styles/style'
class App extends Component{
render(){
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Entry />
      <StatusBar style="auto" />

    </View>
  );
}
}


const MainScreenNavigator = createAppContainer(createBottomTabNavigator ({
Post: {
screen: App,
navigationOptions: {
tabBarIcon: ( { foucesd, tintColor} ) => (
    <FontAwesome name = 'apple' color = {tintColor} size = {25}  />
),

}
}
}));

export default MainScreenNavigator;