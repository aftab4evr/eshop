import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  Share,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width, height} = Dimensions.get('window');

class ShareScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    Share.share({
      message: 'hiiii',
    })
      .then(result => console.log(result))
      .catch(errorMsg => console.log(errorMsg));
  }
  render() {
    return (
      <View>
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.cardView}>
              <Text> Share Screen</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
const style = StyleSheet.create({});
export default ShareScreen;
