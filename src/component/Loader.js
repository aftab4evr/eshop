import React from 'react';
import {View, Text, Modal, ActivityIndicator} from 'react-native';

export const Loader = ({visible, text, onRequestClose}) => {
  return (
    <Modal transparent={true} visible={visible} onRequestClose={onRequestClose}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#00000',
            borderRadius: 5,
            padding: 10,
            width: 230,
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color="black" />
          <Text style={{fontSize: 18, marginLeft: 10, fontWeight: 'bold'}}>
            {text}
          </Text>
        </View>
      </View>
    </Modal>
  );
};
