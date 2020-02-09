import React from 'react';
import { Text, View } from 'react-native';
import { Left, Right } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';
import BackButton from '../BackButton';
import BurgerButton from '../BurgerButton';
// import Setting from '../../../../assets/svgs/Setting';
import Contact from '../../../../assets/svgs/Contact';

export default class Component extends React.Component {
  _renderLeft = () => {
    const { burger, back, leftComponent, leftContainerStyle } = this.props;
    let LeftComponent = <View />;
    if (burger) {
      LeftComponent = <BurgerButton />;
    } else if (back) {
      LeftComponent = <BackButton />;
    } else if (leftComponent) {
      LeftComponent = leftComponent;
    }
    return <View style={[styles.leftRightContainer, leftContainerStyle]}>{LeftComponent}</View>;
  };

  _renderCenter = () => {
    const { title1, title2, centerComponent, centerContainerStyle } = this.props;
    return (
      <View style={[styles.centerContainer, centerContainerStyle]}>
        {title1 ? this._renderTitle1(title1) : centerComponent}
        {title2 ? this._renderTitle2(title2) : centerComponent}
      </View>
    );
  };

  _renderTitle1 = title1 => <Text style={styles.title1}>{title1}</Text>;
  _renderTitle2 = title2 => <Text style={styles.title2}>{title2}</Text>;
  _renderRight = () => {
    const { contact, rightComponent, rightContainerStyle } = this.props;
    let RightComponent = <View />;
    if (contact) {
      RightComponent = <Contact />;
    } else if (rightComponent) {
      RightComponent = rightComponent;
    }
    return <View style={[styles.leftRightContainer, rightContainerStyle]}>{RightComponent}</View>;
  };

  render() {
    return (
      <View style={styles.container}>
        {this._renderLeft()}
        {this._renderCenter()}
        {this._renderRight()}
      </View>
    );
  }
}

Component.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  leftContainerStyle: PropTypes.object,
  centerContainerStyle: PropTypes.object,
  rightContainerStyle: PropTypes.object,
  leftComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.any]),
  centerComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.any]),
  rightComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.any]),
  burger: PropTypes.bool,
  back: PropTypes.bool,
  contact: PropTypes.bool
};

Component.defaultProps = {
  title1: '',
  title2: '',
  leftContainerStyle: {},
  centerContainerStyle: {},
  rightContainerStyle: {},
  leftComponent: <View />,
  centerComponent: <View />,
  rightComponent: <View />,
  burger: false,
  back: true,
  contact: false
};
