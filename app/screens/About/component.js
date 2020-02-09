import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Content, Card, CardItem } from 'native-base';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
import i18n from '../../i18n';
// import { IMAGES } from '../../configs';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import styles from './styles';

export default class Component extends React.Component {
  _onPress = () => {};
  _toDetail = () => {
    this.props.navigation.navigate('DetailInbox');
  };
  // style={styles.bodyCard1}
  _renderCard = () => (
    <MainScreen style={styles.content}>
      {/* <Header /> */}
      <Container>
        <Content padder>
          <View style={{ alignItems: 'center' }}>
            <Image source={IMAGES.appLogo} resizeMode="contain" style={styles.logo} />
          </View>
          <View style={styles.line} />
          {/* <Card style={[styles.cardContainer, styles.cardSize]}>
            <CardItem style={[styles.pageText, styles.cardContainer]}>
              <View>
                <Text style={styles.Text}>Number</Text>
              </View>
            </CardItem>
            <View style={[styles.line]} />
            <View style={[styles.itemCard, styles.cardContainer]}>
              <Text style={styles.textItem}>(0274)2872822</Text>
            </View>
            <View style={[styles.itemCard, styles.cardContainer]}>
              <Text style={styles.textItem}>+628562859954</Text>
            </View>

            <CardItem style={[styles.pageText, styles.cardContainer]}>
              <View>
                <Text style={styles.Text}>Address</Text>
              </View>
            </CardItem>
            <View style={[styles.line]} />
            <View style={[styles.itemCard, styles.cardContainer]}>
              <Text style={styles.textItem}>Kweni RT 02, No. 22 Panggungharjo, Sewon Bantul</Text>
            </View>
            <View style={[styles.itemCard, styles.cardContainer]}>
              <Text style={styles.textItem}>Jl.P.Soedirman 113 Tiron Banyakan, Kediri Jawa Timur</Text>
            </View>

            <CardItem style={[styles.pageText, styles.cardContainer]}>
              <View>
                <Text style={styles.Text}>Social Media / Portofolio</Text>
              </View>
            </CardItem>
            <View style={[styles.line]} />
          </Card> */}
        </Content>
      </Container>
    </MainScreen>
  );
  // _renderBlank = () => <NoData />;

  // _renderContent = () => (

  // );
  // _renderContent = () => ();
  render() {
    return (
      <MainScreen>
        <Header title1={i18n.t('HeadMenu.area55')} title2={i18n.t('HeadMenu.studio')} about />
        {this._renderCard()}
      </MainScreen>
    );
  }
}
Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
