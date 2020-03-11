import React from 'react';
import { View, WebView } from 'react-native';
import { Container, Content } from 'native-base';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
// import Header from '../../components/elements/HeaderMenu';
import styles from './styles';

export default class Component extends React.Component {
  _onPress = () => {};
  _toDetail = () => {
    this.props.navigation.navigate('DetailInbox');
  };

  _renderWeb = () => (
    <MainScreen style={styles.content}>
      {/* <Header title1={i18n.t('HeadMenu.area55')} title2={i18n.t('HeadMenu.studio')} /> */}
      <Container>
        <Content>
          <View style={styles.container}>
            <WebView
              source={{
                uri: 'https://web.whatsapp.com'
              }}
            />
          </View>
        </Content>
      </Container>
    </MainScreen>
  );
  render() {
    return <MainScreen>{this._renderWeb()}</MainScreen>;
  }
}
Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
