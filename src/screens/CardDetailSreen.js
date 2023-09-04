// CardDetailScreen.js
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const CardDetailScreen = ({route}) => {
  const {card} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{card.title}</Text>
      <Text style={styles.authorText}>By {card.author}</Text>
      <Text style={styles.descriptionText}>{card.description}</Text>
      <Image style={styles.cardImage} source={card.coverImage} />
      <View style={styles.box}>
        <View style={styles.Box}>
          <Text style={styles.textBox}>$ {card.price}</Text>
        </View>
        <View style={styles.Box2}>
          <Text style={styles.textBox2}>Add to Cart</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Adjust the background color as needed
    alignItems: 'center',
  },

  textCard: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  box: {
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-between', // Distribute space evenly between children
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    color: '#F0F0F0',
    // gap: 40,
    position: 'absolute',
    bottom: 0,
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 20,
    // fontWeight: 'normal',
  },
  Box: {
    width: '50%',
    paddingVertical: 15,
    paddingHorizontal: 30,
    fontSize: 20,
    color: 'black',
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  textBox: {
    paddingHorizontal: 30,
    fontSize: 20,
    color: '#000',
    // backgroundColor: 'white',
  },
  Box2: {
    width: '50%',
    paddingVertical: 15,
    paddingHorizontal: 30,
    fontSize: 20,
    backgroundColor: '#FD7400',
    color: '#fff',
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: 20,
  },
  textBox2: {
    fontSize: 20,
    color: '#fff',
  },
  cardScroller: {
    flexDirection: 'row', // Horizontal layout
    paddingHorizontal: 30,
    marginTop: 10,
  },
  cardContainer: {
    width: 130, // Adjust card width as needed
    height: 250, // Adjust card height as needed
    marginRight: 10,
    // backgroundColor: 'lightblue',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 10,
  },
  card: {
    width: 130, // Adjust card width as needed
    height: 155, // Adjust card height as needed

    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  cardImage: {
    width: '80%', // Set the image width to fill the card
    height: 350, // Set the image height to fill the card
    resizeMode: 'cover', // Maintain aspect   // Position the image behind the text
    borderRadius: 10,
    marginTop: 20,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleText: {
    marginTop: 10,
    width: 300,
    color: 'rgb(56,55,54)',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  authorText: {
    marginTop: 20,
    color: '#BFBFBF',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'normal',
  },
  descriptionText: {
    width: '80%',
    marginTop: 20,
    color: '#000',
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'normal',
  },
});

export default CardDetailScreen;
