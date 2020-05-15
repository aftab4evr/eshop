import React, {Component} from 'react';
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
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CustomTextInput} from '../../component/GlobalTextInput';
import {SubmitButton} from '../../component/Button';
import icon from './icons';
import {handleValidations} from './validations';
import ApiRequest from '../../services/webservice';
import {Loader} from '../../component/Loader';
import AsyncStorage from '@react-native-community/async-storage';

const {width, height} = Dimensions.get('window');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      phone: '',
      phoneError: '',
      isPhoneValid: false,
    };
  }
  componentDidMount() {
    // this.checkToken();
  }
  async checkToken() {
    try {
      let userDetails = await AsyncStorage.getItem('loginDetail');
      console.log('>>>', userDetails);
      if (userDetails != null) {
        this.props.navigation.navigate('Home');
      }
    } catch (error) {
      console.log('not present');
    }
  }
  handelLogin() {
    console.log('handelLogin', this.state.isPhoneValid);
    this.setState({isLoading: true});

    let data = {
      code: '+91',
      mobile: '7278737088',
    };
    if (this.state.isPhoneValid == true) {
      ApiRequest(data, '/login', 'POST').then((response) => {
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
                      this.props.navigation.navigate('Otp', {
                        uuid: response.data.uuid,
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
  }
  handlevalidate(text) {
    let type = 'phone';
    let status = `${type}Status`;
    let errorText = `${type}Error`;
    let activeBorderColor = `active${type}BorderColor`;
    let resp = handleValidations(text, type);
    this.setState({
      [type]: resp.value,
      [errorText]: resp.errorText,
      [status]: resp.status,
      [activeBorderColor]: !resp.status,
      isPhoneValid: resp.status,
    });
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
              <View style={style.ImageContainer}>
                <Image style={style.StoreStyle} source={icon.storenearme} />
                <Image style={style.ImageStyle} source={icon.loginIcon} />
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
                    borderColor: 'black',
                    width: wp('22%'),
                    // backgroundColor: 'white',
                  }}>
                  <Text style={{}}>+91</Text>
                </View>
                <CustomTextInput
                  MyPlaceholder="Your phone number*"
                  textCon={{
                    borderBottomColor: this.state.activephoneBorderColor
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
                  onChangeText={(text) => this.handlevalidate(text)}
                  ErrorText={this.state.phoneError}
                  returnKeyType="done"
                  InputRef={(input) => (this.phone = input)}
                  maxLength={10}
                />
              </View>
              <View>
                <Text style={style.OtpSendText}>
                  We will send you OTP on this number
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <SubmitButton
                  submitOnpress={() => this.handelLogin()}
                  Size={'small'}
                  ButtonName="OTP on SMS"
                />
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('HomeScreen')}
                  style={style.GooglePlusStyle}
                  activeOpacity={0.5}>
                  <Text style={style.WhatsapTextStyle}>
                    Get OTP on WhatsApp
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
          <Loader visible={this.state.isLoading} />
        </KeyboardAvoidingView>
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
  },
  ImageContainer: {
    flexDirection: 'column',
    width: wp('40%'),
  },
  ImageStyle: {
    height: hp('30%'),
    width: wp('100%'),
  },
  StoreStyle: {
    height: hp('30%'),
    width: wp('100%'),
    marginTop: hp('2px'),
  },
  TextStyle: {
    fontSize: 20,
    fontWeight: '800',
    alignSelf: 'auto',
    marginLeft: wp('5%'),
    marginBottom: wp('12%'),
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
    marginTop: hp('-1%'),
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
    width: wp('46%'),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('2%'),
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    height: 40,
  },
  WhatsapTextStyle: {
    color: 'green',
    marginBottom: 15,
    fontSize: 14,
    marginRight: 20,
    fontWeight: '500',
    marginTop: wp('2%'),
    marginLeft: wp('3%'),
  },
});
export default Login;
