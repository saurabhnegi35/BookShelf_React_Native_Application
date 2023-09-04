import React from 'react';
import { View, StyleSheet, Image, Text, useWindowDimensions } from 'react-native';

const SlideCarousel = ({ item }) => {
  const { width } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    textContainer: {
      position: 'absolute',
      width: 300,
      top: 300,
      left: 10,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      
      fontSize: 30,
      fontWeight: 'bold',
      color: '#F0F0F0', // Customize text color
    },
  });

  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </View>
  );
};

export default SlideCarousel;
