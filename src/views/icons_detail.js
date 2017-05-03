import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon, Card } from 'react-native-elements';
import Rating from 'react-native-ratings';

import colors from "HSColors";
import socialColors from "HSSocialColors";
import fonts from "HSFonts";

const SHIRT_RATING = require('../images/shirt.png')

class IconsDetail extends Component {
  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }

  render() {
    const { navigation } = this.props

    return (
      <Card
        title='RATINGS'
        containerStyle={{ marginTop: 15, marginBottom: 15 }}>
        <Rating
          showRating
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
        />
        <Rating
          type='heart'
          ratingCount={3}
          imageSize={60}
          showRating
          onFinishRating={this.ratingCompleted}
        />
        <Rating
          type='custom'
          ratingImage={SHIRT_RATING}
          ratingColor='#8e44ad'
          ratingBackgroundColor='#c8c7c8'
          ratingCount={10}
          imageSize={30}
          showRating
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
        />
      </Card>
    );
  }
};

export default IconsDetail;
