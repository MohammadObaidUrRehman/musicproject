import React, {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default class App extends Component {
state = {
  pass: "",
  user:""
};

testfunc = val => {
  this.setState({pass: val})
}
testfunc = nval => {
  this.setState({user: nval})
}

// setInterval(() => (this.setState(previousState => ({ isShowingText: !previousState.isShowingText }))), 1000);


  render() {
    return (
      <View style={styles.container}>
      <Text>Enter Login!</Text>
      <TextInput
        style = {styles.textboxes}
        value = {this.state.pass}
        placeholder = "  password"
        onChangeText = {this.testfunc}
      />

      <View style = {styles.container2}>
      <TextInput
        style = {styles.textboxes}
        value = {this.state.user}
        placeholder = "  username"
        onChangeText = {this.testfunc2}
      />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    // flex: 1,
    padding: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textboxes: {
    width: 300,
    borderColor: "black",
    borderWidth: 2,
  },
});
