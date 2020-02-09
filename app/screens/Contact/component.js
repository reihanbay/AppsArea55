import React from 'react';
import { View, Text } from 'react-native';
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
  // style={styles.bodyCard1}
  _renderCard = () => (
    <MainScreen style={styles.content}>
      <Header title1={i18n.t('HeadMenu.area55')} title2={i18n.t('HeadMenu.studio')} contact />
      <Container>
        <Content padder>
          <Card style={[styles.cardContainer, styles.cardSize]}>
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
            <View style={styles.svgView}>
              <View style={styles.itemSvg}>
                <FB />
              </View>
              <View style={styles.itemSvg}>
                <IG />
              </View>
              <View style={styles.itemSvg}>
                <GD />
              </View>
              <View style={styles.itemSvg}>
                <Behance />
              </View>
              <View style={styles.itemSvg}>
                <YT />
              </View>
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
