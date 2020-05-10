import React from 'react'

import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import LinearGradient from 'react-native-linear-gradient'

export const SubmitButton = (props) => {
    let standardSize = props.Size === "medium" ? wp('83%') : props.Size === "small" ? wp('60%') : wp('50%')
    return (
        <TouchableOpacity
            disabled={props.disabled}
            onPress={props.submitOnpress}
            style={[styles.MainButtonContainer,
            {
                height: standardSize ? standardSize / 5.4 : wp('12%'),
                width: standardSize ? standardSize : wp('72%'),


            }, props.MainButtonContainer
            ]}
        >

            <Text style={[styles.ButtonText,
            {
                fontSize: standardSize ? standardSize / 15 : wp('6%'),
            }, props.ButtonText
            ]}>
                {props.ButtonName ? props.ButtonName : 'SUBMIT'}
            </Text>
        </TouchableOpacity>



    )
}



export const SkipButton = (props) => {
    let standardSize = props.Size === "medium" ? wp('80%') : props.Size === "small" ? wp('60%') : wp('50%')
    return (
        <TouchableOpacity
            onPress={props.submitOnpress}
            style={[styles.MainButtonContainer,
            {
                height: standardSize ? standardSize / 5.4 : wp('12%'),
                width: standardSize ? standardSize : wp('72%'),


            },
            ]}
        >

            <Text style={[styles.ButtonText,
            {
                fontSize: standardSize ? standardSize / 15 : wp('2%'),
            },
            ]}>
                {props.ButtonName ? props.ButtonName : 'SUBMIT'}
            </Text>
        </TouchableOpacity>



    )
}


export const UpdateButton = (props) => {
    let standardSize = props.Size === "medium" ? wp('35%') : props.Size === "small" ? wp('60%') : wp('50%')
    return (
        <TouchableOpacity
            onPress={props.submitOnpress}
            style={[styles.MainButtonContainer,
            {
                height: wp('12%'),
                width: wp('30%'),


            },
            ]}
        >

            <Text style={[styles.ButtonText,
            {
                fontSize: wp('4%'),
            },
            ]}>
                {props.ButtonName ? props.ButtonName : 'SUBMIT'}
            </Text>
        </TouchableOpacity>



    )
}

export const CancelButton = (props) => {
    let standardSize = props.Size === "medium" ? wp('35%') : props.Size === "small" ? wp('60%') : wp('50%')
    return (
        <TouchableOpacity
            onPress={props.submitOnpress}
            style={[styles.MainButtonContainer, props.MainButtonContainer

            ]}
        >

            <Text style={[styles.ButtonText,
            {
                fontSize: wp('4%'),
            },
            ]}>
                {props.ButtonName ? props.ButtonName : 'SUBMIT'}
            </Text>
        </TouchableOpacity>
    )
}

export const HomeView = (props) => {
    let standardSize = props.Size === "medium" ? wp('80%') : props.Size === "small" ? wp('60%') : wp('50%')
    return (
        <TouchableOpacity
            onPress={props.submitOnpress}
            style={[styles.MainButtonContainer,
            {
                height: wp('12%'),
                width: wp('25%'),
            },
            ]}
        >

            <Text style={[styles.ButtonText,
            {
                fontSize: standardSize ? standardSize / 15 : wp('2%'),
            },
            ]}>
                {props.ButtonName ? props.ButtonName : 'SUBMIT'}
            </Text>
        </TouchableOpacity>



    )
}


const styles = StyleSheet.create({

    MainButtonContainer: {
        height: wp('12%'),
        width: wp('30%'),
        backgroundColor: 'rgb(191,4,23)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginVertical: wp('5%'),
        alignSelf: 'center',
    },

    ButtonText: {

        fontWeight: '700',
        color: '#ffffff',

    },


})