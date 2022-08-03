// 1. Tạo 1 component Content có nội dung là content
// 2. tạo 1 button
// 3. khi click button nội dung content đổi thành content đã đổi

//1. ôn lại state & props
//2. ôn lại cấu trúc 1 component

//3. tạo 3 component header, content, footer
//4. ở content có nội dung mặc định là not login
//5. ở header có 1 button Login
//6 khi click button ở header thì nội dung ở Content đổi thành logged.

import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';
import React from 'react';
import Header from './Header';

const Content = () => {
  return (
    <View>
      <Text style={styles.Text}>not login </Text>
    </View>
  );
  S;
};

export default Content;
const styles = StyleSheet.create({
  viewText: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',

    marginTop: 150,
  },
  Text: {
    color: 'blue',
    alignSelf: 'center',
  },
});
