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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: [
        {
          avatar:
            'https://cdn.britannica.com/13/146313-050-DD9AAC27/India-War-Memorial-arch-New-Delhi-Sir.jpg',
          name: 'New Delhi',
          id: 1,
        },
        {
          avatar:
            'https://static.toiimg.com/thumb/msid-53891735,width-748,height-499,resizemode=4,imgsize-126102/The-Gateway-of-India.jpg',
          name: 'Mumbai',
          id: 2,
        },
        {
          avatar: 'https://www.holidify.com/images/bgImages/KOLKATA.jpg',
          name: 'Kolkata',
          id: 2,
        },
        {
          avatar:
            'https://www.orangesmile.com/common/img_cities_original/chennai--2103041-2.jpg',
          name: 'Chennai',
          id: 2,
        },
        {
          avatar:
            'https://cdn.britannica.com/13/146313-050-DD9AAC27/India-War-Memorial-arch-New-Delhi-Sir.jpg',
          name: 'New Delhi',
          id: 1,
        },
        {
          avatar:
            'https://static.toiimg.com/thumb/msid-53891735,width-748,height-499,resizemode=4,imgsize-126102/The-Gateway-of-India.jpg',
          name: 'Mumbai',
          id: 2,
        },
        {
          avatar: 'https://www.holidify.com/images/bgImages/KOLKATA.jpg',
          name: 'Kolkata',
          id: 2,
        },
        {
          avatar:
            'https://www.orangesmile.com/common/img_cities_original/chennai--2103041-2.jpg',
          name: 'Chennai',
          id: 2,
        },
      ],
    };
  }

  renderStoryElement = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => console.log('Clicked', item)}
        style={style.StoryTouchableOpacity}>
        <Image
          style={style.StoryImageStyle}
          resizeMode="contain"
          source={{uri: item.avatar}}
        />
        <View style={{width: wp('24%'), alignItems: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: '600',
            }}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View>
        <SafeAreaView />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.cardView}>
            <View
              style={{
                marginLeft: wp('2%'),
                width: wp('100%'),
                height: hp('18%'),
              }}>
              <View style={{flexDirection: 'row', width: wp('90%')}}>
                <Text
                  style={{
                    fontWeight: '700',
                    marginVertical: hp('1%'),
                    fontSize: 18,
                  }}>
                  Serving Areas
                </Text>
              </View>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={this.state.story}
                renderItem={({item, index}) =>
                  this.renderStoryElement(item, index)
                }
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    zIndex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgb( 247, 249, 251)',
    marginTop: hp('1%'),
  },
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
  StoryImageStyle: {
    // marginVertical: wp('2%'),
    width: wp('20%'),
    height: hp('10%'),
    borderRadius: 400 / 2,
    borderWidth: 1,
  },
});
export default Home;
