import Expo from 'expo';
import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ButtonsTab from '../tabs/buttons'
import IconsTab from '../tabs/icons'

const Home = TabNavigator({
  ButtonsTab: {
    screen: ButtonsTab,
    path: '/buttons',
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
    path: '/icons',
    navigationOptions: {
      tabBarLabel: 'Icons',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'emoticon-cool' : 'emoticon-sad'}
          size={30}
          type='material-community'
          color={tintColor}
        />
      ),
    },
  },
}, {
    initialRouteName: 'ButtonsTab',
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  });

Home.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
      size={24}
      type='material-commnity'
      color={tintColor}
    />
  ),
};

export default Home;
