import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Settings extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  static propTypes = {};

  componentDidMount() {}

  render() {
    return (
      <View style={styles.style}>
        <Text>设置</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style: {},
});
