import { StyleSheet, Platform } from 'react-native';
import { FONT_HEADLINE6_PRIMARY, COLOR_BASE_PRIMARY_MAIN } from '../../../styles';
import metrics from '../../../constants/metrics';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 44 : 56
  },
  centerContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  leftRightContainer: {
    marginHorizontal: metrics.doubleBaseMargin,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title1: {
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_BASE_PRIMARY_MAIN,
    marginBottom: -8,
    fontSize: 18
  },
  title2: {
    ...FONT_HEADLINE6_PRIMARY,
    color: 'black',
    fontSize: 17
  }
});
