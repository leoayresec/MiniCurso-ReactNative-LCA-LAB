import * as React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { Constants } from 'expo';
import Home from './paginas/home';

// You can import from local files

// or any pure javascript modules available in npm

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
