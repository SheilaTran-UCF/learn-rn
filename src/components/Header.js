import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import Content from './Content';

const Header = props => {
  const [mytext, setMytext] = useState(true);

  return (
    <View style={styles.viewHeader}>
      <Text>
        {/* {props.name}, {mytext ? 'Loggin' : 'Logged'} */}
        {props.name}
      </Text>

      <Button
        style={styles.Text}
        onPress={() => {
          setMytext(false);
        }}
        disabled={!mytext}
        title={mytext ? ' loggin ' : 'Logged'}
      />
      <TouchableOpacity
        style={styles.Header}
        onPress={() => {
          setMytext(false);
        }}
        disabled={!mytext}
        // title={mytext ? 'log in' : 'Thank You'}></TouchableOpacity>
        title={props.name}></TouchableOpacity>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  viewHeader: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'blue',
    marginVertical: 50,
  },

  Text: {
    color: 'white',
    alignSelf: 'center',
  },
});
