import Expo from "expo";
import React, { Component } from "react";
import {
  ScrollView,
  TouchableHighlight,
  View,
  StyleSheet,
  Platform,
  Image
} from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { Text, Button, Grid, Col, Row } from "react-native-elements";

import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'

const log = () => {
  console.log("Attach a method here.");
};

class Buttons extends Component {
  render() {
    const { toggleSideMenu } = this.props;

    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.hero}>
          <MaterialIcons color='white' name='whatshot' size={62} />
          <Text style={styles.heading}>Buttons</Text>
        </View>
        <Button
          buttonStyle={styles.button}
          backgroundColor={socialColors.facebook}
          icon={{ name: "account", type: "material-community" }}
          onPress={() => toggleSideMenu()}
          title="TOGGLE SIDE MENU"
        />
        <Button
          backgroundColor={socialColors.stumbleupon}
          onPress={() => log()}
          title="BUTTON"
          buttonStyle={styles.button}
        />
        <Button
          buttonStyle={styles.button}
          iconRight
          backgroundColor={socialColors.quora}
          icon={{ name: "invert-colors" }}
          onPress={() => log()}
          title="BUTTON WITH RIGHT ICON"
        />
        <Button
          buttonStyle={styles.button}
          iconRight
          backgroundColor={socialColors.tumblr}
          icon={{ name: "motorcycle" }}
          onPress={() => log()}
          title="BUTTON WITH RIGHT ICON"
        />
        <Button
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.foursquare}
          icon={{ name: "card-travel" }}
          onPress={() => log()}
          title="BUTTON RAISED"
        />
        <Button
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.vimeo}
          icon={{ name: "touch-app" }}
          onPress={() => log()}
          title="BUTTON RAISED"
        />
        <Button
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.twitter}
          icon={{ name: "new-releases" }}
          onPress={() => log()}
          title="BUTTON RAISED"
        />
        <Button
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.linkedin}
          icon={{ name: "business" }}
          onPress={() => log()}
          title="BUTTON RAISED"
        />
        <Button
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.pinterest}
          icon={{ name: "send" }}
          onPress={() => log()}
          title="BUTTON RAISED"
        />
        <Button
          buttonStyle={styles.button}
          raised
          onPress={() => log()}
          title="BUTTON RAISED"
        />

        <Button
          large={true}
          buttonStyle={styles.button}
          onPress={() => log()}
          backgroundColor={socialColors.facebook}
          title="LARGE BUTTON"
        />
        <Button
          large={true}
          buttonStyle={styles.button}
          backgroundColor={socialColors.stumbleupon}
          icon={{ name: "cached" }}
          title="LARGE BUTTON WITH ICON"
        />
        <Button
          large={true}
          buttonStyle={styles.button}
          backgroundColor={socialColors.quora}
          raised
          icon={{ name: "album" }}
          title="LARGE RAISED WITH ICON"
        />
        <Button
          large={true}
          buttonStyle={styles.button}
          raised
          iconRight
          backgroundColor={socialColors.tumblr}
          icon={{ name: "accessibility" }}
          title="LARGE RAISED RIGHT ICON"
        />
        <Button
          large={true}
          buttonStyle={styles.button}
          raised
          iconRight
          backgroundColor={socialColors.foursquare}
          icon={{ name: "account-balance" }}
          title="LARGE RAISED RIGHT ICON"
        />
        <Button
          large={true}
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.vimeo}
          icon={{ name: "change-history" }}
          title="LARGE RAISED WITH ICON"
        />
        <Button
          large={true}
          buttonStyle={[{ marginBottom: 15, marginTop: 15 }]}
          icon={{ name: "code" }}
          backgroundColor={socialColors.twitter}
          title="LARGE ANOTHER BUTTON"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 22
  },
  hero: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: colors.primary2
  },
  titleContainer: {},
  button: {
    marginTop: 15
  },
  title: {
    textAlign: "center",
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  }
});

export default Buttons;
