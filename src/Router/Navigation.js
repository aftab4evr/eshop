import {
  Modal,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Image,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import React, {Component, useState} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import {CustomHeader} from '../component/Header';

import Login from '../screens/Login/index';
import Otp from '../screens/Otp/index';
import Home from '../screens/Home/index';
import Share from '../screens/Share/index';
import AboutUs from '../screens/AboutUs/index';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import NavIcons, {IconComponent} from './NavigationIcons';

const {width, height} = Dimensions.get('window');

const Authstack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },

  Otp: {
    screen: Otp,
    navigationOptions: ({navigation}, props) => ({
      title: '',
    }),
  },

  // {
  //   defaultNavigationOptions: ({ navigation }) => ({
  //     headerStyle: {},
  //   }),
  // },
});

const Homestack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}, props) => ({
      header: null,
    }),
  },
});

const ShareStack = createStackNavigator({
  Share: {
    screen: Share,
    navigationOptions: ({navigation}, props) => ({
      header: null,
    }),
  },
});

const AboutStack = createStackNavigator({
  AboutScreen: {
    screen: AboutUs,
    navigationOptions: ({navigation}, props) => ({
      header: null,
    }),
  },
});

const bottomTabNavigator = createBottomTabNavigator(
  {
    HomeStack: {
      screen: Homestack,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Home',
        header: null,
        gesturesEnabled: false,
        tabBarIcon: ({focused, tintColor}) => (
          <IconComponent
            source={focused ? NavIcons.homeSelect : NavIcons.home}
          />
        ),
      }),
    },
    ShareScreen: {
      screen: ShareStack,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Share',
        header: null,
        gesturesEnabled: false,
        tabBarIcon: ({focused, tintColor}) => (
          <IconComponent
            source={focused ? NavIcons.ShareSelect : NavIcons.share}
          />
        ),
      }),
    },
    AboutScreen: {
      screen: AboutStack,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'About Us',
        header: null,
        gesturesEnabled: false,

        tabBarIcon: ({focused, tintColor}) => (
          <IconComponent
            source={focused ? NavIcons.contactusSelect : NavIcons.contactus}
          />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'rgb(18, 18, 18)',
      inactiveTintColor: 'rgb(140,140,140)',
      fontWeight: '700',
      showIcon: true,
      showLabel: true,
      style: {
        // backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      },
    },
  },
);

const NewStack = createStackNavigator({
  HomeStack: {
    screen: bottomTabNavigator,
    navigationOptions: {
      header: null,
    },
  },
});

const Switchnavigator = createSwitchNavigator(
  {
    Auth: {
      screen: Authstack,
    },
    HomeScreen: {
      screen: NewStack,
    },
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const CommonNavigator = createAppContainer(Switchnavigator);

export default createAppContainer(CommonNavigator);
