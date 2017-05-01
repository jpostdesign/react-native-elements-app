import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon } from 'react-native-elements';

import colors from "HSColors";
import socialColors from "HSSocialColors";
import fonts from "HSFonts";

class IconsDetail extends Component {
  render() {
    const { navigation } = this.props

    return (
      <Text>Icons detail view</Text>
    );
  }
};

export default IconsDetail;
