import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CustomTextInput } from '../../component/GlobalTextInput';
import { SubmitButton } from '../../component/Button';
import { SubmitWhatsapButton } from '../../component/Button';
import icon from './icons'






class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: 'https://thumbs.dreamstime.com/z/fast-stores-logo-design-template-shopping-bag-icon-135331019.jpg',
            isRemind: false,
            phone: '',
            phoneError: '',
        };
    }


    render() {
        return (
            <View style={style.container}>
                <KeyboardAvoidingView style={style.container} behavior={Platform.OS === 'ios' ? "padding" : null} enabled>

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
                                <TouchableOpacity
                                    style={{

                                        marginLeft: wp("6%"),
                                        marginRight: wp('4%'),
                                        height: hp("6%"),
                                        borderWidth: 1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 5,
                                        borderColor: 'white',
                                        backgroundColor: '#CCFFCC',
                                        width: wp('17%'),
                                    }}
                                >
                                    <Text style={{ fontSize: 20 }}>
                                        +91
                            </Text>
                                </TouchableOpacity>
                                <CustomTextInput
                                    MyPlaceholder="Your phone number*"
                                    textCon={{ borderBottomColor: this.state.activefirstnameBorderColor ? "red" : "white" }}
                                    textInputStyle={{ paddingLeft: 39, width: wp('70%'), height: hp('6%') }}
                                    value={this.state.phoneNumber}
                                    keyboardType="number-pad"
                                    onChangeText={(text) => this.handlevalidate(text, "phoneNumber")}
                                    // ErrorText={this.state.phoneNumberError}
                                    returnKeyType="next"
                                    InputRef={(input) => this.phoneNumber = input}
                                    onSubmitEditing={() => { this.name.focus(); }}
                                    maxLength={10}
                                />

                            </View>
                            <View >
                                <Text style={style.OtpSendText}>We will send you OTP on this number</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <SubmitButton
                                    submitOnpress={() => this.props.navigation.navigate("Login")}
                                    Size={"small"}
                                    ButtonName="OTP on SMS"
                                />
                                <SubmitWhatsapButton
                                    submitOnpress={() => this.props.navigation.navigate("Login")}
                                    Size={"small"}
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
        alignSelf: 'center'
    },

    ImageStyle: {
        height: hp('40%'),
        width: wp("100%"),
        marginTop: wp('23%')

    },
    TextStyle: {
        fontSize: 20,
        fontWeight: '800',
        alignSelf: 'auto',
        marginLeft: wp('5%'),
        marginBottom: wp('13%')
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
        marginTop: hp("-3%"),
        color: 'gray',
        fontSize: 15,
        marginLeft: wp('7%'),
        marginBottom: hp('2%'),
    },


})
export default Login;
