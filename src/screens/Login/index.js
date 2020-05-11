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
  Modal,
  FlatList,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CustomTextInput} from '../../component/GlobalTextInput';
import {SubmitButton} from '../../component/Button';
import {SubmitWhatsapButton} from '../../component/Button';
import icon from './icons';
import {CountryCode} from './Constant';
const {width, height} = Dimensions.get('window');

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
                  source={{uri: this.state.photo}}
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
                    borderColor: 'green',
                    width: wp('22%'),
                    backgroundColor: '#CCFFCC',
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
              <View style={{flexDirection: 'row'}}>
                <SubmitButton
                  submitOnpress={() => this.props.navigation.navigate('HomeStack')}
                  Size={'small'}
                  ButtonName="OTP on SMS"
                />
                <SubmitWhatsapButton
                  submitOnpress={() => this.props.navigation.navigate('Login')}
                  Size={'small'}
                  ButtonName="Get OTP on Whatsapp"
                />
              </View>
            </ScrollView>
          </SafeAreaView>
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

  ImageStyle: {
    height: hp('40%'),
    width: wp('100%'),
    marginTop: wp('23%'),
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
    // borderColor: 'green',
  },
  CancelButtonStyle: {
    alignSelf: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});
export default Login;
