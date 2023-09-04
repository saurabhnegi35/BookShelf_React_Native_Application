// CustomHeader.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomHeader = ({title, onBackPress}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBackPress}>
        <Text style={styles.backButton}>{title}</Text>
      </TouchableOpacity>

      {/* <Text style={styles.headerTitle}></Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // Adjust the background color as needed
    height: 60,
    paddingHorizontal: 10,
  },
  backButton: {
    color: 'orange', // Adjust the text color as needed
    fontSize: 18,
  },
  headerTitle: {
    color: 'white', // Adjust the text color as needed
    fontSize: 18,
    marginLeft: 20,
  },
});

export default CustomHeader;
