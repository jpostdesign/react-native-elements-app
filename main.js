import Expo from 'expo';
import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from './src/drawer/home'
import AboutUs from './src/drawer/about_us'

const MainRoot = DrawerNavigator({
  Home: {
    path: '/home',
    screen: Home
  },
  AboutUs: {
    path: '/aboutus',
    screen: AboutUs,
  },
},
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63',
    }
  }
);

Expo.registerRootComponent(MainRoot);
