import React, { Component, useState } from 'react';
import {
    View, Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    Image
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient'

import Icons from '../Router/NavigationIcons';

export const CustomHeader = (props) => {
    return (
        <View style={[styles.MainContainer, {}]}>
            <LinearGradient colors={['#402431', '#ff1f95']} style={styles.HomeHeaderBackgroundStyle}>
                <View style={{ flexDirection: 'column', height: hp('7%'), alignContent: 'center', justifyContent: 'center', marginHorizontal: wp('3%') }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{
                            width: wp('90%'), marginTop: hp('5%'), alignSelf: "center", flexDirection: "row", justifyContent: "space-between"
                        }}>
                            {
                                props.backicon ?
                                    <TouchableOpacity style={[styles.ImageView, { width: wp('6%'), height: hp('3%'), justifyContent: 'center' }]} onPress={props.goback}>
                                        <Image
                                            source={Icons.backicon}
                                            resizeMode='contain'
                                            style={{ width: wp('6%'), height: hp('3%') }}
                                        />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity style={[styles.ImageView, { width: wp('6%'), height: hp('3%'), justifyContent: 'center' }]} onPress={props.goback}>
                                    </TouchableOpacity>
                            }
                            <Text style={[styles.titleText, { fontSize: wp('7%'), fontWeight: '700' }]}>{props.Title}</Text>
                            <View style={{ width: wp("18%"), flexDirection: "row", justifyContent: "flex-end" }}>
                                {
                                    props.Profile ?
                                        <TouchableOpacity
                                            style={{ marginRight: hp('2%') }}
                                            onPress={props.profileOnpress}
                                        >
                                            <Image source={props.Profile} />
                                        </TouchableOpacity>
                                        : null
                                }

                                {
                                    props.bellicon ?
                                        <TouchableOpacity
                                            onPress={props.bellnotificationsOnpress}
                                        >
                                            <Image source={props.bellicon} />
                                        </TouchableOpacity>
                                        : null
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}


const styles = StyleSheet.create({
    MainContainer: {
        height: hp('12%'),
    },
    titleText: {
        color: 'white',
        alignSelf: 'center',
        height: hp('5%')
    },
    HeaderView: {
        marginVertical: hp('-3%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    HeaderBackgroundStyle: {
        width: wp('100%'),
        height: hp('18%'),
        flexDirection: 'column'
    },
    HomeHeaderBackgroundStyle: {
        width: wp('100%'),
        height: hp('9%'),
        flexDirection: 'column'
    }
})

// export default CustomHeader;