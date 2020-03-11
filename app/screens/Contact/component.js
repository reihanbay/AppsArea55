/* eslint-disable react-native/no-color-literals */
/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { View, Text, Linking, Platform, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem } from 'native-base';
import PropTypes from 'prop-types';

import i18n from '../../i18n';
// import { IMAGES } from '../../configs';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import styles from './styles';
import FB from '../../../assets/svgs/FB';
import IG from '../../../assets/svgs/IG';
import GD from '../../../assets/svgs/GD';
import YT from '../../../assets/svgs/YT';
import Behance from '../../../assets/svgs/Behance';

export default class Component extends React.Component {
  _onPress = () => {};
  _toDetail = () => {
    this.props.navigation.navigate('DetailInbox');
  };
  Call1 = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${02742872822}';
    } else {
      phoneNumber = 'telprompt:${02742872822}';
    }
    Linking.openURL(phoneNumber);
  };
  Call2 = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${+628562859954}';
    } else {
      phoneNumber = 'telprompt:${+628562859954}';
    }
    Linking.openURL(phoneNumber);
  };

  // style={styles.bodyCard1}
  _renderCard = () => (
    <MainScreen style={styles.content}>
      <Header
        title1={i18n.t('HeadMenu.area55')}
        title2={i18n.t('HeadMenu.studio')}
        contact
        containerStyle={styles.Header}
      />
      <Container>
        <Content style={styles.contentColor} padder>
          <Card style={[styles.cardContainer, styles.cardSize]}>
            <CardItem style={[styles.pageText, styles.cardContainer]}>
              <View>
                <Text style={styles.Text}>Number</Text>
              </View>
            </CardItem>
            <View style={[styles.line]} />
            <TouchableOpacity style={[styles.itemCard, styles.cardContainer]} onPress={this.Call1}>
              <Text style={styles.textItem}>(0274)2872822</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.itemCard, styles.cardContainer]}>
              <Text style={styles.textItem}>+628562859954</Text>
            </TouchableOpacity>
            <CardItem style={[styles.pageText, styles.cardContainer]}>
              <View>
                <Text style={styles.Text}>Address</Text>
              </View>
            </CardItem>
            <View style={[styles.line]} />
            <TouchableOpacity
              style={[styles.itemCard, styles.cardContainer]}
              onPress={() =>
                Linking.openURL(
                  'https://www.google.co.id/maps/place/AREA+55+STUDIO/@-7.8440699,110.32955,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7a57ca4e3ee88b:0xe5c565b964e539f9!8m2!3d-7.8440752!4d110.3317387'
                )
              }
            >
              <Text style={styles.textItem}>
                Perumahan Kasongan Mansion, Kalongan, RT.08, Bangunjiwo, Daerah Istimewa Yogyakarta
              </Text>
            </TouchableOpacity>

            <CardItem style={[styles.pageText, styles.cardContainer]}>
              <View>
                <Text style={styles.Text}>Social Media / Portofolio</Text>
              </View>
            </CardItem>
            <View style={[styles.line]} />
            <View style={styles.svgView}>
              <TouchableOpacity
                style={styles.itemSvg}
                onPress={() => Linking.openURL('https://facebook.com/area55studio/')}
              >
                <FB />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.itemSvg}
                onPress={() => Linking.openURL('https://instagram.com/area55studio?igshid=1npe7c39lz9kl')}
              >
                <IG />
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemSvg} onPress={() => Linking.openURL('https://google.com')}>
                <GD />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.itemSvg}
                onPress={() => Linking.openURL('https://www.behance.net/area55studio')}
              >
                <Behance />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.itemSvg}
                onPress={() => Linking.openURL('https://www.youtube.com/channel/UCKYEYbI72VzeIC0VhP9crhQ')}
              >
                <YT />
              </TouchableOpacity>
            </View>
          </Card>
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
