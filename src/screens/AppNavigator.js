import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './MainScreen';
import CardDetailScreen from './CardDetailSreen';
import {NavigationContainer} from '@react-navigation/native';
import {cardData} from '../constants/homeScreenData';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        {cardData.map(card => (
          <Stack.Screen
            key={`${card.title}`}
            name={`${card.title}`}
            component={CardDetailScreen}
            initialParams={{card}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
