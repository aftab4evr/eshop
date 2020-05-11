
import { Modal, View, Text, StyleSheet, ScrollView, Platform, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Dimensions } from 'react-native'
import React, { Component, useState } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { CustomHeader } from '../component/Header'


import Login from "../screens/Login/index";
import Otp from '../screens/Otp/index';
import Home from '../screens/Home/index';
import Share from '../screens/Share/index';
import AboutUs from '../screens/AboutUs/index';


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import NavIcons, { IconComponent } from './NavigationIcons';


const { width, height } = Dimensions.get("window");


const Authstack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {

            header: null
        }
    },

    Otp: {
        screen: Otp,
        navigationOptions: ({ navigation }, props) => ({

            header: <CustomHeader
                Size={"medium"}
                navigation={navigation}
                {...props}
                backicon={NavIcons.backicon}
                Title="OTP"
                backicon={true}
                goback={() => navigation.goBack()}
            />

        })

    },

},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
            },
        }),
    },
)


const Homestack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }, props) => ({
            header: null
        })
    },

},
);


const ShareStack = createStackNavigator({
    Share: {
        screen: Share,
        navigationOptions: ({ navigation }, props) => ({
            header: null
        })
    },


});


const AboutStack = createStackNavigator({

    AboutScreen: {
        screen: AboutUs,
        navigationOptions: ({ navigation }, props) => ({

            header: null

        })
    },
},

);


const bottomTabNavigator = createBottomTabNavigator({

    HomeStack: {
        screen: Homestack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "Home",
            header: null,
            gesturesEnabled: false,
            tabBarIcon: ({ focused, tintColor }) => (
                <IconComponent source={focused ? NavIcons.tab1Icon : NavIcons.tab1iconSel} />
            )
        })
    },
    ShareScreen: {
        screen: ShareStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "Chat",
            header: null,
            gesturesEnabled: false,
            tabBarIcon: ({ focused, tintColor }) => (
                <IconComponent source={focused ? NavIcons.selectChat : NavIcons.chat} />

            )
        })
    },
    AboutScreen: {
        screen: AboutStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "Settings",
            header: null,
            gesturesEnabled: false,

            tabBarIcon: ({ focused, tintColor }) => (
                <IconComponent source={focused ? NavIcons.tab4Icon : NavIcons.tab4iconSel} />

            )
        })
    }
},
    {

        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'rgb(187,231,255)',
            showIcon: true,
            showLabel: true,
            style: {
                backgroundColor: 'rgb(191,4,23)',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
            }
        },
    }

)

const NewStack = createStackNavigator({
    HomeStack: {
        screen: bottomTabNavigator,
        navigationOptions: {
            header: null
        }
    },


})

const Switchnavigator = createSwitchNavigator({

    Auth: {
        screen: Authstack
    },
    HomeScreen: {
        screen: NewStack,

    },

},
    {
        navigationOptions: {
            gesturesEnabled: false,
        }
    })

const CommonNavigator = createAppContainer(Switchnavigator);

export default createAppContainer(CommonNavigator);