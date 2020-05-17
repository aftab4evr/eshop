import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
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
      <View style={{height: hp('100%'), width: wp('100%')}}>
        <SafeAreaView>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          <View
            style={{
              height: hp('15%'),
              width: wp('100%'),
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: hp('10%'),
            }}>
            <View
              style={{
                justifyContent: 'space-evenly',
                alignItems: 'center',
                // backgroundColor: 'red',
              }}>
              <View
                style={{
                  marginTop: hp('12%'),
                  height: 100,
                  width: 100,
                  backgroundColor: '#59b199',
                  borderRadius: 100 / 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: hp('6%'),
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
              <View>
                <View style={style.cardView}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: '700',
                      paddingTop: hp('2%'),
                      marginTop: hp('5%'),
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
          </View>

          {/* <View style={style.cardViewtwo} />
            <View style={style.cardViewthree} />
            <View style={style.cardViewfour} /> */}
          {/* </ScrollView> */}
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
    height: hp('20%'),
    borderRadius: 15,
    // backgroundColor: '#ffffff',
  },
  cardViewtwo: {
    // marginTop: hp('2%'),
    shadowOffset: {height: 7},
    shadowRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 0.5,
    borderColor: 'gray',
    width: wp('100%'),
    height: hp('25%'),
    paddingBottom: hp('9%'),
    marginTop: wp('9%'),
    borderRadius: 15,
  },
  cardViewfour: {
    // marginTop: hp('2%'),
    shadowOffset: {height: 7},
    shadowRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 0.5,
    borderColor: 'gray',
    width: wp('100%'),
    height: hp('5%'),
    paddingBottom: hp('9%'),
    marginTop: wp('12%'),
    borderRadius: 5,
  },
  cardViewthree: {
    // marginTop: hp('2%'),
    shadowOffset: {height: 7},
    shadowRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#DCDCDC',
    borderWidth: 0.5,
    borderColor: 'gray',
    width: wp('70%'),
    height: hp('2%'),
    paddingBottom: hp('5%'),
    marginTop: wp('12%'),
    borderRadius: 25,
  },
});
export default AboutUS;
