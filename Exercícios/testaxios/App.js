import * as React from 'react';
import { Text, View, StyleSheet, Alert, FlatList } from 'react-native';
import { Constants } from 'expo';
import axios from "axios";



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repositorios: []
    }
  }


  getRepositorios = async () => {

    try {
      let response = await axios.get('https://api.github.com/users/wellingtonsilva04/repos');
      let { data } = response;
      this.setState({ repositorios: data });
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
  componentDidMount() {
    this.getRepositorios();
  }

  _renderItem = (item ) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  )
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.repositorios}
          keyExtractor = {(item) => item.node_id}
          renderItem={({item}) => 
            this._renderItem(item)

          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
