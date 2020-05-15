import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Text,
  Modal,
  Alert,
  Image,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {OtpSubmitButton} from '../../component/Button';
import {Loader} from '../../component/Loader';
import {handleOTPValidations} from './validations';

import ApiRequest from '../../services/webservice';

class Otp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uuid: '',
      isLoading: false,
      modalVisible: false,
      message: 'Otp sending...',
      activephoneOTP2BorderError: false,
    };
  }
  async componentDidMount() {
    await this.setState({
      uuid: this.props.navigation.state.params.uuid,
    });
    console.log(this.state.uuid);
  }
  ResendApi = () => {
    console.log(this.state.uuid);
    this.setState({
      isLoading: true,
    });
    ApiRequest('', `/resend-otp/${this.state.uuid}`, 'GET').then((response) => {
      console.log('response', response);
      switch (response.status) {
        case 900: {
          this.setState({isLoading: false});
          setTimeout(() => {
            Alert.alert(
              '',
              'Please check your internet connection',
              [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              {cancelable: false},
            );
          }, 200);
          break;
        }

        case 200: {
          this.setState({isLoading: false});
          setTimeout(() => {
            Alert.alert(
              '',
              response.data.responseMessage,
              [
                {
                  text: 'OK',
                  onPress: () => {
                    console.log('OK Pressed');
                  },
                },
              ],
              {cancelable: false},
            );
          }, 500);
          break;
        }
        default:
          {
            this.setState({isLoading: false});
            setTimeout(() => {
              Alert.alert(
                '',
                response.data.message,
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                {cancelable: false},
              );
            }, 200);
          }
          break;
      }
    });
  };

  handleInput = (text, type, index, prevInput, nextInput) => {
    this.setState({
      phoneError: '',
    });

    let status = `${type}${index}Status`;
    let errorText = `${type}${index}Error`;
    let activeBorderColor = `active${type}${index}BorderError`;
    let Otpvalue = `${type}${index}`;
    let resp = handleOTPValidations(text, type, index, prevInput, nextInput);

    this.setState({
      [Otpvalue]: resp.value,
      [errorText]: resp.errorText,
      [status]: resp.status,
      [activeBorderColor]: !resp.status,
    });
  };

  handelSubmit() {
    if (
      this.state.phoneOTP1Status &&
      this.state.phoneOTP2Status &&
      this.state.phoneOTP3Status &&
      this.state.phoneOTP4Status
    ) {
      this.setState({phoneError: ''});
      this.OTPApiRequest();
    } else {
      this.setState({phoneError: '*Please enter OTP.'});
    }
  }
  OTPApiRequest() {
    console.log('hi');
    this.setState({
      isLoading: true,
    });
    let data = {
      uuid: this.state.uuid,
      otp:
        this.state.phoneOTP1 +
        this.state.phoneOTP2 +
        this.state.phoneOTP3 +
        this.state.phoneOTP4,
    };
    console.log(data);
    ApiRequest(data, '/verify-otp', 'POST').then((response) => {
      console.log('response', response);
      switch (response.status) {
        case 900: {
          this.setState({isLoading: false});
          setTimeout(() => {
            Alert.alert(
              '',
              'Please check your internet connection',
              [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              {cancelable: false},
            );
          }, 200);
          break;
        }
        case 200: {
          this.setState({isLoading: false});
          setTimeout(() => {
            Alert.alert(
              '',
              response.data.message,
              [
                {
                  text: 'OK',
                  onPress: () => {
                    this.props.navigation.navigate('Homestack', {
                      data: response.data,
                    });
                  },
                },
              ],
              {cancelable: false},
            );
          }, 500);
          break;
        }
        default:
          {
            this.setState({isLoading: false});
            setTimeout(() => {
              Alert.alert(
                '',
                response.data.message,
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                {cancelable: false},
              );
            }, 200);
          }
          break;
      }
    });
  }
  render() {
    return (
      <View style={style.container}>
        <View style={{alignItems: 'center'}}>
          <SafeAreaView>
            <KeyboardAvoidingView
              style={style.container1}
              behavior={Platform.OS === 'ios' ? 'padding' : null}
              enabled>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                  <Text style={style.TextStyle}>Verify mobile number</Text>
                </View>
                <View style={style.otpInputView}>
                  <TextInput
                    style={[
                      style.OtpTextInput,
                      {
                        borderColor: this.state.activephoneOTP1BorderError
                          ? 'red'
                          : 'lightgrey',
                      },
                    ]}
                    autoFocus={true}
                    maxLength={1}
                    ref={(input) => {
                      this.phoneOTP1 = input;
                    }}
                    keyboardType="numeric"
                    returnKeyType="next"
                    onChangeText={(text) =>
                      this.handleInput(
                        text,
                        'phoneOTP',
                        '1',
                        this.phoneOTP1,
                        this.phoneOTP2,
                      )
                    }
                    onSubmitEditing={() => {
                      this.phoneOTP2.focus();
                    }}
                    secureTextEntry={true}
                  />

                  <TextInput
                    style={[
                      style.OtpTextInput,
                      {
                        borderColor: this.state.activephoneOTP2BorderError
                          ? 'red'
                          : 'lightgrey',
                      },
                    ]}
                    autoFocus={true}
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={(text) =>
                      this.handleInput(
                        text,
                        'phoneOTP',
                        '2',
                        this.phoneOTP1,
                        this.phoneOTP3,
                      )
                    }
                    onSubmitEditing={() => {
                      this.phoneOTP3.focus();
                    }}
                    ref={(input) => {
                      this.phoneOTP2 = input;
                    }}
                    ErrorBorder={this.state.activephoneOTP2BorderError}
                    returnKeyType="next"
                    secureTextEntry={true}
                  />

                  <TextInput
                    style={[
                      style.OtpTextInput,
                      {
                        borderColor: this.state.activephoneOTP3BorderError
                          ? 'red'
                          : 'lightgrey',
                      },
                    ]}
                    autoFocus={true}
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={(text) =>
                      this.handleInput(
                        text,
                        'phoneOTP',
                        '3',
                        this.phoneOTP2,
                        this.phoneOTP4,
                      )
                    }
                    onSubmitEditing={() => {
                      this.phoneOTP4.focus();
                    }}
                    ref={(input) => {
                      this.phoneOTP3 = input;
                    }}
                    ErrorBorder={this.state.activephoneOTP3BorderError}
                    returnKeyType="next"
                    secureTextEntry={true}
                  />

                  <TextInput
                    style={[
                      style.OtpTextInput,
                      {
                        borderColor: this.state.activephoneOTP4BorderError
                          ? 'red'
                          : 'lightgrey',
                      },
                    ]}
                    autoFocus={true}
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={(text) =>
                      this.handleInput(
                        text,
                        'phoneOTP',
                        '4',
                        this.phoneOTP3,
                        this.phoneOTP4,
                      )
                    }
                    ref={(input) => {
                      this.phoneOTP4 = input;
                    }}
                    ErrorBorder={this.state.activephoneOTP4BorderError}
                    returnKeyType="done"
                    secureTextEntry={true}
                  />
                </View>
                <View>
                  <Text style={style.OtpSendText}>
                    Please enter the OTP sent to your mobile number
                  </Text>
                </View>
                <View tyle={[style.ErrorView]}>
                  <Text style={[style.ErrorText]}>{this.state.phoneError}</Text>
                </View>
                <OtpSubmitButton
                  ButtonText={{
                    fontSize: 20,
                    fontWeight: '700',
                  }}
                  //isLoading={this.state.enableButton}
                  Size={'medium'}
                  ButtonName="VERIFY AND CONTINUE"
                  submitOnpress={() => this.handelSubmit()}
                />
                <View>
                  <TouchableOpacity onPress={() => this.ResendApi()}>
                    <Text style={style.ResendText}>
                      Resend confirmation code
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </SafeAreaView>
          <Loader visible={this.state.isLoading} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
  },
  ResendOtpView: {
    justifyContent: 'flex-end',
    width: wp('83%'),
    // height: hp('3%'),

    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  container: {
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    // marginTop: wp('18%'),
  },
  otpImageView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: hp('3%'),
  },

  textStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: 'rgb(93,93,93)',
    marginVertical: hp('3%'),
  },
  otpInputView: {
    flexDirection: 'row',
    width: wp('85%'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',

    height: hp('7%'),
    marginVertical: hp('2%'),
  },
  ErrorView: {
    alignSelf: 'flex-start',

    width: wp('50%'),
    height: hp('3%'),
    marginLeft: 20,
  },
  ErrorText: {
    fontSize: 15,
    color: 'red',
  },
  OtpTextInput: {
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#E2E2DD',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('14%'),
    height: hp('6%'),
    fontSize: 24,
  },
  crossView: {
    alignSelf: 'flex-end',
    marginBottom: hp('15%'),
    marginHorizontal: wp('-1%'),
  },
  TextStyle: {
    fontSize: 24,
    fontWeight: '700',
    alignSelf: 'auto',
    marginLeft: wp('1%'),
    // marginTop: hp('1%'),
    marginBottom: wp('12%'),
  },
  OtpSendText: {
    marginTop: hp('1%'),
    color: 'black',
    fontSize: 15,
    marginLeft: wp('5%'),
    marginBottom: hp('3%'),
  },
  ResendText: {
    marginTop: hp('3%'),
    color: 'black',
    fontSize: 16,
    marginLeft: wp('18%'),
    color: '#CCCC00',
    fontWeight: '700',
  },
});

export default Otp;
