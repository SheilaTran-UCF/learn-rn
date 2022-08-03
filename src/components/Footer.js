import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View style={styles.viewFooter}>
      <TouchableOpacity style={styles.Footer}>
        <Text style={styles.Text}>Footer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
const styles = StyleSheet.create({
  viewFooter: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'red',
    marginTop: 50,
  },
  Text: {
    color: 'white',
    alignSelf: 'center',
  },
});
