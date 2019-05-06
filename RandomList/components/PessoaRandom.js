//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import {
    primaryColor,
    textIcons,
    titleStyle,
    normalText,
    subTitles,
    fonts,
  } from './config/styles';
  import ImagemFilme from './ImagemFilme';

// create a component
export default class PessoaRandom extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ImagemFilme uri={this.props.uri}/>
                <Text>PessoaRandom</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primaryColor,
    },
});
