import { StyleSheet, Text, TextInput, View } from "react-native";

import { Button } from "react-native-elements";
import React from "react";

class Greeter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> {this.props.greeting} </Text>
        <TextInput placeholder="Enter your name" />
        <Button title={this.props.buttonTitle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default Greeter;
