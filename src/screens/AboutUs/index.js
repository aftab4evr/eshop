import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import icon from '../Login/icons';

const {width, height} = Dimensions.get('window');

class AboutUS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <SafeAreaView>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          <View style={{height: hp('100%'), width: wp('100%')}}>
            <View
              style={{
                height: hp('15%'),
                width: wp('100%'),
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: hp('10%'),
              }}>
              <View>
                <View style={style.cardView}>
                  <View
                    style={{
                      marginTop: hp('-5%'),
                      height: 100,
                      width: 100,
                      backgroundColor: '#59b199',
                      borderRadius: 100 / 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      resizeMode="contain"
                      source={icon.camera}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50 / 2,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: '700',
                      // paddingTop: hp('2%'),
                      // marginTop: hp('5%'),
                    }}>
                    Prakrika Technology(P)Ltd
                  </Text>
                  <Text
                    style={{fontSize: 25, color: 'gray', fontWeight: '700'}}>
                    Bhubaneswar
                  </Text>
                </View>
              </View>
            </View>
            <View style={style.ShareCardView}>
              <View style={style.cardViewtwo}>
                <Image
                  style={{
                    height: hp('7%'),
                    width: wp('14%'),
                    marginTop: hp('1.5%'),
                  }}
                  source={icon.facebook}
                />
              </View>
              <View style={style.cardViewtwo}>
                <Image
                  style={{
                    height: hp('7%'),
                    width: wp('14%'),
                    marginTop: hp('1.5%'),
                  }}
                  source={icon.whatsapp}
                />
              </View>
              <View style={style.cardViewtwo}>
                <Image
                  style={{
                    height: hp('7%'),
                    width: wp('14%'),
                    marginTop: hp('1.5%'),
                  }}
                  source={icon.email}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
const style = StyleSheet.create({
  cardView: {
    shadowOffset: {height: 7},
    shadowRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
    width: wp('100%'),
    height: hp('15%'),
    borderRadius: 15,
    backgroundColor: '#ffffff',
  },
  cardViewtwo: {
    flexDirection: 'column',
    shadowOffset: {height: 7},
    shadowRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 0.5,
    borderColor: 'gray',
    width: wp('28%'),
    height: hp('12%'),
    borderRadius: 15,
    marginLeft: wp('2%'),
  },
  ShareCardView: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    height: hp('20%'),
    width: wp('100%'),
    alignItems: 'center',
    alignContent: 'space-between',
    alignSelf: 'center',
    justifyContent: 'center',
    shadowOffset: {height: 7},
    shadowRadius: 5,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 15,
  },
});
export default AboutUS;
