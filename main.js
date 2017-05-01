import Expo from 'expo';
import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from './src/drawer/home'
import AboutUs from './src/drawer/about_us'

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = (props) => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View style={{marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('./src/images/logo.png')}
        style={{ width: SCREEN_WIDTH * 0.57 }}
        resizeMode='contain'
      />
    </View>
    <DrawerItems {...props} />
  </View>
);

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
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#fff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      }
    },
    drawerWidth: SCREEN_WIDTH * 0.6,
    contentComponent: CustomDrawerContentComponent
  }
);

Expo.registerRootComponent(MainRoot);
