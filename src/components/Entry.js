import React,{Component} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles/style'
class Entry extends Component {
render() {
return (
    <View  style={styles.border}>
    <Text> {this.props.item.title }</Text>

    </View>
);
}
}


export default Entry;