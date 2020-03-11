/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';
import { black } from '../../styles/colors';

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  content: {
    backgroundColor: '#F9F9F9',
    alignItems: 'center'
  },
  Header: {
    backgroundColor: COLOR_WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  contentColor: {
    backgroundColor: '#F9F9F9'
  },
  cardSize: {
    width: scale(280),
    height: scale(435)
  },
  cardContainer: {
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    borderRadius: 20
  },
  svgView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  pageText: {
    marginTop: METRICS.baseMargin,
    marginHorizontal: METRICS.baseMargin
  },
  itemCard: {
    marginTop: METRICS.baseMargin,
    marginHorizontal: METRICS.doubleBaseMargin
  },
  itemSvg: {
    marginTop: METRICS.baseMargin,
    marginHorizontal: METRICS.baseMargin
  },
  Text: {
    fontSize: 18,
    fontWeight: '400',
    color: COLOR_WHITE
  },
  textItem: {
    fontSize: 14,
    color: COLOR_WHITE
  },
  bodyCard1: {
    backgroundColor: black
  },
  line: {
    borderBottomWidth: 2,
    width: null,
    borderBottomColor: COLOR_WHITE,
    marginTop: -scale(10),
    marginHorizontal: METRICS.doubleBaseMargin
  }
  // blankText: {
  //   marginTop: METRICS.doubleBaseMargin,
  //   marginBottom: METRICS.baseMargin,
  //   fontSize: 18,
  //   fontWeight: '300'
  // },
});

export default styles;
