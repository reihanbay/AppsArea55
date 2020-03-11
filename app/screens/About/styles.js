/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_WHITE, COLOR_TRANSPARENT } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';
import { black } from '../../styles/colors';

const styles = StyleSheet.create({
  logo: {
    width: scale(70),
    height: scale(70),
    marginTop: scale(56),
    marginBottom: METRICS.baseMargin
  },
  Header: {
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  container: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },
  contentContainer: {
    flexGrow: 1
  },
  content: {
    backgroundColor: '#F9F9F9',
    alignItems: 'center'
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
  desc: {
    marginVertical: METRICS.baseMargin,
    width: scale(280),
    marginHorizontal: METRICS.doubleBaseMargin
  },
  statusBar: {
    height: scale(100),
    backgroundColor: COLOR_TRANSPARENT
  },
  descText: {
    color: COLOR_BASE_PRIMARY_MAIN,
    fontSize: 14
  },
  navContainer: {
    height: scale(200)
  },
  navBar: {
    height: scale(100),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLOR_TRANSPARENT
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
});

export default styles;
