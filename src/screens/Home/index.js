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
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import icon from '../Login/icons';

import {all, healtcare, grocery} from './Constant';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
    };
  }
  componentDidMount() {
    this.setState({
      itemList: all,
      isAll: true,
      isGrocry: false,
      isHealtCare: false,
    });
  }
  groceydetails(item, index) {
    return (
      <View
        style={{
          width: wp('85%'),
          alignSelf: 'center',
          height: hp('13%'),
          backgroundColor: 'white',
          marginVertical: hp('1%'),
          flexDirection: 'row',
        }}>
        <Image
          resizeMode="contain"
          source={{uri: item.image}}
          style={{width: wp('25%'), height: hp('8%'), marginLeft: wp('3%')}}
        />
        <View
          style={{
            marginLeft: wp('2%'),
            width: wp('55%'),
            height: hp('12%'),
            justifyContent: 'flex-end',
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              marginTop: hp('2%'),
              marginLeft: wp('2%'),
              fontWeight: '700',
              fontSize: 16,
            }}>
            {item.name}
          </Text>
          <View
            style={{
              justifyContent: 'flex-end',
              marginTop: hp('2%'),
              flexDirection: 'row',
              borderBottomWidth: 0.5,
            }}>
            <TouchableOpacity>
              <Image
                style={{height: hp('4%'), width: wp('8%')}}
                source={icon.whatsapp}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{
                  height: hp('4%'),
                  width: wp('8%'),
                  marginLeft: wp('3%'),
                }}
                source={icon.call}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                marginBottom: hp('1.5%'),
                marginLeft: wp('35%'),
                fontSize: 16,
                fontWeight: '700',
              }}>
              {item.area}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <SafeAreaView>
          <View
            style={{
              flexDirection: 'row',
              height: hp('5%'),
              width: wp('100%'),
              alignItems: 'flex-end',
              marginTop: hp('1%'),
            }}>
            <TouchableOpacity
              style={{
                width: wp('85%'),
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image style={style.StoreStyle} source={icon.downarrow} />
                <Text
                  style={{
                    marginTop: hp('1%'),
                    fontSize: 16,
                    fontWeight: '600',
                  }}>
                  Salt Lake
                </Text>
              </View>
            </TouchableOpacity>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 50 / 2,
                overflow: 'hidden',
                borderWidth: 3,
                marginRight: wp('3px'),
                marginTop: hp('3%'),
              }}
              resizeMode="contain"
              source={{
                uri: 'https://img.icons8.com/plasticine/2x/user.png',
              }}
            />
          </View>
          <ScrollView>
            <View
              style={{
                height: hp('25%'),
                width: wp('100%'),
                backgroundColor: 'white',
              }}>
              <Image
                resizeMode="contain"
                source={icon.amour}
                style={{width: wp('100%'), height: hp('25%')}}
              />
            </View>
            <View
              style={{
                height: hp('6%'),
                width: wp('100%'),
                backgroundColor: 'white',
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    itemList: all,
                    isAll: true,
                    isGrocry: false,
                    isHealtCare: false,
                  });
                }}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderRadius: 79,
                  marginLeft: wp('2%'),
                  backgroundColor: this.state.isAll ? '#e5eeff' : 'white',
                  height: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: wp('30%'),
                  borderColor: 'black',
                }}>
                <Text style={{fontWeight: '500', fontSize: 20}}>All </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    itemList: grocery,
                    isAll: false,
                    isGrocry: true,
                    isHealtCare: false,
                  });
                }}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderRadius: 79,
                  marginLeft: wp('2%'),
                  backgroundColor: this.state.isGrocry ? '#e5eeff' : 'white',
                  height: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: wp('30%'),
                  borderColor: 'black',
                }}>
                <Text style={{fontWeight: '500', fontSize: 20}}>Grocery </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    itemList: healtcare,
                    isAll: false,
                    isGrocry: false,
                    isHealtCare: true,
                  });
                }}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderRadius: 79,
                  marginLeft: wp('2%'),
                  backgroundColor: this.state.isHealtCare ? '#e5eeff' : 'white',
                  height: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: wp('30%'),
                  borderColor: 'black',
                }}>
                <Text style={{fontWeight: '500', fontSize: 20}}>
                  Healthcare{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: hp('65%'),
                width: wp('100%'),
                backgroundColor: 'white',
                marginTop: hp('1%'),
              }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={this.state.itemList}
                renderItem={({item, index}) => this.groceydetails(item, index)}
                keyExtractor={(item) => item.id}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  cardView: {
    marginTop: hp('2%'),
    shadowOpacity: 0.4,
    shadowOffset: {width: 0.1, height: 0.1},
    shadowRadius: 0.9,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 0.3,
    borderColor: 'lightgray',
    width: wp('100%'),
  },
  WhatsapTextStyle: {
    color: 'green',
    marginBottom: 15,
    fontSize: 14,
    marginRight: 20,
    fontWeight: '500',
    marginTop: wp('2%'),
    marginLeft: wp('3%'),
    // marginRight: 20
  },
});
export default Home;
