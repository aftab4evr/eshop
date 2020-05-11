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
            'https://pbs.twimg.com/profile_images/378800000100729128/b544463a6b0232b20e10751abad254b9.jpeg',
          name: 'New Delhi',
          id: 1,
        },
        {
          avatar: 'https://wallpaperaccess.com/full/1331691.jpg',
          name: 'Mumbai',
          id: 2,
        },
        {
          avatar:
            'https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/aa/b8/46/aab8462a-ff40-6dd4-236f-96033f0db41e/source/512x512bb.jpg',
          name: 'Kolkata',
          id: 2,
        },
        {
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          name: 'Aftab',
          id: 2,
        },
        {
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          name: 'Aftab',
          id: 2,
        },
        {
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          name: 'Aftab',
          id: 2,
        },
        {
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          name: 'Aftab',
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
                width: wp('90%'),
                height: hp('18%'),
              }}>
              <View style={{flexDirection: 'row', width: wp('90%')}}>
                <Text style={{fontWeight: '700', marginVertical: hp('1%')}}>
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
    marginVertical: wp('2%'),
    width: wp('20%'),
    height: hp('10%'),
    borderRadius: 400 / 2,
    borderWidth: 2,
  },
});
export default Home;
