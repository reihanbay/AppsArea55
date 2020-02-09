import { StyleSheet } from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';
import { black } from '../../styles/colors';

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals

  // bodyLeftRight: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginLeft: scale(-10)
  // },
  // bodyCenter: {
  //   flex: 4,
  //   flexDirection: 'column',
  //   justifyContent: 'center'
  // }
  logo: {
    width: scale(70),
    height: scale(70),
    marginBottom: METRICS.baseMargin
  },
  content: {
    backgroundColor: COLOR_WHITE,
    alignItems: 'center'
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
  // eslint-disable-next-line react-native/no-color-literals
  line: {
    borderBottomWidth: 1,
    width: scale(280),
    borderBottomColor: '#C9C9C9',
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
