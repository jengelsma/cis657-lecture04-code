import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Button } from 'react-native-elements';
import React from 'react';

const Greeter = ({greeting, buttonTitle}) => {
    return (
      <View style={styles.container}>
          <Text> {greeting} </Text>
          <TextInput placeholder='Enter your name' />
          <Button title={buttonTitle} />
      </View>
    );

};

const styles = StyleSheet.create({
    container: {
        margin: 20, 

    }
});

export default Greeter;