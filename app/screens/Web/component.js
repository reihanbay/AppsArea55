/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { View, Dimensions } from 'react-native';
import MyWebView from 'react-native-webview-autoheight';
import { Container, Content } from 'native-base';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';

export default class Component extends React.Component {
  _renderWeb = () => (
    <MainScreen style={styles.content}>
      <Container>
        <Content>
          <View style={styles.container}>
            <MyWebView
              source={{
                uri: 'https://www.area55studio.com'
              }}
              startInLoadingState={true}
              javaScriptEnabled={true}
              domStorageEnabled={false}
              scalesPageToFit={false}
              scrollEnabled={true}
              style={styles.web}
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
