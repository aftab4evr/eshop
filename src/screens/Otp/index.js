import React, { Component } from 'react';
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
    Image
} from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { OtpSubmitButton } from '../../component/Button'
import { Loader } from '../../component/Loader'
import { handleOTPValidations } from './validations'



class Otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            isLoading: false,
            modalVisible: false,
            message: 'Otp sending...',
            fromScreen: '',
            activephoneOTP2BorderError: false
        };
    }
    async componentDidMount() {
        await this.setState({
            fromScreen: this.props.navigation.state.params.fromScreen,
            phone: this.props.navigation.state.params.phone,
        })
        console.log(this.state.fromScreen)
        console.log(this.state.phone)

    }
    ResendApi = () => {
        this.setState({
            isLoading: false,
            modalVisible: true
        })
    }

    handleInput = (text, type, index, prevInput, nextInput) => {
        this.setState({
            phoneError: ''
        })

        let status = `${type}${index}Status`;
        let errorText = `${type}${index}Error`;
        let activeBorderColor = `active${type}${index}BorderError`;
        let Otpvalue = `${type}${index}`
        let resp = handleOTPValidations(text, type, index, prevInput, nextInput)

        this.setState({
            [Otpvalue]: resp.value,
            [errorText]: resp.errorText,
            [status]: resp.status,
            [activeBorderColor]: !resp.status
        })

    }

    render() {
        return (
            <View style={style.container}>

                <View style={{ alignItems: "center" }}>
                    <Modal
                        transparent={true}
                        visible={this.state.modalVisible}
                    >
                        <View style={{ alignItems: "center", flex: 1, backgroundColor: 'rgba(49,176,249,0.8)', justifyContent: 'center' }}>

                            <View style={{
                                borderRadius: 8,
                                marginTop: hp("35%"),
                                justifyContent: "center",
                                alignItems: "center",
                                alignSelf: 'center',
                                width: wp("60%"),
                                backgroundColor: "white",
                                height: hp("25%"),
                                marginBottom: hp("30%")

                            }}>
                                <View style={style.crossView}>
                                    <TouchableOpacity onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}>
                                        <Image source={Icons.crossicon} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: wp("60%") }}>

                                    <Text
                                        style={{
                                            fontSize: 15,
                                            marginBottom: hp("13%"),
                                            marginHorizontal: wp('8%'),
                                            marginVertical: hp('-8%'),
                                            alignSelf: 'center',
                                            marginLeft: wp('7%')


                                        }}
                                    >
                                        {this.state.message}
                                    </Text>
                                </View>

                            </View>
                        </View>
                    </Modal>

                    <SafeAreaView >
                        <KeyboardAvoidingView style={style.container1} behavior={Platform.OS === 'ios' ? "padding" : null} enabled>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View>
                                    <Text style={style.TextStyle}>Verify mobile number</Text>
                                </View>
                                <View style={style.otpInputView}>
                                    <TextInput
                                        style={[style.OtpTextInput, { borderColor: this.state.activephoneOTP1BorderError ? "red" : "lightgrey", }]}
                                        autoFocus={true}
                                        maxLength={1}
                                        ref={(input) => { this.phoneOTP1 = input; }}
                                        keyboardType="numeric"
                                        returnKeyType="next"
                                        onChangeText={(text) => this.handleInput(text, 'phoneOTP', '1', this.phoneOTP1, this.phoneOTP2)}
                                        onSubmitEditing={() => { this.phoneOTP2.focus(); }}
                                    >
                                    </TextInput>

                                    <TextInput
                                        style={[style.OtpTextInput, { borderColor: this.state.activephoneOTP2BorderError ? "red" : "lightgrey", }]}
                                        autoFocus={true}
                                        maxLength={1}
                                        keyboardType="numeric"
                                        onChangeText={(text) => this.handleInput(text, 'phoneOTP', '2', this.phoneOTP1, this.phoneOTP3)}
                                        onSubmitEditing={() => { this.phoneOTP3.focus(); }}
                                        ref={(input) => { this.phoneOTP2 = input; }}
                                        ErrorBorder={this.state.activephoneOTP2BorderError}
                                        returnKeyType="next"
                                    >
                                    </TextInput>

                                    <TextInput
                                        style={[style.OtpTextInput, { borderColor: this.state.activephoneOTP3BorderError ? "red" : "lightgrey", }]}
                                        autoFocus={true}
                                        maxLength={1}
                                        keyboardType="numeric"
                                        onChangeText={(text) => this.handleInput(text, 'phoneOTP', '3', this.phoneOTP2, this.phoneOTP4)}
                                        onSubmitEditing={() => { this.phoneOTP4.focus(); }}
                                        ref={(input) => { this.phoneOTP3 = input; }}
                                        ErrorBorder={this.state.activephoneOTP3BorderError}
                                        returnKeyType="next"
                                    >
                                    </TextInput>

                                    <TextInput
                                        style={[style.OtpTextInput, { borderColor: this.state.activephoneOTP4BorderError ? "red" : "lightgrey", }]}
                                        autoFocus={true}
                                        maxLength={1}
                                        keyboardType="numeric"
                                        onChangeText={(text) => this.handleInput(text, 'phoneOTP', '4', this.phoneOTP3, this.phoneOTP4)}
                                        ref={(input) => { this.phoneOTP4 = input; }}
                                        ErrorBorder={this.state.activephoneOTP4BorderError}
                                        returnKeyType="done"
                                    >
                                    </TextInput>

                                </View>
                                <View>
                                    <Text style={style.OtpSendText}>
                                        Please enter the OTP sent to your mobile number
                            </Text>
                                </View>
                                <View tyle={[style.ErrorView]} >
                                    <Text style={[style.ErrorText]} >
                                        {this.state.phoneError}
                                    </Text>
                                </View>
                                <OtpSubmitButton
                                    ButtonText={{
                                        fontSize: 20,
                                        fontWeight: '700',

                                    }}
                                    //isLoading={this.state.enableButton}
                                    Size={"medium"}
                                    ButtonName="VERIFY AND CONTINUE"
                                    submitOnpress={() => this.otpSubmit()
                                    }
                                />
                                <View>
                                    <TouchableOpacity onPress={() =>
                                        this.ResendApi()}>
                                        <Text style={style.ResendText}>Resend confirmation code</Text>
                                    </TouchableOpacity>

                                </View>
                            </ScrollView>
                        </KeyboardAvoidingView>
                    </SafeAreaView>
                    <Loader
                        visible={this.state.isLoading}

                    />
                </View >
            </View>



        )
    }
}
const style = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'center'
    },
    ResendOtpView: {
        justifyContent: 'flex-end',
        width: wp('83%'),
        // height: hp('3%'),

        alignItems: 'flex-end',
        alignSelf: 'center'
    },
    container: {
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "white"

    },
    otpImageView: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: hp('3%')


    },

    textStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        color: 'rgb(93,93,93)',
        marginVertical: hp('3%')

    },
    otpInputView: {
        flexDirection: 'row',
        width: wp('85%'),
        justifyContent: "space-evenly",
        alignItems: 'center',
        alignSelf: 'center',

        height: hp('7%'),
        marginVertical: hp('2%')
    },
    ErrorView: {
        alignSelf: "flex-start",

        width: wp("50%"),
        height: hp("3%"),
        marginLeft: 20

    },
    ErrorText: {
        fontSize: 15,
        color: "red",
    },
    OtpTextInput: {
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: '#E2E2DD',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp("14%"),
        height: hp("6%")
    },
    crossView: {
        alignSelf: 'flex-end',
        marginBottom: hp('15%'),
        marginHorizontal: wp('-1%')

    },
    TextStyle: {
        fontSize: 24,
        fontWeight: '700',
        alignSelf: 'auto',
        marginLeft: wp('1%'),
        // marginTop: hp('1%'),
        marginBottom: wp('12%')
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

})

export default Otp;
