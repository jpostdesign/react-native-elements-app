import Expo from 'expo';
import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ButtonsTab from './src/tabs/buttons'
import IconsTab from './src/tabs/icons'

const MainRoot = TabNavigator({
  ButtonsTab: {
    screen: ButtonsTab,
    path: '/',
    navigationOptions: {
      tabBarLabel: 'Buttons',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-beer' : 'ios-beer-outline'}
          size={30}
          type='ionicon'
          color={tintColor}
        />
      ),
    },
  },
  IconsTab: {
    screen: IconsTab,
    path: '/',
    navigationOptions: {
      tabBarLabel: 'Icons',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'emoticon-cool' : 'emoticon-dead'}
          size={30}
          type='material-community'
          color={tintColor}
        />
      ),
    },
  },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  });

Expo.registerRootComponent(MainRoot);
