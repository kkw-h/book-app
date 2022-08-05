import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  FlatList,
} from 'react-native';

import Book from '../../components/Book/index';

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '豆粕昌琼',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '凡人修仙传',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '黑岛是怎样炼成的黑岛是怎样炼成的黑岛是怎样炼成的黑岛是怎样炼成的',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab1b28ba',
    title: '遮天',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91a1a97f63',
    title: '无丧生',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455711e29d72',
    title: '阿塞造型',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad531ab1b28ba',
    title: '横卧赛',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91a11a97f63',
    title: '鞥搜',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455711e219d72',
    title: '僧婚外情',
  },
];
const Item = ({title}) => {
  return (
    <View style={styles.book}>
      <View style={styles.cover}>
        <Text style={styles.coverText}>{title}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
function BookShelfTitle() {
  return (
    <View style={styles.title}>
      <ImageBackground
        source={require('../../assets/image/title.jpg')}
        style={styles.titleImage}>
        <View style={styles.duration}>
          <Text style={styles.durationText}>100</Text>
          <Text style={styles.durationDesc}>本周阅读/分钟</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
export default class BookShelf extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  static propTypes = {};

  componentDidMount() {}

  render() {
    const {navigation} = this.props;
    const renderItem = ({item}) => (
      <Book bookInfo={item} navigation={navigation} />
    );
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          // keyExtractor={index => item.index}
          horizontal={false}
          numColumns={3}
          extraData={this.state}
          style={styles.bookList}
          ListHeaderComponent={BookShelfTitle}
          columnWrapperStyle={styles.bookListColumn}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    height: windowHeight * 0.25,
    marginBottom: 10,
  },
  titleImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  duration: {
    marginLeft: 10,
    alignItems: 'center',
  },
  durationText: {
    color: '#000',
    fontSize: 42,
    fontWeight: 'bold',
  },
  durationDesc: {
    color: '#eeeeee',
    fontSize: 13,
  },
  bookList: {
    backgroundColor: '#f7efe8',
  },

  bookListColumn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
