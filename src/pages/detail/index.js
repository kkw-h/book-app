import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default class Detail extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  static propTypes = {};

  componentDidMount() {}

  render() {
    return (
      <View style={styles.style}>
        <Text>阅读页面</Text>
        <Button title="点击" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C7EDCC',
  },
});
