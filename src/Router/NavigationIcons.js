//Root Library
import React, {Component} from 'react';

//Root Components
import {
  Platform,
  AsyncStorage,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; //Responsive Screen
import TabbarImage from '../assets/images/tabbar_image.png';
var path = '../assets/';

export default {
  //tab Icons
  chat: require('../assets/chat/chat.png'),
  selectChat: require('../assets/selectChat/chat.png'),
  contactus: require('../assets/Contactus/contactus.png'),
  contactusSelect: require('../assets/Contactus/contactusSelect.png'),
  home: require(path + 'Home/home.png'),
  homeSelect: require(path + 'Home/home-select.png'),
  ShareIcon: require(path + 'Share/share.png'),
  ShareSelect: require(path + 'Share/share-select.png'),
};

//Icon Component
export const IconComponent = props => {
  let size = props.Size ? props.Size : wp('8%');
  return (
    <View style={[styles.ImageView, {}]}>
      <Image
        resizeMode="contain"
        source={props.source}
        style={{height: size, width: size}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ImageView: {
    marginTop: hp('1%'),
  },
  Tabbarstyle: {
    width: wp('50%'),
    height: hp('25%'),
  },
});
