import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import icon from '../Login/icons';

import {all, healtcare, grocery} from './Constant';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
    };
  }
  componentDidMount() {
    this.setState({
      itemList: all,
      isAll: true,
      isGrocry: false,
      isHealtCare: false,
    });
  }
  groceydetails(item, index) {
    return (
      <View
        style={{
          width: wp('85%'),
          alignSelf: 'center',
          height: hp('10%'),
          backgroundColor: 'white',
          marginVertical: hp('1%'),
          flexDirection: 'row',
        }}>
        <Image
          resizeMode="contain"
          source={{uri: item.image}}
          style={{width: wp('20%'), height: hp('10%'), marginLeft: wp('3%')}}
        />

        <View
          style={{
            marginLeft: wp('2%'),
            width: wp('55%'),
            height: hp('10%'),

            justifyContent: 'flex-end',
          }}>
          <Text style={{marginTop: hp('2%')}}>{item.name}</Text>
          <View
            style={{
              justifyContent: 'flex-end',
              marginTop: hp('2%'),
              flexDirection: 'row',
              borderBottomWidth: 0.5,
            }}>
            <TouchableOpacity>
              <Text style={{marginRight: 20}}>whatsapp</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{marginRight: 10}}>call</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{marginBottom: hp('1.5%'), marginLeft: wp('40%')}}>
              {item.area}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View>
        <SafeAreaView>
          <View
            style={{
              height: hp('30%'),
              width: wp('100%'),
            }}>
            <Image
              resizeMode="contain"
              source={icon.storenearme}
              // style={{width: wp('1000%'), height: hp('30%')}}
            />
          </View>
          <View
            style={{
              height: hp('10%'),
              width: wp('100%'),
              backgroundColor: 'cyan',
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  itemList: all,
                  isAll: true,
                  isGrocry: false,
                  isHealtCare: false,
                });
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderRadius: 79,
                marginLeft: wp('2%'),
                backgroundColor: this.state.isAll
                  ? '#C4CCF9'
                  : 'rgba(98,102,243,0.8)',
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                width: wp('30%'),
              }}>
              <Text style={{fontWeight: '500', fontSize: 20}}>All </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  itemList: grocery,
                  isAll: false,
                  isGrocry: true,
                  isHealtCare: false,
                });
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderRadius: 79,
                marginLeft: wp('2%'),
                backgroundColor: this.state.isGrocry
                  ? '#C4CCF9'
                  : 'rgba(98,102,243,0.8)',
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                width: wp('30%'),
              }}>
              <Text style={{fontWeight: '500', fontSize: 20}}>Grocery </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  itemList: healtcare,
                  isAll: false,
                  isGrocry: false,
                  isHealtCare: true,
                });
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderRadius: 79,
                marginLeft: wp('2%'),
                backgroundColor: this.state.isHealtCare
                  ? '#C4CCF9'
                  : 'rgba(98,102,243,0.8)',
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                width: wp('30%'),
              }}>
              <Text style={{fontWeight: '500', fontSize: 20}}>Healthcare </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: hp('50%'),
              width: wp('100%'),
              backgroundColor: 'yellow',
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={this.state.itemList}
              renderItem={({item, index}) => this.groceydetails(item, index)}
              keyExtractor={(item) => item.id}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  cardView: {
    marginTop: hp('2%'),
    shadowOpacity: 0.4,
    shadowOffset: {width: 0.1, height: 0.1},
    shadowRadius: 0.9,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 0.3,
    borderColor: 'lightgray',
    width: wp('100%'),
  },
});
export default Home;
