import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import AboutUs from '../views/about_us'

const AboutUsDrawerItem = StackNavigator({
  AboutUs: {
    screen: AboutUs,
  }
},
  {
    mode: 'modal',
  }
);

AboutUsDrawerItem.navigationOptions = {
  drawerLabel: 'About Us',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="info"
      size={24}
      type='material-commnity'
      color={tintColor}
    />
  ),
};

export default AboutUsDrawerItem;
