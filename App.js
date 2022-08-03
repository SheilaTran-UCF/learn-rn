/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Content from './src/components/Content';

const App: () => React$Node = () => {
  return (
    // 1. Tạo 1 component Content có nội dung là content
    // 2. tạo 1 button
    // 3. khi click button nội dung content đổi thành content đã đổi
    <>
      <SafeAreaView>
        <View>
          <ScrollView>
            <Content />
            <Header />
            <Footer />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
