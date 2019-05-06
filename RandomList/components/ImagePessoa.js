import React, {PureComponent} from 'react';
import {Image} from 'react-native';

export default class ImagemFilme extends PureComponent {
  render () {
    return (
      <Image
        source={{
          uri: this.props.uri,
        }}
        style={{width: 130, height: 200}}
        resizeMode={'contain'}
      />
    );
  }
}