import React , {Component} from 'react';

import styles from '../styles/style';
import Entry from '../components/Entry';
import { View, FlatList,StyleSheet,Button } from 'react-native';

class HomeScreen extends Component {
constructor () {
super();
this.state = {
entries: [],
};
}
componentDidMount(){
fetch ('https://murmuring-bastion-31969.herokuapp.com/entries').then(response => response.json()).then(jsonResponse => this.setState( { entries: jsonResponse}));
}


render(){
return (
<View style ={styles.container} >

<FlatList
data = {this.state.entries}
renderItem = { ({item}) => <Entry item = {item} />}
keyExtractor = {item => item['_id']}
/>


</View>

);

}
}

export default HomeScreen