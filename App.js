import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  };

  plus = () => {
    this.setState({
      count: this.state.count + 1
    })
  };

  minus = () => {
    this.setState({
      count: this.state.count - 1
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text style={styles.text}>
            {this.state.count !== 0 ? this.state.count : null}
          </Text>
        </View>
        < View style={styles.containerBut}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.minus}
            underlayColor='#b7c879'
          >
            <Text style={styles.text}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this.plus}
            underlayColor='#b7c879'
          >
            <Text style={[styles.text]}>+</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerBut: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '70%'
  },
  button: {
    justifyContent: 'space-around',
    backgroundColor: '#92B558',
    alignItems: 'center',
    padding: 10,
    width: '50%',
    height: '100%'
  },
  countContainer: {
    height: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F6D155',
    paddingTop: '35%'
  },
  text: {
    color: 'black',
    fontSize: 45
  }
})
