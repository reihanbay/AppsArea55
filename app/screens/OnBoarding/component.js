/* eslint-disable no-undef */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import Swiper from '../../components/elements/swipper';
import styles from './styles';
import { COLOR_WHITE } from '../../styles';
import { IMAGES } from '../../configs';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <Swiper onPress={this._onPress}>
        {/* <StatusBar hidden /> */}
        <View style={[styles.slide, { backgroundColor: COLOR_WHITE }]}>
          <Image style={styles.pic} source={IMAGES.board1} />
          <Text style={styles.header}>Augmented Reality</Text>
          <Text style={styles.text}>Find Your Experience , Looks Your Building Reality</Text>
        </View>

        <View style={[styles.slide, { backgroundColor: COLOR_WHITE }]}>
          <Image style={styles.pic} source={IMAGES.board2} />
          <Text style={styles.header}>Virtual Reality</Text>
          <Text style={styles.text}>Find Your Experience , Looks Your Building in Virtual</Text>
        </View>

        <View style={[styles.slide, { backgroundColor: COLOR_WHITE }]}>
          <Image style={styles.pic} source={IMAGES.board3} />
          <Text style={styles.header}>Future Building</Text>
          <Text style={styles.text}>
            If You don’t have Solution Your Dreams Buliding Create your Future Building with Us
          </Text>
        </View>
      </Swiper>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
