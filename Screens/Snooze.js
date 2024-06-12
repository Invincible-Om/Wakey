import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Snooze extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Snooze</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5653D4',
  },

  textStyle: {
    color: 'white',
    fontSize: 20,
  },
});
