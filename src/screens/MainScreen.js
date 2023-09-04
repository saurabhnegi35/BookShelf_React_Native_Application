// MainScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import CustomHeader from './CustomHeader';
import SlideCrousel from './SlideCrousel';
import slides from '../constants/homeScreenData';
import {cardData} from '../constants/homeScreenData';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MainScreen = ({navigation}) => {
  console.log(cardData?.coverImage);
  // const cardData = [
  //   {
  //     id: 1,
  //     title: 'The Legend of Sleepy Hollow',
  //     coverImage: '',
  //     pages: 32,
  //     readPercentage: 20,
  //     author: 'WASHINGTON IRVING',
  //   },
  //   {
  //     id: 2,
  //     title: 'The Mummy',
  //     coverImage: '',
  //     pages: 45,
  //     readPercentage: 58,
  //     author: 'ALLAN COLINS',
  //   },
  //   {
  //     id: 3,
  //     title: 'THE SCARY HALLOWEEN',
  //     coverImage: '',
  //     pages: 65,
  //     readPercentage: 76,
  //     author: 'JOHN DOE',
  //   },
  //   {
  //     id: 4,
  //     title: 'The Curse of Midnight Hollow',
  //     coverImage: '',
  //     pages: 34,
  //     readPercentage: 88,
  //     author: 'ELEANOR BLACKWOOD',
  //   },
  //   {
  //     id: 5,
  //     title: 'The Haunting of Hollowbrook Manor',
  //     coverImage: '',
  //     pages: 64,
  //     readPercentage: 95,
  //     author: 'OLIVER DARKTHORN',
  //   },
  // ];
  return (
    <View style={styles.container}>
      <CustomHeader
        title="CREEPY BOOKSHELF"
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        {/* Top Section */}
        <View style={styles.topSection}>
          <FlatList
            data={slides}
            renderItem={({item}) => <SlideCrousel item={item} />}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            keyExtractor={item => item.id}></FlatList>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <View style={styles.bottomSectionInner}>
            <View style={styles.box}>
              <Text style={styles.text}>Popular</Text>
              <Text style={styles.text}>Open Section</Text>
            </View>

            <View style={styles.bottomSectionInner2}>
              <View style={styles.box2}>
                <Text style={styles.text2}>My Bookshelf</Text>
                <Text style={styles.text2}>See All</Text>
              </View>

              {/* <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardScroller}>
                {cardData.map(card => (
                  <View key={card.id} style={styles.card}> */}
              {/* <Image source={cardData.coverImage} /> */}
              {/* <Text style={styles.cardText}>{card.title}</Text>
                  // </View>
                ))}
              </ScrollView> */}

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardScroller}>
                {cardData.map(card => (
                  <TouchableOpacity
                    key={card.id}
                    onPress={() => {
                      const screenName = `${card.title}`;
                      navigation.navigate(screenName, {card});
                    }}>
                    <View style={styles.cardContainer}>
                      <View key={card.id} style={styles.card}>
                        <Image
                          source={card.coverImage}
                          style={styles.cardImage}
                        />
                      </View>
                      <View style={styles.boxCard}>
                        <Text style={styles.textCard}>{card.pages} Pages</Text>
                        <Text style={styles.textCard}>
                          {card.readPercentage}%
                        </Text>
                      </View>

                      <Text style={styles.cardTitleText}>{card.title}</Text>
                      <Text style={styles.cardAuthorText}>
                        by {card.author}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
          {/* Add your content for the bottom section here */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Adjust the background color as needed
  },
  content: {
    flex: 1,
    padding: 20,
  },
  topSection: {
    flex: 1, // Adjust the flex value to control the height ratio between sections
    backgroundColor: '#f0f0f0', // Background color for the top section
    alignItems: 'center', // Horizontally center items in the section
    justifyContent: 'center', // Vertically center items in the section
  },
  bottomSection: {
    flex: 1, // Adjust the flex value to control the height ratio between sections
    backgroundColor: '#011F29', // Background color for the bottom section
    alignItems: 'center', // Horizontally center items in the section
    justifyContent: 'center', // Vertically center items in the section
  },
  bottomSectionInner: {
    flex: 1, // Adjust the flex value to control the height ratio between sections
    backgroundColor: '#FD7400', // Background color for the bottom section
    alignItems: 'center', // Horizontally center items in the section
    justifyContent: 'center', // Vertically center items in the section
    width: '100%',
    borderTopLeftRadius: 30,
  },
  bottomSectionInner2: {
    flex: 1, // Adjust the flex value to control the height ratio between sections
    backgroundColor: '#F0F0F0', // Background color for the bottom section
    alignItems: 'center', // Horizontally center items in the section
    justifyContent: 'center', // Vertically center items in the section
    width: '100%',
    borderTopLeftRadius: 30,
    marginTop: 10,
  },
  box: {
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-between', // Distribute space evenly between children
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    color: '#F0F0F0',
    gap: 180,
  },
  boxCard: {
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-between', // Distribute space evenly between children
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    color: '#F0F0F0',
    gap: 50,
  },
  text: {
    color: '#F0F0F0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textCard: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  box2: {
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-between', // Distribute space evenly between children
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    color: '#F0F0F0',
    gap: 180,
  },
  text2: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 20,
    // fontWeight: 'normal',
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
    width: '100%', // Set the image width to fill the card
    height: '100%', // Set the image height to fill the card
    resizeMode: 'cover', // Maintain aspect ratio and cover the card
    position: 'absolute', // Position the image behind the text
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardTitleText: {
    color: 'rgb(56,55,54)',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardAuthorText: {
    color: '#BFBFBF',
    marginTop: 10,
    fontSize: 10,
    fontWeight: 'bold',
  },
});

MainScreen.navigationOptions = {
  headerShown: false, // Hide the header for this screen if you want a custom one
};

export default MainScreen;
