/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BASE_PRIMARY_MAIN } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';
import metrics from '../../constants/metrics';

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals

  bodyLeftRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(-10)
  },
  bodyCenter: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  containerCard: {
    marginVertical: metrics.doubleBaseMargin,
    width: scale(270),
    height: scale(400),
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  positionIcon: {
    margin: metrics.doubleBaseMargin
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  buttonStart: {
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    margin: metrics.doubleBaseMargin,
    width: scale(200),
    height: scale(50),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtStart: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: COLOR_WHITE
  },
  blankText: {
    marginTop: METRICS.doubleBaseMargin,
    marginBottom: METRICS.baseMargin,
    fontSize: 18,
    fontWeight: '300'
  },
  container: {
    backgroundColor: '#F9F9F9',
    marginHorizontal: scale(40),
    marginVertical: METRICS.baseMargin
  },
  content: {
    backgroundColor: '#F9F9F9'
  }
});

export default styles;
