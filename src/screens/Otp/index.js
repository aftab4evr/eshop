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
import { SubmitButton } from '../../component/Button'
import OtpIcon from '../../assets/images/otpicon.png'
import { Loader } from '../../component/Loader'


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
                </View>



                <SafeAreaView >
                    <KeyboardAvoidingView style={style.container1} behavior={Platform.OS === 'ios' ? "padding" : null} enabled>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={style.otpImageView}>
                                <Image source={OtpIcon} />
                            </View>
                            <View style={style.textStyle}>
                                <Text style={{ color: 'rgb(93,93,93)', fontSize: 15 }}>Please enter the 4 digits OTP sent</Text>
                                <Text style={{ color: 'rgb(93,93,93)', fontSize: 15 }}>on your registered phone number.</Text>
                            </View>
                            <View style={style.textStyle}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Enter 4- digits code</Text>
                            </View>
                            <View style={style.otpInputView}>


                                <TextInput
                                    style={[style.OtpTextInput, { borderColor: this.state.activephoneOTP1BorderError ? "red" : "lightgrey", }]}
                                    maxLength={1}
                                    ref={(input) => { this.phoneOTP1 = input; }}
                                    keyboardType="number-pad"
                                    returnKeyType="next"
                                    onChangeText={(text) => this.handleInput(text, 'phoneOTP', '1', this.phoneOTP1, this.phoneOTP2)}
                                    onSubmitEditing={() => { this.phoneOTP2.focus(); }}
                                >
                                </TextInput>

                                <TextInput
                                    style={[style.OtpTextInput, { borderColor: this.state.activephoneOTP2BorderError ? "red" : "lightgrey", }]}
                                    maxLength={1}
                                    keyboardType="number-pad"
                                    onChangeText={(text) => this.handleInput(text, 'phoneOTP', '2', this.phoneOTP1, this.phoneOTP3)}
                                    onSubmitEditing={() => { this.phoneOTP3.focus(); }}
                                    ref={(input) => { this.phoneOTP2 = input; }}
                                    ErrorBorder={this.state.activephoneOTP2BorderError}
                                    returnKeyType="next"
                                >
                                </TextInput>

                                <TextInput
                                    style={[style.OtpTextInput, { borderColor: this.state.activephoneOTP3BorderError ? "red" : "lightgrey", }]}
                                    maxLength={1}
                                    keyboardType="number-pad"
                                    onChangeText={(text) => this.handleInput(text, 'phoneOTP', '3', this.phoneOTP2, this.phoneOTP4)}
                                    onSubmitEditing={() => { this.phoneOTP4.focus(); }}
                                    ref={(input) => { this.phoneOTP3 = input; }}
                                    ErrorBorder={this.state.activephoneOTP3BorderError}
                                    returnKeyType="next"
                                >
                                </TextInput>

                                <TextInput
                                    style={[style.OtpTextInput, { borderColor: this.state.activephoneOTP4BorderError ? "red" : "lightgrey", }]}
                                    maxLength={1}
                                    keyboardType="number-pad"
                                    onChangeText={(text) => this.handleInput(text, 'phoneOTP', '4', this.phoneOTP3, this.phoneOTP4)}
                                    ref={(input) => { this.phoneOTP4 = input; }}
                                    ErrorBorder={this.state.activephoneOTP4BorderError}
                                    returnKeyType="done"
                                >
                                </TextInput>

                            </View>
                            <View tyle={[style.ErrorView]} >
                                <Text style={[style.ErrorText]} >
                                    {this.state.phoneError}
                                </Text>
                            </View>

                            <View style={style.ResendOtpView}>
                                <TouchableOpacity onPress={() =>
                                    this.ResendApi()}>
                                    <Text style={{ color: '#23a7fa', }}>Resend</Text>
                                </TouchableOpacity>
                            </View>

                            <SubmitButton
                                ButtonText={{ fontSize: 20 }}
                                //isLoading={this.state.enableButton}
                                Size={"medium"}
                                ButtonName="S U B M I T"
                                submitOnpress={() => this.otpSubmit()
                                }
                            />

                        </ScrollView>
                    </KeyboardAvoidingView>
                </SafeAreaView>
                <Loader
                    visible={this.state.isLoading}

                />
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

})

export default Otp;
