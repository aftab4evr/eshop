import React, { Component } from 'react';
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

const { width, height } = Dimensions.get('window');

class AboutUS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image
              resizeMode="contain"
              source={icon.camera}
              style={{
                width: wp('55%'),
                height: hp('10%'),
                borderRadius: 50 / 2,
              }}
            />
            <View style={style.cardView}>
              <Text style={{ fontSize: 25, fontWeight: '700', paddingTop: hp('2%') }}>Prakrika Technology(P)Ltd</Text>
              <Text style={{ fontSize: 25, color: 'gray', fontWeight: '700' }}>Bhubaneswar</Text>
            </View>
            <View style={style.cardViewtwo}>
            </View>
            <View style={style.cardViewthree}>
            </View>
            <View style={style.cardViewfour}>

            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
const style = StyleSheet.create({
  cardView: {
    // marginTop: hp('2%'),
    shadowOffset: { height: 7 },
    shadowRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 0.5,
    borderColor: 'gray',
    width: wp('100%'),
    height: hp('20%'),
    paddingBottom: hp('9%'),
    marginTop: wp('35%'),
    borderRadius: 15,
  },
  cardViewtwo: {
    // marginTop: hp('2%'),
    shadowOffset: { height: 7 },
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
    shadowOffset: { height: 7 },
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
    shadowOffset: { height: 7 },
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
