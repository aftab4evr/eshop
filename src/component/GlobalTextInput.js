import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');
export const CustomTextInput = props => {
  return (
    <View
      style={[styles.TextInputMainContainer, props.InputFieldMainContainer]}>
      <TextInput
        style={[styles.textInputStyle, props.textInputStyle]}
        placeholder={props.MyPlaceholder}
        placeholderTextColor="rgb(181 ,193, 201)"
        value={props.value}
        autoCapitalize={false}
        autoCorrect={false}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        ref={props.InputRef}
        onSubmitEditing={props.onSubmitEditing}
        maxLength={props.maxLength}
        editable={props.editable}
        returnKeyType={props.returnKeyType}
        multiline={props.multiline}
      />
      <Text
        numberOfLines={2}
        style={[styles.ErrorText, props.ErrorText, styles.ErrorView]}>
        {props.ErrorText}
      </Text>
    </View>
  );
};

export const SearchTextInput = props => {
  return (
    <View
      style={[styles.TextInputMainContainer, props.InputFieldMainContainer]}>
      <TextInput
        style={[styles.SearchInputStyle, props.textInputStyle]}
        placeholder={props.MyPlaceholder}
        placeholderTextColor="white"
        value={props.value}
        autoCapitalize={false}
        autoCorrect={false}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        ref={props.InputRef}
        onSubmitEditing={props.onSubmitEditing}
        maxLength={props.maxLength}
        editable={props.editable}
        returnKeyType={props.returnKeyType}
        multiline={props.multiline}
      />
      <Text
        numberOfLines={2}
        style={[styles.ErrorText, props.ErrorText, styles.ErrorView]}>
        {props.ErrorText}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textInputStyle: {
    alignSelf: 'center',
    width: wp('90%'),
    height: hp('6%'),
    borderWidth: 1,
    alignItems: 'baseline',
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'white',
    marginRight: wp('6%'),
    fontSize: 19,
  },
  ErrorView: {
    marginHorizontal: wp('3%'),
  },
  ErrorText: {
    color: 'red',
    fontSize: 15,
    marginBottom: hp('1%'),
  },
  SearchInputStyle: {
    alignSelf: 'center',
    width: wp('90%'),
    height: hp('8%'),
    borderWidth: 1,
    alignItems: 'baseline',
    borderRadius: 25,
    borderColor: 'rgb(191,4,23)',
    backgroundColor: 'white',
  },
});
