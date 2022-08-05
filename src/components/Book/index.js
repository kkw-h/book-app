import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

export default class Book extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  static propTypes = {};

  componentDidMount() {}

  render() {
    const {bookInfo, navigation} = this.props;
    const onPress = () => navigation.navigate('Detail');
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={onPress}>
          <View style={styles.cover}>
            <Text
              style={styles.coverText}
              numberOfLines={5}
              ellipsizeMode={'tail'}>
              {bookInfo.title}
            </Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.BookTitle} numberOfLines={2} ellipsizeMode={'tail'}>
          {bookInfo.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    alignItems: 'center',
  },
  cover: {
    backgroundColor: '#c6d8ef',
    marginVertical: 8,
    marginHorizontal: 16,
    width: 90,
    height: 130,
    borderRadius: 2,
  },
  coverText: {
    color: '#f0f0fe',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
  },
  BookTitle: {
    width: 90,
  },
});
