import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon } from 'react-native-elements';

import colors from "HSColors";
import socialColors from "HSSocialColors";
import fonts from "HSFonts";

const AboutUs = ({ navigation }) => (
  <View>
    <Text>React Native Elements - About US</Text>
    <Button
      onPress={() => navigation.goBack(null)}
      title="Go back"
    />
  </View>
);

AboutUs.navigationOptions = {
  title: 'About Us',
};

export default AboutUs;
