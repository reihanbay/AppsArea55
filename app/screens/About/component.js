/* eslint-disable import/first */
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Content } from 'native-base';
import { IMAGES } from '../../configs';
import { scale } from '../../utils/scaling';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { COLOR_WHITE } from '../../styles';
import i18n from '../../i18n';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import styles from './styles';

export default class Component extends React.Component {
  renderNavBar = () => (
    <View style={styles.navContainer}>
      <Header
        title1={i18n.t('HeadMenu.area55')}
        title2={i18n.t('HeadMenu.studio')}
        containerStyle={styles.Header}
      />
      <View style={styles.statusBar} />
    </View>
  );
  renderContent = () => (
    <MainScreen style={styles.content}>
      <Container>
        <Content padder>
          <View style={{ alignItems: 'center' }}>
            <Image source={IMAGES.appLogo} resizeMode="contain" style={styles.logo} />
          </View>
          <View style={styles.line} />
          <View style={styles.desc}>
            <Text style={styles.descText}>{i18n.t('Hello')}</Text>
          </View>
        </Content>
      </Container>
    </MainScreen>
  );
  render() {
    return (
      <View style={styles.container}>
        <ReactNativeParallaxHeader
          headerMinHeight={scale(56)}
          headerMaxHeight={scale(240)}
          extraScrollHeight={scale(20)}
          navbarColor={COLOR_WHITE}
          backgroundImage={IMAGES.foto}
          backgroundImageScale={1.2}
          renderNavBar={this.renderNavBar}
          renderContent={this.renderContent}
          containerStyle={styles.container}
          contentContainerStyle={styles.contentContainer}
          innerContainerStyle={styles.container}
        />
      </View>
    );
  }
}
