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
  Linking,
  Platform,
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
        {title: "We're here for you", image: icon.dynamic1},
        {title: 'Pay once. Safe Twice', image: icon.dynamic2},
      ],
    };
  }
  async componentDidMount() {}

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1234567890}';
    } else {
      phoneNumber = 'telprompt:${1234567890}';
    }

    Linking.openURL(phoneNumber);
  };
  sendMessageToWhatsApp = () => {
    Linking.openURL('whatsapp://send?text=hello');
  };

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
                // resizeMode="contain"
                source={icon.homestatic}
                style={{width: wp('100%'), height: hp('24%')}}
              />
            </View>
            <View style={{height: hp('56%'), marginTop: hp('2%')}}>
              <ScrollView>
                <View
                  style={{
                    height: hp('27%'),
                    flexDirection: 'column',
                  }}>
                  <Text style={style.TextStyle}>
                    {this.state.itemList[0].title}
                  </Text>
                  <View style={style.cardView}>
                    <View
                      style={{
                        width: wp('85%'),
                        height: hp('18%'),
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 30,
                      }}>
                      <Image
                        source={this.state.itemList[0].image}
                        style={{
                          width: wp('85%'),
                          height: hp('18%'),
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        marginLeft: wp('-46%'),
                        marginTop: hp('-1.7%'),
                      }}>
                      <TouchableOpacity
                        onPress={() => this.sendMessageToWhatsApp()}>
                        <Image
                          style={{
                            height: hp('3%'),
                            width: wp('6%'),
                            marginLeft: wp('7'),

                          }}
                          source={icon.homewhatsapp}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.dialCall()}>
                        <Image
                          style={{
                            height: hp('3%'),
                            width: wp('6%'),
                            marginLeft: wp('4%'),
                          }}
                          source={icon.homewhatsappcall}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    height: hp('27%'),
                    flexDirection: 'column',
                  }}>
                  <Text style={style.TextStyle}>
                    {this.state.itemList[1].title}
                  </Text>
                  <View style={style.cardView}>
                    <View
                      style={{
                        width: wp('85%'),
                        height: hp('18%'),
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 30,
                      }}>
                      <Image
                        source={this.state.itemList[1].image}
                        style={{
                          width: wp('85%'),
                          height: hp('18%'),
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        marginLeft: wp('65%'),
                        marginTop: hp('-17%'),
                      }}>
                      <TouchableOpacity
                        onPress={() => this.sendMessageToWhatsApp()}>
                        <Image
                          style={{
                            height: hp('3%'),
                            width: wp('6%'),
                            marginLeft: wp('-2%'),

                          }}
                          source={icon.homewhatsapp}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.dialCall()}>
                        <Image
                          style={{
                            height: hp('3%'),
                            width: wp('6%'),
                            marginLeft: wp('5%'),
                          }}
                          source={icon.homewhatsappcall}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  cardView: {
    shadowOpacity: 2,
    shadowOffset: {width: 0.2, height: 0.1},
    shadowRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 0.3,
    borderColor: 'gray',
    width: wp('90%'),
    height: hp('22%'),
    paddingTop: hp('1%'),
  },
  TextStyle: {
    marginVertical: hp('2%'),
    fontSize: 15,
    fontWeight: '700',
    marginLeft: wp('5%'),
  },
});
export default Home;
