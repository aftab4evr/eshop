import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
  FlatList,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { CustomTextInput } from '../../component/GlobalTextInput';
import { SubmitButton } from '../../component/Button';
import { SubmitWhatsapButton } from '../../component/Button';
import icon from './icons';
import { CountryCode } from './Constant';
const { width, height } = Dimensions.get('window');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo:
        'https://thumbs.dreamstime.com/z/fast-stores-logo-design-template-shopping-bag-icon-135331019.jpg',
      isRemind: false,
      phone: '',
      phoneError: '',
    };
  }

  render() {
    return (
      <View style={style.container}>
        <KeyboardAvoidingView
          style={style.container}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          enabled>
          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={style.ImageView}>
                <Image
                  style={style.ImageStyle}
                  source={{ uri: this.state.photo }}
                />
              </View>
              <View>
                <Text style={style.TextStyle}>Get started</Text>
              </View>
              <View style={style.TextInputMainContainer}>
                <View
                  style={{
                    marginLeft: wp('8%'),
                    marginRight: wp('4%'),
                    height: hp('6%'),
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    borderColor: 'white',
                    width: wp('22%'),
                    backgroundColor: 'white',
                  }}>
                  <Text style={{}}>+91</Text>
                </View>
                <CustomTextInput
                  MyPlaceholder="Your phone number*"
                  textCon={{
                    borderBottomColor: this.state.activefirstnameBorderColor
                      ? 'red'
                      : 'white',
                  }}
                  textInputStyle={{
                    paddingLeft: 39,
                    width: wp('60%'),
                    height: hp('6%'),
                  }}
                  value={this.state.phoneNumber}
                  keyboardType="number-pad"
                  //   onChangeText={(text) =>
                  //     this.handlevalidate(text, 'phoneNumber')
                  //   }
                  // ErrorText={this.state.phoneNumberError}
                  returnKeyType="next"
                  InputRef={(input) => (this.phoneNumber = input)}
                  onSubmitEditing={() => {
                    this.name.focus();
                  }}
                  maxLength={10}
                />
              </View>
              <View>
                <Text style={style.OtpSendText}>
                  We will send you OTP on this number
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <SubmitButton
                  submitOnpress={() => this.props.navigation.navigate('HomeStack')}
                  Size={'small'}
                  ButtonName="OTP on SMS"
                />
                <TouchableOpacity
                  onPress={() => { }}
                  style={style.GooglePlusStyle} activeOpacity={0.5}>


                  <Text style={style.WhatsapTextStyle}>Get OTP on WhatsApp
                  <View style={style.SeparatorLine} />
                    <Image
                      source={icon.whatsap}
                      style={style.ImageIconStyle}

                    />
                  </Text>
                </TouchableOpacity>

              </View>
            </ScrollView>
          </SafeAreaView>
        </KeyboardAvoidingView>
        <Modal
          style={{ height: height / 2 }}
          animationType="none"
          transparent={true}
          visible={this.state.modalVisibleCountry}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={style.ModalMainContainer}>
            <View style={style.ModalStyle}>
              <FlatList
                data={CountryCode}
                onRequestClose={() => console.log('modal has been closeds')}
                renderItem={({ item, index }) => (
                  <View style={{ width: wp('70%') }}>
                    <TouchableOpacity
                      onPress={() => this.setModalData(item)}
                      style={style.FlatListStyle}>
                      <View style={{ width: wp('50%') }}>
                        <Text style={{ fontSize: 15, marginVertical: 10 }}>
                          {item.dialCode}
                        </Text>
                        <Text style={{ fontSize: 15, marginVertical: 10 }}>
                          {item.code}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => {
                  return (
                    <View
                      style={{
                        height: 1,
                        backgroundColor: 'grey',
                        width: wp('70%'),
                      }}
                    />
                  );
                }}
                CancelModal={() => this.setState({ yearView: false })}
              />
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    modalVisibleCountry: !this.state.modalVisibleCountry,
                  })
                }
                style={{
                  backgroundColor: 'green',
                  width: wp('40%'),
                  marginTop: hp('1%'),
                }}>
                <Text style={style.CancelButtonStyle}>{'Cancel'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: wp('18%'),
  },

  ImageStyle: {
    height: hp('40%'),
    width: wp('100%'),
    marginBottom: wp('10%'),
  },
  TextStyle: {
    fontSize: 20,
    fontWeight: '800',
    alignSelf: 'auto',
    marginLeft: wp('5%'),
    marginTop: hp('1%'),
    marginBottom: wp('13%'),
  },
  TextInputMainContainer: {
    justifyContent: 'space-between',
    alignSelf: 'auto',
    backgroundColor: '#ffffff',
    marginTop: hp('-2%'),
    height: hp('10%'),
    flexDirection: 'row',
  },
  InputContainerView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp('83%'),
    marginTop: hp('1%'),
  },
  OtpSendText: {
    marginTop: hp('-3%'),
    color: 'gray',
    fontSize: 15,
    marginLeft: wp('7%'),
    marginBottom: hp('2%'),
  },
  ModalMainContainer: {
    flex: 1,
    backgroundColor: 'rgba(122, 122, 122,0.5)',
    justifyContent: 'center',
  },
  ModalStyle: {
    height: height / 2,
    width: wp('80%'),
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 15,
    // borderRadius: hp('1%'),
    borderWidth: hp('.5%'),
    borderColor: '#05CB18',
  },
  CancelButtonStyle: {
    alignSelf: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  GooglePlusStyle: {
    flexDirection: 'row',
    backgroundColor: '#05CB18',
    borderWidth: 1,
    borderColor: '#05CB18',
    height: wp('10%'),
    width: wp('50%'),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    marginLeft: wp('2%'),
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 50,
    width: 40,
    marginRight: wp('-6%'),
    resizeMode: 'stretch',
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    height: 40,
  },
  WhatsapTextStyle: {
    color: '#fff',
    marginBottom: 16,
    fontSize: 15,
    marginRight: 20,
    fontWeight: '700',
    marginLeft: wp('3%'),
  },
});
export default Login;
