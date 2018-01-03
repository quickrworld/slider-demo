import React from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';

export default class App extends React.Component {
  state = {
    value: 0
  }
  render() {
    return (
      <View style={styles.container}>
        <Slider
          value={this.state.value}
          minimumValue={0}
          maximumValue={100}
          step={1}
          onValueChange={(value) => this.setState(() =>({ value }))}/>
        <Text>Value: {this.state.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
});
