import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width, height} = Dimensions.get('window');

class AboutUS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.cardView}>
              <Text> About Screen</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
const style = StyleSheet.create({});
export default AboutUS;
