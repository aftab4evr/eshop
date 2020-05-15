import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import Icons from '../Router/NavigationIcons';

export const CustomHeader = (props) => {
  return (
    <View style={[styles.MainContainer, {}]}>
      <LinearGradient
        colors={['white', 'white']}
        style={styles.HomeHeaderBackgroundStyle}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              width: wp('90%'),
              // marginTop: hp('5%'),
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={[
                styles.titleText,
                {fontSize: wp('7%'), fontWeight: '700', color: 'black'},
              ]}>
              {props.Title}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    height: hp('10%'),
  },
  titleText: {
    color: 'white',
    alignSelf: 'center',
    height: hp('5%'),
  },
  HeaderView: {
    marginVertical: hp('-3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HeaderBackgroundStyle: {
    width: wp('100%'),
    height: hp('18%'),
    flexDirection: 'column',
  },
  HomeHeaderBackgroundStyle: {
    width: wp('100%'),
    height: hp('8%'),
    flexDirection: 'column',
  },
});
