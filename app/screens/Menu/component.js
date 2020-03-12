import React from 'react';
import { TouchableOpacity, ImageBackground, View } from 'react-native';
import { Text, Container, Content } from 'native-base';
import PropTypes from 'prop-types';
import i18n from '../../i18n';
// import { IMAGES } from '../../configs';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/HeaderMenu';
import styles from './styles';
import VR from '../../../assets/svgs/vr';
import { IMAGES } from '../../configs';

export default class Component extends React.Component {
  _onPress = () => {};
  _toDetail = () => {
    this.props.navigation.navigate('DetailInbox');
  };

  _renderCard = () => (
    <MainScreen style={styles.content}>
      <Header title1={i18n.t('HeadMenu.area55')} title2={i18n.t('HeadMenu.studio')} />
      <Container style={styles.container}>
        <Content>
          <View style={styles.containerCard}>
            <ImageBackground source={IMAGES.vr} style={styles.background}>
              <View style={[styles.containerCard]}>
                <View style={styles.positionIcon}>
                  <VR />
                </View>
                <TouchableOpacity style={styles.buttonStart}>
                  <Text style={styles.txtStart}> Let's Start</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </Content>
      </Container>
    </MainScreen>
  );
  // _renderBlank = () => <NoData />;

  // _renderContent = () => (

  // );
  // _renderContent = () => ();
  render() {
    return <MainScreen>{this._renderCard()}</MainScreen>;
  }
}
Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
