import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import icon from '../Login/icons';
import AsyncStorage from '@react-native-community/async-storage';
const {width, height} = Dimensions.get('window');

import {all, healtcare, grocery} from './Constant';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [
        {title: "We're here for you", image: icon.amour},
        {title: 'Pay once. Stay Twice', image: icon.item},
        {title: "We're here for you", image: icon.amour},
      ],
    };
  }
  async componentDidMount() {}

  renderList(item, index) {
    return (
      <View
        style={{
          height: hp('24%'),
          flexDirection: 'column',
          marginBottom: hp('3%'),
        }}>
        <Text style={style.TextStyle}>{item.title}</Text>
        <View style={style.cardView}>
          <Image
            resizeMode="contain"
            source={item.image}
            style={{
              width: wp('85%'),
              height: hp('20%'),
              borderRadius: 50 / 2,
            }}
          />
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={{backgroundColor: '#f8f9fe', height: hp('100%')}}>
        <SafeAreaView>
          <View style={{height: hp('100%')}}>
            <View
              style={{
                height: hp('22%'),
                width: wp('100%'),
                paddingVertical: wp('2%'),
              }}>
              <Image
                resizeMode="contain"
                source={icon.amour}
                style={{width: wp('100%'), height: hp('24%')}}
              />
            </View>
            <View style={{height: hp('55%'), marginTop: hp('2%')}}>
              <FlatList
                showsHorizontalScrollIndicator={true}
                data={this.state.itemList}
                renderItem={({item, index}) => this.renderList(item, index)}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  cardView: {
    // marginTop: hp('2%'),
    shadowOpacity: 2,
    shadowOffset: {width: 0.2, height: 0.1},
    shadowRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 0.3,
    borderColor: 'gray',
    width: wp('90%'),
    paddingTop: hp('1%'),
  },
  TextStyle: {
    // marginTop: hp('2%'),
    marginVertical: hp('2%'),
    fontSize: 15,
    fontWeight: '700',
    marginLeft: wp('5%'),
  },
});
export default Home;
